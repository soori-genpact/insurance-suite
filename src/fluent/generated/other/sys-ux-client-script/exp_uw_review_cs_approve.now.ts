import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ec000001000000000000000000000017'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'ec000001000000000000000000000012',
        name: 'exp_uw_review_activity/approve',
        required_translations: '[]',
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
        script: `async function handler({ api, event, helpers }) {
    const { sysId, table } = api.props;
    if (!sysId) {
        api.setState('errorMessage', 'Missing Exposure Case reference. Cannot approve.');
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
        const note     = \`[UW Approved \${timestamp}]\`;
        const updated  = existing ? \`\${existing}\\n\${note}\` : note;

        const patchResp = await fetch(
            \`/api/now/table/\${table || 'x_gegis_ins_policy_exposure_case'}/\${sysId}\`,
            {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ exposure_status: 'complete', notes: updated }),
            }
        );

        if (!patchResp.ok) {
            const err = await patchResp.json().catch(() => ({}));
            throw new Error(err?.error?.message || \`HTTP \${patchResp.status}\`);
        }

        api.emit('PAD_ACTIVITY_COMPLETE', {
            message: \`Exposure case approved. Status set to Complete [\${timestamp}].\`,
        });
    } catch (err) {
        console.error('[ExpUwReview] Approve failed:', err);
        api.setState('errorMessage', \`Approve failed: \${err.message || 'Unknown error'}\`);
    } finally {
        api.setState('isSubmitting', false);
    }
}`,
    },
})
