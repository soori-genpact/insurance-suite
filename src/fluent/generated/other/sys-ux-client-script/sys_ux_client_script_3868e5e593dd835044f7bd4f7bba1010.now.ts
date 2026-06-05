import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3868e5e593dd835044f7bd4f7bba1010'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'f35865e593dd835044f7bd4f7bba10cc',
        name: 'viewport_gph/initiallyCollapsed',
        required_translations: '[]',
        script: `/**
  * @param {params} params
  * @param {api} params.api
  * @param {TransformApiHelpers} params.helpers
  */
function evaluateProperty({api, helpers}) {
	return api.context.props.userPrefs['workspace.showAgentAssist'] != 'true';
}`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'transform',
    },
})
