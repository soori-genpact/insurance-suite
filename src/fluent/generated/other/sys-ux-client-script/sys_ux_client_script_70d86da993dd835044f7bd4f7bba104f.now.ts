import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['70d86da993dd835044f7bd4f7bba104f'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'b3c8a9a993dd835044f7bd4f7bba1058',
        name: 'Refresh List',
        required_translations: '[]',
        script: `function handler({
      api,
      event: {
          payload,
          payload: {
              name,
              value,
              previousValue
          }
      },
      helpers,
      imports
    }) {
      
      if (name === 'screen' &&
          value.isActive != previousValue.isActive
          && value.isActive
          && api.state.hasRecordChanges) {
            api.setState('hasRecordChanges', false);
            api.data.list_controller.refreshRequested({
                hideLoader: true
            });     
      }
      if (name === 'activityLogs' && value && value.size > 0) {
        const operationList = ['modified', 'updated', 'inserted', 'deleted', 'closed'];
        // Transform "value" and get the latest entry
        const map = Array.from(value).pop()[1];
        const crudActivitiesLength = map.activities.get('crud').length;
        if (crudActivitiesLength < 1)
            return;
        const {
            operation,
            sysId,
            timestamp
        } = map.activities.get('crud')[crudActivitiesLength - 1];
        if (operationList.includes(operation) &&
            sysId !== "-1" &&
            !api.context.props.screen.isActive &&
            !api.state.hasRecordChanges) {
            api.setState('hasRecordChanges', true);
        }
    }
    }`,
        script_api_version: '2.0.0',
        target: 'macroponent',
        type: 'default',
    },
})
