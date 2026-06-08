import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ec000001000000000000000000000018'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'ec000001000000000000000000000012',
        name: 'exp_uw_review_activity/reject',
        required_translations: '[]',
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
        script: `async function handler({ api, event, helpers }) {
    const { sysId, table } = api.props;
    if (!sysId) {
        api.setState('errorMessage', 'Missing Exposure Case reference. Cannot reject.');
        return;
    }

    api.setState('isSubmitting', true);
    api.setState('errorMessage', null);

    try {
        const timestamp = new Date().toISOString();

        const caseResp = await fetch(
            \`/api/now/table/\${table || 'x_gegis_ins_policy_exposure_case'}/\${sysId}?sysparm_fields=notes\`,
            { headers: { Accept: 'application/json' } }
        );
        const caseData = await caseResp.json();
        const existing = caseData.result?.notes || '';
        const note     = \`[UW Rejected \${timestamp}] — returned for re-entry\`;
        const updated  = existing ? \`\${existing}\\n\${note}\` : note;

        const patchResp = await fetch(
            \`/api/now/table/\${table || 'x_gegis_ins_policy_exposure_case'}/\${sysId}\`,
            {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ exposure_status: 'data_entry', notes: updated }),
            }
        );

        if (!patchResp.ok) {
            const err = await patchResp.json().catch(() => ({}));
            throw new Error(err?.error?.message || \`HTTP \${patchResp.status}\`);
        }

        api.emit('PAD_ACTIVITY_REJECT', {
            message: \`Exposure case rejected [\${timestamp}]. Returned to Data Entry.\`,
        });
    } catch (err) {
        console.error('[ExpUwReview] Reject failed:', err);
        api.setState('errorMessage', \`Reject failed: \${err.message || 'Unknown error'}\`);
    } finally {
        api.setState('isSubmitting', false);
    }
}`,
    },
})
