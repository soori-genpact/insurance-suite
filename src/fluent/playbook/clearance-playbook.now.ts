import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Activity 1: Initiate Submission Request
export const clearanceInitiateSubmissionRequest = Record({
    table: 'sys_pd_activity_definition',
    $id: Now.ID['clearance-initiate-submission-request'],
    data: {
        name: 'x_gegis_ins_policy_initiate_submission_request',
        label: 'Initiate Submission Request',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        activity_type: 'c1ea000153a5c7107d5fd301a0490eac',
        access: 'public',
        wait_for_completion: true,
        table: 'global',
        active: true,
        experience_display_preferences:
            'associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;',
        input_display_preferences: 'message=all;wait=all;',
        category: '708801831b0c1010affd0e55cc4bcb81',
        ai_agent_field_display_preferences:
            'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
        enable_ai_agent: 'off',
        public_access: 'true',
        system_level: 'true',
        description: 'Initiate Submission Request',
    },
})
Record({
    $id: Now.ID['e5ea000153a5c7107d5fd301a0490eb4'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '45c5037568a5483aa51faf7ed0171f45',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000153a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})
Record({
    $id: Now.ID['e5ea000153a5c7107d5fd301a0490eb5'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '45c5037568a5483aa51faf7ed0171f45',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000153a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})

// Activity 2: Extract
export const clearanceExtract = Record({
    table: 'sys_pd_activity_definition',
    $id: Now.ID['clearance-extract'],
    data: {
        name: 'x_gegis_ins_policy_extract',
        label: 'Extract',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        activity_type: 'c1ea000253a5c7107d5fd301a0490eac',
        access: 'public',
        wait_for_completion: true,
        table: 'global',
        active: true,
        experience_display_preferences:
            'associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;',
        input_display_preferences: 'message=all;wait=all;',
        category: '708801831b0c1010affd0e55cc4bcb81',
        ai_agent_field_display_preferences:
            'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
        enable_ai_agent: 'off',
        public_access: 'true',
        system_level: 'true',
        description: 'Extract Activity Definition',
    },
})
Record({
    $id: Now.ID['e5ea000253a5c7107d5fd301a0490eb4'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '49b609632d0941caa050e175207d0fc4',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000253a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})
Record({
    $id: Now.ID['e5ea000253a5c7107d5fd301a0490eb5'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '49b609632d0941caa050e175207d0fc4',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000253a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})

// Activity 3: Insured Verification
export const clearanceInsuredVerification = Record({
    table: 'sys_pd_activity_definition',
    $id: Now.ID['clearance-insured-verification'],
    data: {
        name: 'x_gegis_ins_policy_insured_verification',
        label: 'Insured Verification',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        activity_type: 'c1ea000353a5c7107d5fd301a0490eac',
        access: 'public',
        wait_for_completion: true,
        table: 'global',
        active: true,
        experience_display_preferences:
            'associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;',
        input_display_preferences: 'message=all;wait=all;',
        category: '708801831b0c1010affd0e55cc4bcb81',
        ai_agent_field_display_preferences:
            'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
        enable_ai_agent: 'off',
        public_access: 'true',
        system_level: 'true',
        description: 'Insured Verification Activity Definition',
    },
})
Record({
    $id: Now.ID['e5ea000353a5c7107d5fd301a0490eb4'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: 'fc55cee1a7e043c98226101ab33c41a0',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000353a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})
Record({
    $id: Now.ID['e5ea000353a5c7107d5fd301a0490eb5'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: 'fc55cee1a7e043c98226101ab33c41a0',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000353a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})

// Activity 4: Check for Duplicates
export const clearanceCheckForDuplicates = Record({
    table: 'sys_pd_activity_definition',
    $id: Now.ID['clearance-check-for-duplicates'],
    data: {
        name: 'x_gegis_ins_policy_check_for_duplicates',
        label: 'Check for Duplicates',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        activity_type: 'c1ea000453a5c7107d5fd301a0490eac',
        access: 'public',
        wait_for_completion: true,
        table: 'global',
        active: true,
        experience_display_preferences:
            'associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;',
        input_display_preferences: 'message=all;wait=all;',
        category: '708801831b0c1010affd0e55cc4bcb81',
        ai_agent_field_display_preferences:
            'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
        enable_ai_agent: 'off',
        public_access: 'true',
        system_level: 'true',
        description: 'Check for Duplicates Activity Definition',
    },
})
Record({
    $id: Now.ID['e5ea000453a5c7107d5fd301a0490eb4'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '90a2fbe84a8d41da9c994ec3f2b7a4db',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000453a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})
Record({
    $id: Now.ID['e5ea000453a5c7107d5fd301a0490eb5'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '90a2fbe84a8d41da9c994ec3f2b7a4db',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000453a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})

// Activity 5: Check for Sanctions
export const clearanceCheckForSanctions = Record({
    table: 'sys_pd_activity_definition',
    $id: Now.ID['clearance-check-for-sanctions'],
    data: {
        name: 'x_gegis_ins_policy_check_for_sanctions',
        label: 'Check for Sanctions',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        activity_type: 'c1ea000553a5c7107d5fd301a0490eac',
        access: 'public',
        wait_for_completion: true,
        table: 'global',
        active: true,
        experience_display_preferences:
            'associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;',
        input_display_preferences: 'message=all;wait=all;',
        category: '708801831b0c1010affd0e55cc4bcb81',
        ai_agent_field_display_preferences:
            'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
        enable_ai_agent: 'off',
        public_access: 'true',
        system_level: 'true',
        description: 'Check for Sanctions Activity Definition',
    },
})
Record({
    $id: Now.ID['e5ea000553a5c7107d5fd301a0490eb4'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '587c7c3a37614b558d5aa24f852de842',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000553a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})
Record({
    $id: Now.ID['e5ea000553a5c7107d5fd301a0490eb5'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '587c7c3a37614b558d5aa24f852de842',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000553a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})

// Activity 6: Confirm Data Review
export const clearanceConfirmDataReview = Record({
    table: 'sys_pd_activity_definition',
    $id: Now.ID['clearance-confirm-data-review'],
    data: {
        name: 'x_gegis_ins_policy_confirm_data_review',
        label: 'Confirm Data Review',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        activity_type: 'c1ea000653a5c7107d5fd301a0490eac',
        access: 'public',
        wait_for_completion: true,
        table: 'global',
        active: true,
        experience_display_preferences:
            'associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;',
        input_display_preferences: 'message=all;wait=all;',
        category: '708801831b0c1010affd0e55cc4bcb81',
        ai_agent_field_display_preferences:
            'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
        enable_ai_agent: 'off',
        public_access: 'true',
        system_level: 'true',
        description: 'Confirm Data Review Activity Definition',
    },
})
Record({
    $id: Now.ID['e5ea000653a5c7107d5fd301a0490eb4'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '6711a168afc840558053b9cecf5e1a43',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000653a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./start.automated}}',
    },
})
Record({
    $id: Now.ID['e5ea000653a5c7107d5fd301a0490eb5'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '6711a168afc840558053b9cecf5e1a43',
        table: 'var__m_sys_pd_activity_type_prop_c1ea000653a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow.e17e6678-8e97-4584-a903-cfa6e47fd378./end.record}}',
    },
})

// Activity 7: Quality Assurance
export const clearanceQualityAssurance = Record({
    table: 'sys_pd_activity_definition',
    $id: Now.ID['clearance-quality-assurance'],
    data: {
        name: 'x_gegis_ins_policy_quality_assurance',
        label: 'Quality Assurance',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        activity_type: 'c1ea000753a5c7107d5fd301a0490eac',
        access: 'public',
        wait_for_completion: true,
        table: 'global',
        active: true,
        experience_display_preferences:
            'associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;',
        input_display_preferences: 'message=all;wait=all;',
        category: '708801831b0c1010affd0e55cc4bcb81',
        ai_agent_field_display_preferences:
            'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
        enable_ai_agent: 'off',
        public_access: 'true',
        system_level: 'true',
        description: 'Quality Assurance Activity Definition',
    },
})
Record({
    $id: Now.ID['e5ea000753a5c7107d5fd301a0490eb4'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: 'b3357c1f449949a88717737fde64fa14',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./end.automated}}',
    },
})
Record({
    $id: Now.ID['e5ea000753a5c7107d5fd301a0490eb5'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: 'b3357c1f449949a88717737fde64fa14',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./end.record}}',
    },
})
