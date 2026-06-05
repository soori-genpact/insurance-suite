import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a8d6712d33994bd07ef8f499ed5c7b3a'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '64d6312d33994bd07ef8f499ed5c7be6',
        name: 'Set browser or workspace tab title',
        required_translations: '[]',
        script: `/**
* @param {params} params
* @param {api} params.api
* @param {any} params.event
* @param {any} params.imports
* @param {ApiHelpers} params.helpers
*/
function handler({api, event, helpers, imports}) {
    // set browser and workspace tab title
    if (!event.payload.title) {
        console.warn('ignoring request to set empty tab title');
        return;
    }
    api.emit('SCREEN_STATUS_CHANGED', { title: event.payload.title });
}`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
