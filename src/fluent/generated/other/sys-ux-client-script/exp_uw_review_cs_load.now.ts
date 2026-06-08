import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ec000001000000000000000000000015'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'ec000001000000000000000000000012',
        name: 'exp_uw_review_activity/on_load',
        required_translations: '[]',
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
        script: `/**
 * Loads the Exposure Case and builds the TIV summary metrics for the
 * Underwriter Review activity when the macroponent opens or mode changes.
 *
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {ApiHelpers} params.helpers
 */
async function handler({ api, event, helpers }) {
    const { sysId, table, mode } = api.props;
    if (!sysId) return;

    // Drive button visibility from state so isHidden bindings in the composition react
    api.setState('isReviewMode', mode !== 'signoff');
    api.setState('isSignoffMode', mode === 'signoff');

    try {
        // Load the Exposure Case
        const caseResp = await fetch(
            \`/api/now/table/\${table || 'x_gegis_ins_policy_exposure_case'}/\${sysId}\` +
            '?sysparm_fields=number,exposure_status,total_tiv,notes,submission',
            { headers: { Accept: 'application/json' } }
        );
        const caseResult = await caseResp.json();
        api.setState('exposureCase', caseResult.result || {});

        // Load related Exposure Items
        const itemsResp = await fetch(
            \`/api/now/table/x_gegis_ins_policy_exposure_item?sysparm_query=exposure_case=\${sysId}\` +
            '&sysparm_fields=sys_id,line_of_business,location,sum_insured,physical_damage_total,business_interruption_total,currency',
            { headers: { Accept: 'application/json' } }
        );
        const itemsResult = await itemsResp.json();
        const items       = itemsResult.result || [];
        api.setState('exposureItems', items);

        // Aggregate TIV by line of business for summary cards
        const lobMap = {};
        for (const item of items) {
            const lob = item.line_of_business?.display_value || item.line_of_business?.value || 'Other';
            if (!lobMap[lob]) lobMap[lob] = 0;
            lobMap[lob] += Number(item.sum_insured || 0);
        }

        const lobColorMap = {
            'Property':     { bg: '#EBF5FF', icon: '#0070D2', glyph: '$' },
            'Workers Comp': { bg: '#EDFAF1', icon: '#137333', glyph: '$' },
            'Auto':         { bg: '#FFF9E6', icon: '#BE5504', glyph: '$' },
        };

        const totalTiv = Object.values(lobMap).reduce((s, v) => s + v, 0);

        const summary = Object.entries(lobMap).map(([lob, tiv]) => {
            const colors = lobColorMap[lob] || { bg: '#F4F4F4', icon: '#444', glyph: '$' };
            return {
                heading:             lob,
                value:               tiv.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
                format:              'none',
                iconGlyph:           colors.glyph,
                iconBackgroundColor: colors.bg,
                iconColor:           colors.icon,
                trendPositiveIsGood: true,
            };
        });

        summary.push({
            heading:             'Total TIV',
            value:               totalTiv.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
            format:              'none',
            iconGlyph:           '\\u03A3',
            iconBackgroundColor: '#F5F0FF',
            iconColor:           '#6B21A8',
            trendPositiveIsGood: true,
        });

        api.setState('tivSummary', summary);

        // For signoff mode, pre-set decision to pending
        if (mode === 'signoff') {
            api.setState('decision', 'pending');
            api.setState('uwNotes', '');
        }
    } catch (err) {
        console.error('[ExpUwReview] Failed to load exposure summary:', err);
        api.setState('errorMessage', 'Failed to load exposure summary. Please refresh.');
    }
}`,
    },
})
