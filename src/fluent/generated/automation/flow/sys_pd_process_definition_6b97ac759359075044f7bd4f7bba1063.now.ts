import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ba18ecb59359075044f7bd4f7bba10f2'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_record',
        id: 'fb0e906d172e50349ff70dbde2a24a39',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
        value: '{{vl.Simple Instruction.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['7218ecb59359075044f7bd4f7bba10f1'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_table',
        id: 'fb0e906d172e50349ff70dbde2a24a39',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
    },
})
Record({
    $id: Now.ID['fe18ecb59359075044f7bd4f7bba10f2'],
    table: 'sys_element_mapping',
    data: {
        field: 'description',
        id: 'fb0e906d172e50349ff70dbde2a24a39',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
        value: '{{vl.Simple Instruction./start.message}}',
    },
})
Record({
    $id: Now.ID['3e18ecb59359075044f7bd4f7bba10f0'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: 'fb0e906d172e50349ff70dbde2a24a39',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
        value: '{{vl.Simple Instruction.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['7618ecb59359075044f7bd4f7bba10f2'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_table',
        id: 'fb0e906d172e50349ff70dbde2a24a39',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
    },
})
Record({
    $id: Now.ID['b618ecb59359075044f7bd4f7bba10f1'],
    table: 'sys_element_mapping',
    data: {
        field: 'footer',
        id: 'fb0e906d172e50349ff70dbde2a24a39',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
    },
})
Record({
    $id: Now.ID['3218ecb59359075044f7bd4f7bba10f2'],
    table: 'sys_element_mapping',
    data: {
        field: 'icon',
        id: 'fb0e906d172e50349ff70dbde2a24a39',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
    },
})
Record({
    $id: Now.ID['fa18ecb59359075044f7bd4f7bba10f1'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: 'fb0e906d172e50349ff70dbde2a24a39',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
        value: '{{vl.Simple Instruction./start.automated}}',
    },
})
Record({
    $id: Now.ID['7618ecb59359075044f7bd4f7bba10ed'],
    table: 'sys_element_mapping',
    data: {
        field: 'message',
        id: 'fb0e906d172e50349ff70dbde2a24a39',
        table: 'var__m_sys_hub_flow_input_2b8b42e31b630010affd0e55cc4bcbe9',
        value: '{{act.fb0e906d172e50349ff70dbde2a24a39.description}}',
    },
})
Record({
    $id: Now.ID['3618ecb59359075044f7bd4f7bba10f3'],
    table: 'sys_element_mapping',
    data: {
        field: 'tagline',
        id: 'fb0e906d172e50349ff70dbde2a24a39',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
    },
})
Record({
    $id: Now.ID['7a18ecb59359075044f7bd4f7bba10f3'],
    table: 'sys_element_mapping',
    data: {
        field: 'title',
        id: 'fb0e906d172e50349ff70dbde2a24a39',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
        value: '{{act.fb0e906d172e50349ff70dbde2a24a39.label}}',
    },
})
Record({
    $id: Now.ID['3618ecb59359075044f7bd4f7bba10ee'],
    table: 'sys_element_mapping',
    data: {
        field: 'wait',
        id: 'fb0e906d172e50349ff70dbde2a24a39',
        table: 'var__m_sys_hub_flow_input_2b8b42e31b630010affd0e55cc4bcbe9',
    },
})
Record({
    $id: Now.ID['fa58a8f59359075044f7bd4f7bba10db'],
    table: 'sys_element_mapping',
    data: {
        field: 'parent_record',
        id: '5be3ec638c9fea70c9dd578cf838f63b',
        table: 'var__m_sys_pd_process_input_6b97ac759359075044f7bd4f7bba1063',
        value: '{{triggerRecord}}',
    },
})
Record({
    $id: Now.ID['40682cf59359075044f7bd4f7bba103c'],
    table: 'sys_trigger_runner_mapping',
    data: {
        active: 'true',
        data: '{"trigger_on_unique_change":"org.mozilla.javascript.UniqueTag@4cd3eeab: NOT_FOUND","parent_record":{"elementMapping":"{{triggerRecord}}","variableValue":null,"elementMappingOrVariableValue":"{{triggerRecord}}"},"run_trigger":"org.mozilla.javascript.UniqueTag@4cd3eeab: NOT_FOUND"}',
        identifier: '5be3ec638c9fea70c9dd578cf838f63b',
        identifier_type: 'playbook',
        runner: 'PDTriggerRunner',
        trigger: '3b582cf59359075044f7bd4f7bba103a',
    },
})
Record({
    $id: Now.ID['3b582cf59359075044f7bd4f7bba103a'],
    table: 'sys_flow_record_trigger',
    data: {
        active: 'true',
        condition: '^EQ',
        on_delete: 'false',
        on_insert: 'true',
        on_update: 'false',
        run_flow_in: 'background',
        run_on_extended: 'false',
        run_when_setting: 'both',
        run_when_user_setting: 'any',
        sys_domain: 'global',
        sys_domain_path: '/',
        table: 'x_gegis_ins_policy_clearance_case',
    },
})
Record({
    $id: Now.ID['3d9b02ed53290b107d5fd301a0490ea6'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_record',
        id: 'de7e4cad65736cb5f734ecd279c8b003',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['3d9bc6ad53290b107d5fd301a0490ee6'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_table',
        id: 'de7e4cad65736cb5f734ecd279c8b003',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['319b02ed53290b107d5fd301a0490ea8'],
    table: 'sys_element_mapping',
    data: {
        field: 'description',
        id: 'de7e4cad65736cb5f734ecd279c8b003',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./start.message}}',
    },
})
Record({
    $id: Now.ID['719bc6ad53290b107d5fd301a0490ee7'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: 'de7e4cad65736cb5f734ecd279c8b003',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['719b02ed53290b107d5fd301a0490ea7'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_table',
        id: 'de7e4cad65736cb5f734ecd279c8b003',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['b19b02ed53290b107d5fd301a0490ea6'],
    table: 'sys_element_mapping',
    data: {
        field: 'footer',
        id: 'de7e4cad65736cb5f734ecd279c8b003',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['b59b02ed53290b107d5fd301a0490ea7'],
    table: 'sys_element_mapping',
    data: {
        field: 'icon',
        id: 'de7e4cad65736cb5f734ecd279c8b003',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['f59b02ed53290b107d5fd301a0490ea6'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: 'de7e4cad65736cb5f734ecd279c8b003',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./end.automated}}',
    },
})
Record({
    $id: Now.ID['7d9bc6ad53290b107d5fd301a0490ee4'],
    table: 'sys_element_mapping',
    data: {
        field: 'message',
        id: 'de7e4cad65736cb5f734ecd279c8b003',
        table: 'var__m_sys_hub_flow_input_db1084e553a5c7107d5fd301a0490e31',
        value: '{{act.de7e4cad65736cb5f734ecd279c8b003.description}}',
    },
})
Record({
    $id: Now.ID['f99b02ed53290b107d5fd301a0490ea7'],
    table: 'sys_element_mapping',
    data: {
        field: 'tagline',
        id: 'de7e4cad65736cb5f734ecd279c8b003',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['759b02ed53290b107d5fd301a0490ea8'],
    table: 'sys_element_mapping',
    data: {
        field: 'title',
        id: 'de7e4cad65736cb5f734ecd279c8b003',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
        value: '{{act.de7e4cad65736cb5f734ecd279c8b003.label}}',
    },
})
Record({
    $id: Now.ID['b19bc6ad53290b107d5fd301a0490ee5'],
    table: 'sys_element_mapping',
    data: {
        field: 'wait',
        id: 'de7e4cad65736cb5f734ecd279c8b003',
        table: 'var__m_sys_hub_flow_input_db1084e553a5c7107d5fd301a0490e31',
    },
})
Record({
    $id: Now.ID['a6ca67ea832d0310f70ac6a6feaad3a8'],
    table: 'sys_trigger_runner_mapping',
    data: {
        active: 'true',
        data: '{"trigger_on_unique_change":"org.mozilla.javascript.UniqueTag@24f3972a: NOT_FOUND","parent_record":{"elementMapping":"{{triggerRecord}}","variableValue":null,"elementMappingOrVariableValue":"{{triggerRecord}}"},"run_trigger":"org.mozilla.javascript.UniqueTag@24f3972a: NOT_FOUND"}',
        identifier: '5be3ec638c9fea70c9dd578cf838f63b',
        identifier_type: 'playbook',
        runner: 'PDTriggerRunner',
        trigger: 'eeca67ea832d0310f70ac6a6feaad3a6',
    },
})
Record({
    $id: Now.ID['eeca67ea832d0310f70ac6a6feaad3a6'],
    table: 'sys_flow_record_trigger',
    data: {
        active: 'true',
        condition: '^EQ',
        on_delete: 'false',
        on_insert: 'true',
        on_update: 'false',
        run_flow_in: 'background',
        run_on_extended: 'false',
        run_when_setting: 'both',
        run_when_user_setting: 'any',
        sys_domain: 'global',
        sys_domain_path: '/',
        table: 'x_gegis_ins_policy_clearance_case',
    },
})
Record({
    $id: Now.ID['02d2c076fbe18b58b70efc647befdc68'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_record',
        id: '155c5b22aba05cab4c6bd7b3f5b09c04',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['4ed2c076fbe18b58b70efc647befdc66'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_table',
        id: '155c5b22aba05cab4c6bd7b3f5b09c04',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['c2d2c076fbe18b58b70efc647befdc69'],
    table: 'sys_element_mapping',
    data: {
        field: 'description',
        id: '155c5b22aba05cab4c6bd7b3f5b09c04',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['86d2c076fbe18b58b70efc647befdc67'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '155c5b22aba05cab4c6bd7b3f5b09c04',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})
Record({
    $id: Now.ID['46d2c076fbe18b58b70efc647befdc68'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_table',
        id: '155c5b22aba05cab4c6bd7b3f5b09c04',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['0ed2c076fbe18b58b70efc647befdc68'],
    table: 'sys_element_mapping',
    data: {
        field: 'icon',
        id: '155c5b22aba05cab4c6bd7b3f5b09c04',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['cad2c076fbe18b58b70efc647befdc67'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '155c5b22aba05cab4c6bd7b3f5b09c04',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['c6d2c076fbe18b58b70efc647befdc64'],
    table: 'sys_element_mapping',
    data: {
        field: 'wait',
        id: '155c5b22aba05cab4c6bd7b3f5b09c04',
        table: 'var__m_sys_hub_flow_input_db1084e553a5c7107d5fd301a0490e31',
    },
})
Record({
    $id: Now.ID['5ff28c76fbe18b58b70efc647befdc29'],
    table: 'sys_trigger_runner_mapping',
    data: {
        active: 'true',
        data: '{"trigger_on_unique_change":"org.mozilla.javascript.UniqueTag@577373b2: NOT_FOUND","parent_record":{"elementMapping":"{{triggerRecord}}","variableValue":null,"elementMappingOrVariableValue":"{{triggerRecord}}"},"run_trigger":"org.mozilla.javascript.UniqueTag@577373b2: NOT_FOUND"}',
        identifier: '5be3ec638c9fea70c9dd578cf838f63b',
        identifier_type: 'playbook',
        runner: 'PDTriggerRunner',
        trigger: 'eeca67ea832d0310f70ac6a6feaad3a6',
    },
})
