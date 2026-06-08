import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ec000001000000000000000000000014'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'ec000001000000000000000000000011',
        name: 'exp_data_entry_activity/save_and_continue',
        required_translations: '[]',
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
        script: `/**
 * Handles the Save & Continue action for the Exposure Data Entry activity.
 * Updates exposure_status to 'in_review', recalculates total_tiv, and
 * emits PAD activity completion to advance the playbook.
 *
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {ApiHelpers} params.helpers
 */
async function handler({ api, event, helpers }) {
    const { sysId, table } = api.props;
    if (!sysId) {
        api.setState('errorMessage', 'Missing Exposure Case reference. Cannot save.');
        return;
    }

    api.setState('isSaving', true);
    api.setState('errorMessage', null);

    try {
        // Fetch current exposure items to recalculate total TIV
        const itemsResp = await fetch(
            \`/api/now/table/x_gegis_ins_policy_exposure_item?sysparm_query=exposure_case=\${sysId}&sysparm_fields=sys_id,sum_insured\`,
            { headers: { Accept: 'application/json' } }
        );
        const itemsData = await itemsResp.json();
        const items     = itemsData.result || [];

        if (items.length === 0) {
            api.setState('isSaving', false);
            api.setState('errorMessage', 'At least one Exposure Item is required before continuing.');
            return;
        }

        const totalTiv = items.reduce((sum, i) => sum + Number(i.sum_insured || 0), 0);

        // PATCH the Exposure Case — update status and total TIV
        const patchResp = await fetch(
            \`/api/now/table/\${table || 'x_gegis_ins_policy_exposure_case'}/\${sysId}\`,
            {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    exposure_status: 'in_review',
                    total_tiv:       totalTiv,
                }),
            }
        );

        if (!patchResp.ok) {
            const errBody = await patchResp.json().catch(() => ({}));
            throw new Error(errBody?.error?.message || \`HTTP \${patchResp.status}\`);
        }

        // Signal PAD playbook to complete this activity and advance
        api.emit('PAD_ACTIVITY_COMPLETE', {
            message: \`Exposure data saved. Total TIV: \${totalTiv.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}. Status updated to In Review.\`,
        });

    } catch (err) {
        console.error('[ExpDataEntry] Save failed:', err);
        api.setState('errorMessage', \`Save failed: \${err.message || 'Unknown error'}\`);
    } finally {
        api.setState('isSaving', false);
    }
}`,
    },
})
