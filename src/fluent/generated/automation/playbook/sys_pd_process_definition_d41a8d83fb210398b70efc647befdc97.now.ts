import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d41a8d83fb210398b70efc647befdc97'],
    table: 'sys_pd_process_definition',
    data: {
        access: 'public',
        active: 'true',
        allow_as_nested: 'true',
        data_retention_period_override: '6_week',
        description: 'Risk Case',
        designer_state: '{"diagram":{"hiddenElements":{"edges":{}}}}',
        execution_type: 'on_demand',
        label: 'Risk Case',
        launcher_show_record_form: 'false',
        name: 'risk_case',
        permission:
            '{"VIEW":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"LANE_ADD_OPTIONAL_ACTIVITY":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"CANCEL":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"RESTART":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"LANE_RESTART":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"ACTIVITY_RESTART":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}],"LAUNCH":[{"source":"USER_ROLE","id":"b0593b350a0a0aa7001d689e4542dc28"}]}',
        process_type: '52c6d3eeff1be2102c2fffffffffff44',
        public_access: 'false',
        restartable: 'RESTARTABLE_TRUE',
        run_on_pad_engine: 'false',
        run_strategy: 'run_once',
        run_strategy_on_process_definition: 'true',
        schema_version: '3',
        snapshot: '79dc645f93658310ce18b5d97bba1049',
        start_non_blocking: 'true',
        status: 'published',
        sync_state: 'COMPLETE',
        view_type: 'DIAGRAM',
    },
})
