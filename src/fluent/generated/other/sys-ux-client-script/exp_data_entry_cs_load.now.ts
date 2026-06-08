import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ec000001000000000000000000000013'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'ec000001000000000000000000000011',
        name: 'exp_data_entry_activity/on_load',
        required_translations: '[]',
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
        script: `/**
 * Loads Exposure Case and its related Exposure Items when the activity opens.
 *
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {ApiHelpers} params.helpers
 */
async function handler({ api, event, helpers }) {
    const { sysId, table } = api.props;
    if (!sysId) return;

    try {
        // Fetch the Exposure Case record
        const caseResp = await fetch(
            \`/api/now/table/\${table || 'x_gegis_ins_policy_exposure_case'}/\${sysId}?sysparm_fields=number,exposure_status,total_tiv,notes,submission\`,
            { headers: { Accept: 'application/json' } }
        );
        const caseData = await caseResp.json();
        api.setState('exposureCase', caseData.result || {});

        // Fetch related Exposure Items
        const itemsResp = await fetch(
            \`/api/now/table/x_gegis_ins_policy_exposure_item?sysparm_query=exposure_case=\${sysId}&sysparm_fields=sys_id,line_of_business,location,building,machinery,stock,business_interruption_total,sum_insured,currency\`,
            { headers: { Accept: 'application/json' } }
        );
        const itemsData = await itemsResp.json();
        const items = itemsData.result || [];

        // Build metric cards for the TIV repeater
        const lobColors = {
            property:     { bg: '#EBF5FF', color: '#0070D2' },
            workers_comp: { bg: '#EDFAF1', color: '#137333' },
            auto:         { bg: '#FFF9E6', color: '#BE5504' },
        };
        const metrics = items.map(item => {
            const lob    = item.line_of_business?.value || item.line_of_business || 'other';
            const colors = lobColors[lob] || { bg: '#F4F4F4', color: '#444444' };
            return {
                heading:          item.line_of_business?.display_value || lob,
                value:            Number(item.sum_insured || 0).toLocaleString('en-US', { style: 'currency', currency: item.currency?.value || 'USD' }),
                format:           'none',
                iconGlyph:        '$',
                iconBackgroundColor: colors.bg,
                iconColor:        colors.color,
                _raw:             item,
            };
        });

        // Add a Total TIV card at the end
        const totalTiv = items.reduce((sum, i) => sum + Number(i.sum_insured || 0), 0);
        metrics.push({
            heading:             'Total TIV',
            value:               totalTiv.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
            format:              'none',
            iconGlyph:           '\\u03A3',
            iconBackgroundColor: '#F5F0FF',
            iconColor:           '#6B21A8',
            _raw:                null,
        });

        api.setState('exposureItems', metrics);
    } catch (err) {
        console.error('[ExpDataEntry] Failed to load exposure data:', err);
        api.setState('errorMessage', 'Failed to load exposure data. Please refresh the page.');
    }
}`,
    },
})
