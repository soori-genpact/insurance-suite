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
    const { sysId, mode } = api.props;
    if (!sysId) {
        api.setState('errorMessage', 'Missing Exposure Case reference. Cannot proceed.');
        return;
    }

    // Review mode (Activity 3.1) — just advance to next activity, no decision needed
    if (mode !== 'signoff') {
        api.emit('PAD_ACTIVITY_COMPLETE', {
            message: 'Exposure summary reviewed. Proceeding to Underwriter Sign-off.',
        });
        return;
    }

    // Signoff mode — use the Approve / Reject buttons instead
    api.setState('errorMessage', 'Please use the Approve or Reject button to submit your decision.');
}`,
    },
})
