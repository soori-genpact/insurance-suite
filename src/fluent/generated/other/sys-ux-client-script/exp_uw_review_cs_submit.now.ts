import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ec000001000000000000000000000016'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'ec000001000000000000000000000012',
        name: 'exp_uw_review_activity/submit_decision',
        required_translations: '[]',
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
        script: `/**
 * Handles the Underwriter Submit Decision action.
 *
 * Approve  → sets exposure_status = 'complete', appends UW notes.
 * Reject   → sets exposure_status = 'data_entry' (sends back for rework),
 *            appends rejection reason to notes.
 *
 * Emits PAD_ACTIVITY_COMPLETE to advance the playbook on approval,
 * or PAD_ACTIVITY_REJECT to loop back on rejection.
 *
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {ApiHelpers} params.helpers
 */
async function handler({ api, event, helpers }) {
    const { sysId, table } = api.props;
    const decision = api.state.decision;
    const uwNotes  = api.state.uwNotes || '';

    if (!sysId) {
        api.setState('errorMessage', 'Missing Exposure Case reference. Cannot submit.');
        return;
    }
    if (!decision || decision === 'pending') {
        api.setState('errorMessage', 'Please select Approve or Reject before submitting.');
        return;
    }
    if (decision === 'reject' && !uwNotes.trim()) {
        api.setState('errorMessage', 'A rejection reason is required in the UW Notes field.');
        return;
    }

    api.setState('isSubmitting', true);
    api.setState('errorMessage', null);

    try {
        const isApproved      = decision === 'approve';
        const newStatus       = isApproved ? 'complete' : 'data_entry';
        const timestamp       = new Date().toISOString();
        const notePrefix      = isApproved
            ? \`[UW Approved \${timestamp}]: \${uwNotes}\`
            : \`[UW Rejected \${timestamp}]: \${uwNotes}\`;

        // Fetch existing notes so we can append
        const caseResp = await fetch(
            \`/api/now/table/\${table || 'x_gegis_ins_policy_exposure_case'}/\${sysId}?sysparm_fields=notes\`,
            { headers: { Accept: 'application/json' } }
        );
        const caseData    = await caseResp.json();
        const existingNotes = caseData.result?.notes || '';
        const updatedNotes  = existingNotes ? \`\${existingNotes}\\n\${notePrefix}\` : notePrefix;

        // PATCH the Exposure Case with new status and notes
        const patchResp = await fetch(
            \`/api/now/table/\${table || 'x_gegis_ins_policy_exposure_case'}/\${sysId}\`,
            {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    exposure_status: newStatus,
                    notes:           updatedNotes,
                }),
            }
        );

        if (!patchResp.ok) {
            const errBody = await patchResp.json().catch(() => ({}));
            throw new Error(errBody?.error?.message || \`HTTP \${patchResp.status}\`);
        }

        if (isApproved) {
            // Advance playbook to Completion stage
            api.emit('PAD_ACTIVITY_COMPLETE', {
                message: \`Exposure case approved by Underwriter. Status set to Complete. Notes: \${uwNotes}\`,
            });
        } else {
            // Send playbook back to Data Entry stage
            api.emit('PAD_ACTIVITY_REJECT', {
                message: \`Exposure case rejected. Reason: \${uwNotes}. Returned to Data Entry.\`,
            });
        }
    } catch (err) {
        console.error('[ExpUwReview] Submit decision failed:', err);
        api.setState('errorMessage', \`Submit failed: \${err.message || 'Unknown error'}\`);
    } finally {
        api.setState('isSubmitting', false);
    }
}`,
    },
})
