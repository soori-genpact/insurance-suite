import { Record } from '@servicenow/sdk/core'

// ─── Custom Activity Types ────────────────────────────────────────────────────

Record({
    $id: Now.ID['ec00000100000000000000000000000f'],
    table: 'sys_pd_activity_type',
    data: {
        name: 'exposure_data_entry',
        label: 'Exposure Data Entry',
        description: 'Custom UI activity for entering exposure items, locations, and TIV values',
        active: 'true',
        category: 'user',
        color: '#0070d2',
        icon: 'form-outline',
    },
})

Record({
    $id: Now.ID['ec000001000000000000000000000010'],
    table: 'sys_pd_activity_type',
    data: {
        name: 'exposure_uw_review',
        label: 'Exposure UW Review',
        description: 'Custom UI activity for underwriter review and sign-off on exposure data',
        active: 'true',
        category: 'user',
        color: '#137333',
        icon: 'document-check-outline',
    },
})

// ─── UX Activity Config (links activity type → macroponent) ──────────────────

Record({
    $id: Now.ID['ec000001000000000000000000000022'],
    table: 'sys_pd_ux_activity_config',
    data: {
        activity_type: 'ec00000100000000000000000000000f',
        macroponent: 'ec000001000000000000000000000011',
        active: 'true',
    },
})

Record({
    $id: Now.ID['ec000001000000000000000000000023'],
    table: 'sys_pd_ux_activity_config',
    data: {
        activity_type: 'ec000001000000000000000000000010',
        macroponent: 'ec000001000000000000000000000012',
        active: 'true',
    },
})

// ─── Stage 1: Initiation ──────────────────────────────────────────────────────
// NOTE: field name is `process_definition` (NOT `sys_pd_process_definition`)

Record({
    $id: Now.ID['ec000001000000000000000000000005'],
    table: 'sys_pd_stage',
    data: {
        label: 'Initiation',
        description: 'Initiate the exposure review process and notify the assigned analyst',
        order: '100',
        active: 'true',
        process_definition: 'ec000001000000000000000000000001',
    },
})

// ─── Stage 2: Data Entry ──────────────────────────────────────────────────────

Record({
    $id: Now.ID['ec000001000000000000000000000006'],
    table: 'sys_pd_stage',
    data: {
        label: 'Data Entry',
        description: 'Enter and validate exposure item data, locations, and TIV values',
        order: '200',
        active: 'true',
        process_definition: 'ec000001000000000000000000000001',
    },
})

// ─── Stage 3: Review ─────────────────────────────────────────────────────────

Record({
    $id: Now.ID['ec000001000000000000000000000007'],
    table: 'sys_pd_stage',
    data: {
        label: 'Review',
        description: 'Underwriter reviews the exposure summary and provides sign-off',
        order: '300',
        active: 'true',
        process_definition: 'ec000001000000000000000000000001',
    },
})

// ─── Stage 4: Completion ──────────────────────────────────────────────────────

Record({
    $id: Now.ID['ec000001000000000000000000000008'],
    table: 'sys_pd_stage',
    data: {
        label: 'Completion',
        description: 'Finalize and complete the exposure case',
        order: '400',
        active: 'true',
        process_definition: 'ec000001000000000000000000000001',
    },
})

// ─── Activity 1.1 — Exposure Review Initiated (Simple Instruction) ────────────

Record({
    $id: Now.ID['ec000001000000000000000000000009'],
    table: 'sys_pd_activity_definition',
    data: {
        label: 'Exposure Review Initiated',
        description: 'Notifies the analyst that a new Exposure Case is ready for data entry',
        order: '100',
        active: 'true',
        stage: 'ec000001000000000000000000000005',
        process_definition: 'ec000001000000000000000000000001',
        activity_type: 'e12af577871333003058d1a936cb0ba4',
        start_rule: 'immediate',
        restart_rule: 'run_once',
        ai_agent_enabled: 'false',
        access: 'public',
        ai_agent_field_display_preferences:
            'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
        enable_ai_agent: 'off',
        experience_display_preferences:
            'associated_table=advanced;associated_record=advanced;experience_status_table=advanced;experience_status_record=advanced;tagline=advanced;icon=advanced;title=advanced;description=advanced;footer=advanced;is_automated=advanced;',
        public_access: 'false',
        source: 'cb18ceef1b230010affd0e55cc4bcbf2',
        source_type: 'sys_hub_flow',
        system_level: 'false',
        wait_for_completion: 'false',
        input_display_preferences: 'taskinput=standard;wait=standard;',
    },
})

// ─── Activity 2.1 — Enter Exposure Items (Custom UI) ─────────────────────────

Record({
    $id: Now.ID['ec00000100000000000000000000000a'],
    table: 'sys_pd_activity_definition',
    data: {
        label: 'Enter Exposure Items',
        description: 'Enter exposure items with location, line of business, TIV values, and peril information',
        order: '100',
        active: 'true',
        stage: 'ec000001000000000000000000000006',
        process_definition: 'ec000001000000000000000000000001',
        activity_type: 'ec00000100000000000000000000000f',
        start_rule: 'after_prior_stage_completion',
        restart_rule: 'run_once',
        ai_agent_enabled: 'false',
        access: 'public',
        ai_agent_field_display_preferences:
            'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
        enable_ai_agent: 'off',
        public_access: 'false',
        source: '851bf6de33dd43547ef8f499ed5c7bd5',
        source_type: 'sys_hub_flow',
        system_level: 'false',
        wait_for_completion: 'false',
    },
})

// ─── Activity 2.2 — Validate & Update Status (Instruction / automated) ────────

Record({
    $id: Now.ID['ec00000100000000000000000000000b'],
    table: 'sys_pd_activity_definition',
    data: {
        label: 'Validate Exposure Data',
        description: 'Validates all required exposure fields and updates exposure_status to in_review',
        order: '200',
        active: 'true',
        stage: 'ec000001000000000000000000000006',
        process_definition: 'ec000001000000000000000000000001',
        activity_type: 'd4dde0875b00001070e4492c11f91a90',
        start_rule: 'after_prior_activity_completion',
        restart_rule: 'run_once',
        ai_agent_enabled: 'false',
        access: 'public',
        ai_agent_field_display_preferences:
            'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
        enable_ai_agent: 'off',
        experience_display_preferences:
            'associated_table=advanced;associated_record=advanced;experience_status_table=advanced;experience_status_record=advanced;tagline=advanced;icon=advanced;title=advanced;description=advanced;footer=advanced;is_automated=advanced;',
        public_access: 'false',
        source: '851bf6de33dd43547ef8f499ed5c7bd5',
        source_type: 'sys_hub_flow',
        system_level: 'false',
        wait_for_completion: 'false',
    },
})

// ─── Activity 3.1 — Review Exposure Summary (Custom UI) ──────────────────────

Record({
    $id: Now.ID['ec00000100000000000000000000000c'],
    table: 'sys_pd_activity_definition',
    data: {
        label: 'Review Exposure Summary',
        description: 'Underwriter reviews the aggregated exposure summary and TIV breakdown by line of business',
        order: '100',
        active: 'true',
        stage: 'ec000001000000000000000000000007',
        process_definition: 'ec000001000000000000000000000001',
        activity_type: 'ec000001000000000000000000000010',
        start_rule: 'after_prior_stage_completion',
        restart_rule: 'run_once',
        ai_agent_enabled: 'false',
        access: 'public',
        ai_agent_field_display_preferences:
            'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
        enable_ai_agent: 'off',
        public_access: 'false',
        source: '851bf6de33dd43547ef8f499ed5c7bd5',
        source_type: 'sys_hub_flow',
        system_level: 'false',
        wait_for_completion: 'false',
    },
})

// ─── Activity 3.2 — Underwriter Sign-off (Custom UI) ─────────────────────────

Record({
    $id: Now.ID['ec00000100000000000000000000000d'],
    table: 'sys_pd_activity_definition',
    data: {
        label: 'Underwriter Sign-off',
        description: 'Underwriter provides final Approve or Reject decision with justification notes',
        order: '200',
        active: 'true',
        stage: 'ec000001000000000000000000000007',
        process_definition: 'ec000001000000000000000000000001',
        activity_type: 'ec000001000000000000000000000010',
        start_rule: 'after_prior_activity_completion',
        restart_rule: 'run_once',
        ai_agent_enabled: 'false',
        access: 'public',
        ai_agent_field_display_preferences:
            'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
        enable_ai_agent: 'off',
        public_access: 'false',
        source: '851bf6de33dd43547ef8f499ed5c7bd5',
        source_type: 'sys_hub_flow',
        system_level: 'false',
        wait_for_completion: 'false',
    },
})

// ─── Activity 4.1 — Exposure Case Complete (Simple Instruction) ───────────────

Record({
    $id: Now.ID['ec00000100000000000000000000000e'],
    table: 'sys_pd_activity_definition',
    data: {
        label: 'Exposure Case Complete',
        description: 'The Exposure Case has been reviewed and approved. Exposure status is now Complete.',
        order: '100',
        active: 'true',
        stage: 'ec000001000000000000000000000008',
        process_definition: 'ec000001000000000000000000000001',
        activity_type: 'd4dde0875b00001070e4492c11f91a90',
        start_rule: 'after_prior_stage_completion',
        restart_rule: 'run_once',
        ai_agent_enabled: 'false',
        access: 'public',
        ai_agent_field_display_preferences:
            'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
        enable_ai_agent: 'off',
        experience_display_preferences:
            'associated_table=advanced;associated_record=advanced;experience_status_table=advanced;experience_status_record=advanced;tagline=advanced;icon=advanced;title=advanced;description=advanced;footer=advanced;is_automated=advanced;',
        public_access: 'false',
        source: '851bf6de33dd43547ef8f499ed5c7bd5',
        source_type: 'sys_hub_flow',
        system_level: 'false',
        wait_for_completion: 'false',
    },
})

// ─── Element Mappings — Activity 1.1 (Exposure Review Initiated) ──────────────
// Only `{{act.SYS_ID.field}}` patterns are safe to pre-define.
// `{{vl.Simple Instruction.UUID./end}}` patterns contain PAD-generated UUIDs
// and must be left for PAD to populate when the playbook is first saved in Studio.

Record({
    $id: Now.ID['ec000001000000000000000000000032'],
    table: 'sys_element_mapping',
    data: {
        field: 'description',
        id: 'ec000001000000000000000000000009',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
        value: 'A new Exposure Case has been created. Please begin the exposure data entry process.',
    },
})

Record({
    $id: Now.ID['ec000001000000000000000000000033'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: 'ec000001000000000000000000000009',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
        value: 'false',
    },
})

Record({
    $id: Now.ID['ec000001000000000000000000000034'],
    table: 'sys_element_mapping',
    data: {
        field: 'title',
        id: 'ec000001000000000000000000000009',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
        value: '{{act.ec000001000000000000000000000009.label}}',
    },
})

Record({
    $id: Now.ID['ec000001000000000000000000000035'],
    table: 'sys_element_mapping',
    data: {
        field: 'message',
        id: 'ec000001000000000000000000000009',
        table: 'var__m_sys_hub_flow_input_2b8b42e31b630010affd0e55cc4bcbe9',
        value: '{{act.ec000001000000000000000000000009.description}}',
    },
})

// ─── Element Mappings — Activity 2.1 (Enter Exposure Items, Custom UI) ─────────

Record({
    $id: Now.ID['ec000001000000000000000000000040'],
    table: 'sys_element_mapping',
    data: {
        field: 'sysId',
        id: 'ec00000100000000000000000000000a',
        table: 'var__m_sys_pd_activity_type_prop_ec00000100000000000000000000000f',
        value: '{{triggerRecord.sys_id}}',
    },
})

Record({
    $id: Now.ID['ec000001000000000000000000000041'],
    table: 'sys_element_mapping',
    data: {
        field: 'table',
        id: 'ec00000100000000000000000000000a',
        table: 'var__m_sys_pd_activity_type_prop_ec00000100000000000000000000000f',
        value: 'x_gegis_ins_policy_exposure_case',
    },
})

Record({
    $id: Now.ID['ec000001000000000000000000000042'],
    table: 'sys_element_mapping',
    data: {
        field: 'title',
        id: 'ec00000100000000000000000000000a',
        table: 'var__m_sys_pd_activity_type_prop_ec00000100000000000000000000000f',
        value: '{{act.ec00000100000000000000000000000a.label}}',
    },
})

// ─── Element Mappings — Activity 2.2 (Validate Exposure Data) ─────────────────

Record({
    $id: Now.ID['ec000001000000000000000000000050'],
    table: 'sys_element_mapping',
    data: {
        field: 'description',
        id: 'ec00000100000000000000000000000b',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
        value: 'Validating exposure data completeness. Updating status to In Review.',
    },
})

Record({
    $id: Now.ID['ec000001000000000000000000000051'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: 'ec00000100000000000000000000000b',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
        value: 'true',
    },
})

Record({
    $id: Now.ID['ec000001000000000000000000000052'],
    table: 'sys_element_mapping',
    data: {
        field: 'title',
        id: 'ec00000100000000000000000000000b',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
        value: '{{act.ec00000100000000000000000000000b.label}}',
    },
})

// ─── Element Mappings — Activity 3.1 (Review Exposure Summary, Custom UI) ──────

Record({
    $id: Now.ID['ec000001000000000000000000000060'],
    table: 'sys_element_mapping',
    data: {
        field: 'sysId',
        id: 'ec00000100000000000000000000000c',
        table: 'var__m_sys_pd_activity_type_prop_ec000001000000000000000000000010',
        value: '{{triggerRecord.sys_id}}',
    },
})

Record({
    $id: Now.ID['ec000001000000000000000000000061'],
    table: 'sys_element_mapping',
    data: {
        field: 'table',
        id: 'ec00000100000000000000000000000c',
        table: 'var__m_sys_pd_activity_type_prop_ec000001000000000000000000000010',
        value: 'x_gegis_ins_policy_exposure_case',
    },
})

Record({
    $id: Now.ID['ec000001000000000000000000000062'],
    table: 'sys_element_mapping',
    data: {
        field: 'mode',
        id: 'ec00000100000000000000000000000c',
        table: 'var__m_sys_pd_activity_type_prop_ec000001000000000000000000000010',
        value: 'review',
    },
})

// ─── Element Mappings — Activity 3.2 (Underwriter Sign-off, Custom UI) ─────────

Record({
    $id: Now.ID['ec000001000000000000000000000070'],
    table: 'sys_element_mapping',
    data: {
        field: 'sysId',
        id: 'ec00000100000000000000000000000d',
        table: 'var__m_sys_pd_activity_type_prop_ec000001000000000000000000000010',
        value: '{{triggerRecord.sys_id}}',
    },
})

Record({
    $id: Now.ID['ec000001000000000000000000000071'],
    table: 'sys_element_mapping',
    data: {
        field: 'table',
        id: 'ec00000100000000000000000000000d',
        table: 'var__m_sys_pd_activity_type_prop_ec000001000000000000000000000010',
        value: 'x_gegis_ins_policy_exposure_case',
    },
})

Record({
    $id: Now.ID['ec000001000000000000000000000072'],
    table: 'sys_element_mapping',
    data: {
        field: 'mode',
        id: 'ec00000100000000000000000000000d',
        table: 'var__m_sys_pd_activity_type_prop_ec000001000000000000000000000010',
        value: 'signoff',
    },
})

// ─── Element Mappings — Activity 4.1 (Exposure Case Complete) ─────────────────

Record({
    $id: Now.ID['ec000001000000000000000000000080'],
    table: 'sys_element_mapping',
    data: {
        field: 'description',
        id: 'ec00000100000000000000000000000e',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
        value: 'The Exposure Case has been reviewed and approved by the Underwriter. Exposure status is now Complete.',
    },
})

Record({
    $id: Now.ID['ec000001000000000000000000000081'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: 'ec00000100000000000000000000000e',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
        value: 'false',
    },
})

Record({
    $id: Now.ID['ec000001000000000000000000000082'],
    table: 'sys_element_mapping',
    data: {
        field: 'title',
        id: 'ec00000100000000000000000000000e',
        table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90',
        value: '{{act.ec00000100000000000000000000000e.label}}',
    },
})

// ─── Record Trigger (on INSERT of exposure_case) ──────────────────────────────

Record({
    $id: Now.ID['ec000001000000000000000000000002'],
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
        table: 'x_gegis_ins_policy_exposure_case',
    },
})

// ─── Trigger Runner Mapping ───────────────────────────────────────────────────
// `identifier` = the playbook's own sys_id (process_definition sys_id).
// PAD resolves the process input binding when the playbook is first published
// and creates the var__m_sys_pd_process_input_* virtual table automatically.

Record({
    $id: Now.ID['ec000001000000000000000000000003'],
    table: 'sys_trigger_runner_mapping',
    data: {
        active: 'true',
        data: '{"trigger_on_unique_change":"org.mozilla.javascript.UniqueTag@4cd3eeab: NOT_FOUND","parent_record":{"elementMapping":"{{triggerRecord}}","variableValue":null,"elementMappingOrVariableValue":"{{triggerRecord}}"},"run_trigger":"org.mozilla.javascript.UniqueTag@4cd3eeab: NOT_FOUND"}',
        identifier: 'ec000001000000000000000000000001',
        identifier_type: 'playbook',
        runner: 'PDTriggerRunner',
        trigger: 'ec000001000000000000000000000002',
    },
})
