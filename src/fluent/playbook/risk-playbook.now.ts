import "@servicenow/sdk/global";
import { Record } from "@servicenow/sdk/core";

// Activity 1: Initiate Risk Assessment
export const initiateRiskAssessment = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-initiate-risk-assessment"],
  data: {
    name: "x_gegis_ins_policy_initiate_risk_assessment",
    label: "Initiate Risk Assessment",
    source: "db1084e553a5c7107d5fd301a0490e31",
    source_type: "sys_hub_flow",
    activity_type: "a15b000153a5c7107d5fd301a0490eac",
    access: "public",
    wait_for_completion: true,
    table: "global",
    active: true,
    experience_display_preferences:
      "associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;",
    input_display_preferences:
      "message=all;wait=all;",
    category: "708801831b0c1010affd0e55cc4bcb81",
    ai_agent_field_display_preferences:
        'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
    enable_ai_agent: 'off',
    public_access: 'true',
    system_level: 'true',
  },
});

// Activity 2: Letter Of Authority
export const letterOfAuthority = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-letter-of-authority"],
  data: {
    name: "x_gegis_ins_policy_letter_of_authority",
    label: "Letter Of Authority",
    source: "db1084e553a5c7107d5fd301a0490e31",
    source_type: "sys_hub_flow",
    activity_type: "a15b000253a5c7107d5fd301a0490eac",
    access: "public",
    wait_for_completion: true,
    table: "global",
    active: true,
    experience_display_preferences:
      "associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;",
    input_display_preferences:
      "message=all;wait=all;",
    category: "708801831b0c1010affd0e55cc4bcb81",
    ai_agent_field_display_preferences:
        'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
    enable_ai_agent: 'off',
    public_access: 'true',
    system_level: 'true',
  },
});

// Activity 3: Underwriting Guidelines
export const underwritingGuidelines = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-underwriting-guidelines"],
  data: {
    name: "x_gegis_ins_policy_underwriting_guidelines",
    label: "Underwriting Guidelines",
    source: "db1084e553a5c7107d5fd301a0490e31",
    source_type: "sys_hub_flow",
    activity_type: "a15b000353a5c7107d5fd301a0490eac",
    access: "public",
    wait_for_completion: true,
    table: "global",
    active: true,
    experience_display_preferences:
      "associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;",
    input_display_preferences:
      "message=all;wait=all;",
    category: "708801831b0c1010affd0e55cc4bcb81",
    ai_agent_field_display_preferences:
        'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
    enable_ai_agent: 'off',
    public_access: 'true',
    system_level: 'true',
  },
});

// Activity 4: Benchmarking
export const benchmarking = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-benchmarking"],
  data: {
    name: "x_gegis_ins_policy_benchmarking",
    label: "Benchmarking",
    source: "db1084e553a5c7107d5fd301a0490e31",
    source_type: "sys_hub_flow",
    activity_type: "a15b000453a5c7107d5fd301a0490eac",
    access: "public",
    wait_for_completion: true,
    table: "global",
    active: true,
    experience_display_preferences:
      "associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;",
    input_display_preferences:
      "message=all;wait=all;",
    category: "708801831b0c1010affd0e55cc4bcb81",
    ai_agent_field_display_preferences:
        'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
    enable_ai_agent: 'off',
    public_access: 'true',
    system_level: 'true',
  },
});

// Activity 5: Survey Results
export const surveyResults = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-survey-results"],
  data: {
    name: "x_gegis_ins_policy_survey_results",
    label: "Survey Results",
    source: "db1084e553a5c7107d5fd301a0490e31",
    source_type: "sys_hub_flow",
    activity_type: "a15b000553a5c7107d5fd301a0490eac",
    access: "public",
    wait_for_completion: true,
    table: "global",
    active: true,
    experience_display_preferences:
      "associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;",
    input_display_preferences:
      "message=all;wait=all;",
    category: "708801831b0c1010affd0e55cc4bcb81",
    ai_agent_field_display_preferences:
        'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
    enable_ai_agent: 'off',
    public_access: 'true',
    system_level: 'true',
  },
});

// Activity 6: Loss Prediction
export const lossPrediction = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-loss-prediction"],
  data: {
    name: "x_gegis_ins_policy_loss_prediction",
    label: "Loss Prediction",
    source: "db1084e553a5c7107d5fd301a0490e31",
    source_type: "sys_hub_flow",
    activity_type: "a15b000653a5c7107d5fd301a0490eac",
    access: "public",
    wait_for_completion: true,
    table: "global",
    active: true,
    experience_display_preferences:
      "associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;",
    input_display_preferences:
      "message=all;wait=all;",
    category: "708801831b0c1010affd0e55cc4bcb81",
    ai_agent_field_display_preferences:
        'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
    enable_ai_agent: 'off',
    public_access: 'true',
    system_level: 'true',
  },
});

// Activity 7: Bind Propensity
export const bindPropensity = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-bind-propensity"],
  data: {
    name: "x_gegis_ins_policy_bind_propensity",
    label: "Bind Propensity",
    source: "db1084e553a5c7107d5fd301a0490e31",
    source_type: "sys_hub_flow",
    activity_type: "a15b000753a5c7107d5fd301a0490eac",
    access: "public",
    wait_for_completion: true,
    table: "global",
    active: true,
    experience_display_preferences:
      "associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;",
    input_display_preferences:
      "message=all;wait=all;",
    category: "708801831b0c1010affd0e55cc4bcb81",
    ai_agent_field_display_preferences:
        'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
    enable_ai_agent: 'off',
    public_access: 'true',
    system_level: 'true',
  },
});

// Activity 8: Exposure Data
export const exposureData = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-exposure-data"],
  data: {
    name: "x_gegis_ins_policy_exposure_data",
    label: "Exposure Data",
    source: "db1084e553a5c7107d5fd301a0490e31",
    source_type: "sys_hub_flow",
    activity_type: "a15b000853a5c7107d5fd301a0490eac",
    access: "public",
    wait_for_completion: true,
    table: "global",
    active: true,
    experience_display_preferences:
      "associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;",
    input_display_preferences:
      "message=all;wait=all;",
    category: "708801831b0c1010affd0e55cc4bcb81",
    ai_agent_field_display_preferences:
        'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
    enable_ai_agent: 'off',
    public_access: 'true',
    system_level: 'true',
  },
});

// Activity 9: Fraud Detection
export const fraudDetection = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-fraud-detection"],
  data: {
    name: "x_gegis_ins_policy_fraud_detection",
    label: "Fraud Detection",
    source: "db1084e553a5c7107d5fd301a0490e31",
    source_type: "sys_hub_flow",
    activity_type: "a15b000953a5c7107d5fd301a0490eac",
    access: "public",
    wait_for_completion: true,
    table: "global",
    active: true,
    experience_display_preferences:
      "associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;",
    input_display_preferences:
      "message=all;wait=all;",
    category: "708801831b0c1010affd0e55cc4bcb81",
    ai_agent_field_display_preferences:
        'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
    enable_ai_agent: 'off',
    public_access: 'true',
    system_level: 'true',
  },
});

// Activity 10: Underwriter Narrative
export const underwriterNarrative = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-underwriter-narrative"],
  data: {
    name: "x_gegis_ins_policy_underwriter_narrative",
    label: "Underwriter Narrative",
    source: "db1084e553a5c7107d5fd301a0490e31",
    source_type: "sys_hub_flow",
    activity_type: "a15b000a53a5c7107d5fd301a0490eac",
    access: "public",
    wait_for_completion: true,
    table: "global",
    active: true,
    experience_display_preferences:
      "associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;",
    input_display_preferences:
      "message=all;wait=all;",
    category: "708801831b0c1010affd0e55cc4bcb81",
    ai_agent_field_display_preferences:
        'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
    enable_ai_agent: 'off',
    public_access: 'true',
    system_level: 'true',
  },
});

// Activity 11: Risk Summary
export const riskSummary = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-summary"],
  data: {
    name: "x_gegis_ins_policy_risk_summary",
    label: "Risk Summary",
    source: "db1084e553a5c7107d5fd301a0490e31",
    source_type: "sys_hub_flow",
    activity_type: "a15b000b53a5c7107d5fd301a0490eac",
    access: "public",
    wait_for_completion: true,
    table: "global",
    active: true,
    experience_display_preferences:
      "associated_table=standard;associated_record=standard;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;",
    input_display_preferences:
      "message=all;wait=all;",
    category: "708801831b0c1010affd0e55cc4bcb81",
    ai_agent_field_display_preferences:
        'enable_ai_agent=all;ai_agent_execution_mode=all;ai_agent_run_as=all;ai_agent_objective=all;',
    enable_ai_agent: 'off',
    public_access: 'true',
    system_level: 'true',
  },
});
