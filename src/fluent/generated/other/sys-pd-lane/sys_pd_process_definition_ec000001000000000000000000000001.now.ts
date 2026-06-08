import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['664cb77d3583804651a3422c8ee46bff'],
    table: 'sys_pd_lane',
    data: {
        active: 'true',
        label: 'New Stage',
        name: 'new_stage',
        order: '1',
        permission: '{}',
        process_definition: 'ec000001000000000000000000000001',
        restart_rule: 'RUN_ONLY_ONCE',
        start_rule_name: 'immediate',
    },
})
