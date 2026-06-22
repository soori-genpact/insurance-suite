import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['fbb011b2fb69cb58b70efc647befdc60'],
    table: 'sys_ux_client_script',
    data: {
        includes: '486f9b47ffb13010667053ea793bf11c',
        macroponent: '7bb0d972fb69cb58b70efc647befdc87',
        name: 'Update formFieldItems',
        required_translations: '[]',
        script: `/**
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {any} params.imports
 * @param {ApiHelpers} params.helpers
 */
function handler({api, event, helpers, imports}) {
     const {
        setFormFieldItems
    } = imports['sn_playbook_exp.playbookActivityUIUtils']();
    
    setFormFieldItems(api, event);
}`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
