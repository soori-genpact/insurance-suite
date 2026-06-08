import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['664cb77d3583804651a3422c8ee46bff'],
    table: 'sys_pd_lane',
    data: {
        active: 'true',
        label: 'Initiation',
        name: 'new_stage',
        order: '1',
        permission: '{}',
        process_definition: 'ec000001000000000000000000000001',
        restart_rule: 'RUN_ONLY_ONCE',
        start_rule_name: 'immediate',
    },
})
Record({
    $id: Now.ID['b71af78c1130c0694d5b6883b97a388b'],
    table: 'sys_pd_lane',
    data: {
        active: 'true',
        label: 'Data Entry',
        name: 'new_stage_1',
        order: '2',
        permission: '{}',
        process_definition: 'ec000001000000000000000000000001',
        restart_rule: 'RUN_ONLY_ONCE',
        start_rule_name: 'after_items',
        starts_after_lanes: '664cb77d3583804651a3422c8ee46bff',
    },
})
Record({
    $id: Now.ID['b6a3012ffffbb274c76363211f3de01e'],
    table: 'sys_pd_lane',
    data: {
        active: 'true',
        label: 'Review',
        name: 'new_stage_2',
        order: '3',
        permission: '{}',
        process_definition: 'ec000001000000000000000000000001',
        restart_rule: 'RUN_ONLY_ONCE',
        start_rule_name: 'after_items',
        starts_after_lanes: 'b71af78c1130c0694d5b6883b97a388b',
    },
})
Record({
    $id: Now.ID['11cc3cae0d777854e268be337ebd2297'],
    table: 'sys_pd_lane',
    data: {
        active: 'true',
        label: 'Completion',
        name: 'new_stage_3',
        order: '4',
        permission: '{}',
        process_definition: 'ec000001000000000000000000000001',
        restart_rule: 'RUN_ONLY_ONCE',
        start_rule_name: 'after_items',
        starts_after_lanes: 'b6a3012ffffbb274c76363211f3de01e',
    },
})
