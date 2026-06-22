import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['76dfc5befb29cb58b70efc647befdc35'],
    table: 'sys_ux_client_script',
    data: {
        includes: '486f9b47ffb13010667053ea793bf11c',
        macroponent: 'badf85befb29cb58b70efc647befdcad',
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
