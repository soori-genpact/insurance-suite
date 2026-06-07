import "@servicenow/sdk/global";
import { Record } from "@servicenow/sdk/core";

// Risk Playbook Process Definition
export const riskPlaybook = Record({
  table: "sys_pd_process_definition",
  $id: Now.ID["risk-playbook"],
  data: {
    label: "Risk Playbook",
    name: "x_gegis_ins_policy_risk_playbook",
    description: "Risk Playbook for insurance underwriting risk assessment process",
    process_type: "52c6d3eeff1be2102c2fffffffffff44",
    execution_type: "record_driven",
    access: "public",
    active: true,
    view_type: "DIAGRAM",
    schema_version: 3,
    run_strategy: "run_once",
    data_retention_period_override: "6_week",
    status: "draft",
    allow_as_nested: true,
    start_non_blocking: true,
    run_strategy_on_process_definition: true,
  },
});

// Activity 1: Initiate Risk Assessment
export const initiateRiskAssessment = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-initiate-risk-assessment"],
  data: {
    name: "x_gegis_ins_policy_initiate_risk_assessment",
    label: "Initiate Risk Assessment",
    source: "cb18ceef1b230010affd0e55cc4bcbf2",
    source_type: "sys_hub_flow",
    activity_type: "e12af577871333003058d1a936cb0ba4",
    access: "public",
    wait_for_completion: true,
    table: "x_gegis_ins_policy_submission",
    active: true,
    experience_display_preferences:
      "associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;",
    input_display_preferences:
      "table=all;record=all;assignment_group=standard;assigned_to=standard;",
    category: "708801831b0c1010affd0e55cc4bcb81",
  },
});

// Activity 2: Letter Of Authority
export const letterOfAuthority = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-letter-of-authority"],
  data: {
    name: "x_gegis_ins_policy_letter_of_authority",
    label: "Letter Of Authority",
    source: "cb18ceef1b230010affd0e55cc4bcbf2",
    source_type: "sys_hub_flow",
    activity_type: "e12af577871333003058d1a936cb0ba4",
    access: "public",
    wait_for_completion: true,
    table: "x_gegis_ins_policy_submission",
    active: true,
    experience_display_preferences:
      "associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;",
    input_display_preferences:
      "table=all;record=all;assignment_group=standard;assigned_to=standard;",
    category: "708801831b0c1010affd0e55cc4bcb81",
  },
});

// Activity 3: Underwriting Guidelines
export const underwritingGuidelines = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-underwriting-guidelines"],
  data: {
    name: "x_gegis_ins_policy_underwriting_guidelines",
    label: "Underwriting Guidelines",
    source: "cb18ceef1b230010affd0e55cc4bcbf2",
    source_type: "sys_hub_flow",
    activity_type: "e12af577871333003058d1a936cb0ba4",
    access: "public",
    wait_for_completion: true,
    table: "x_gegis_ins_policy_submission",
    active: true,
    experience_display_preferences:
      "associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;",
    input_display_preferences:
      "table=all;record=all;assignment_group=standard;assigned_to=standard;",
    category: "708801831b0c1010affd0e55cc4bcb81",
  },
});

// Activity 4: Benchmarking
export const benchmarking = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-benchmarking"],
  data: {
    name: "x_gegis_ins_policy_benchmarking",
    label: "Benchmarking",
    source: "cb18ceef1b230010affd0e55cc4bcbf2",
    source_type: "sys_hub_flow",
    activity_type: "e12af577871333003058d1a936cb0ba4",
    access: "public",
    wait_for_completion: true,
    table: "x_gegis_ins_policy_submission",
    active: true,
    experience_display_preferences:
      "associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;",
    input_display_preferences:
      "table=all;record=all;assignment_group=standard;assigned_to=standard;",
    category: "708801831b0c1010affd0e55cc4bcb81",
  },
});

// Activity 5: Survey Results
export const surveyResults = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-survey-results"],
  data: {
    name: "x_gegis_ins_policy_survey_results",
    label: "Survey Results",
    source: "cb18ceef1b230010affd0e55cc4bcbf2",
    source_type: "sys_hub_flow",
    activity_type: "e12af577871333003058d1a936cb0ba4",
    access: "public",
    wait_for_completion: true,
    table: "x_gegis_ins_policy_submission",
    active: true,
    experience_display_preferences:
      "associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;",
    input_display_preferences:
      "table=all;record=all;assignment_group=standard;assigned_to=standard;",
    category: "708801831b0c1010affd0e55cc4bcb81",
  },
});

// Activity 6: Loss Prediction
export const lossPrediction = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-loss-prediction"],
  data: {
    name: "x_gegis_ins_policy_loss_prediction",
    label: "Loss Prediction",
    source: "cb18ceef1b230010affd0e55cc4bcbf2",
    source_type: "sys_hub_flow",
    activity_type: "e12af577871333003058d1a936cb0ba4",
    access: "public",
    wait_for_completion: true,
    table: "x_gegis_ins_policy_submission",
    active: true,
    experience_display_preferences:
      "associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;",
    input_display_preferences:
      "table=all;record=all;assignment_group=standard;assigned_to=standard;",
    category: "708801831b0c1010affd0e55cc4bcb81",
  },
});

// Activity 7: Bind Propensity
export const bindPropensity = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-bind-propensity"],
  data: {
    name: "x_gegis_ins_policy_bind_propensity",
    label: "Bind Propensity",
    source: "cb18ceef1b230010affd0e55cc4bcbf2",
    source_type: "sys_hub_flow",
    activity_type: "e12af577871333003058d1a936cb0ba4",
    access: "public",
    wait_for_completion: true,
    table: "x_gegis_ins_policy_submission",
    active: true,
    experience_display_preferences:
      "associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;",
    input_display_preferences:
      "table=all;record=all;assignment_group=standard;assigned_to=standard;",
    category: "708801831b0c1010affd0e55cc4bcb81",
  },
});

// Activity 8: Exposure Data
export const exposureData = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-exposure-data"],
  data: {
    name: "x_gegis_ins_policy_exposure_data",
    label: "Exposure Data",
    source: "cb18ceef1b230010affd0e55cc4bcbf2",
    source_type: "sys_hub_flow",
    activity_type: "e12af577871333003058d1a936cb0ba4",
    access: "public",
    wait_for_completion: true,
    table: "x_gegis_ins_policy_submission",
    active: true,
    experience_display_preferences:
      "associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;",
    input_display_preferences:
      "table=all;record=all;assignment_group=standard;assigned_to=standard;",
    category: "708801831b0c1010affd0e55cc4bcb81",
  },
});

// Activity 9: Fraud Detection
export const fraudDetection = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-fraud-detection"],
  data: {
    name: "x_gegis_ins_policy_fraud_detection",
    label: "Fraud Detection",
    source: "cb18ceef1b230010affd0e55cc4bcbf2",
    source_type: "sys_hub_flow",
    activity_type: "e12af577871333003058d1a936cb0ba4",
    access: "public",
    wait_for_completion: true,
    table: "x_gegis_ins_policy_submission",
    active: true,
    experience_display_preferences:
      "associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;",
    input_display_preferences:
      "table=all;record=all;assignment_group=standard;assigned_to=standard;",
    category: "708801831b0c1010affd0e55cc4bcb81",
  },
});

// Activity 10: Underwriter Narrative
export const underwriterNarrative = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-underwriter-narrative"],
  data: {
    name: "x_gegis_ins_policy_underwriter_narrative",
    label: "Underwriter Narrative",
    source: "cb18ceef1b230010affd0e55cc4bcbf2",
    source_type: "sys_hub_flow",
    activity_type: "e12af577871333003058d1a936cb0ba4",
    access: "public",
    wait_for_completion: true,
    table: "x_gegis_ins_policy_submission",
    active: true,
    experience_display_preferences:
      "associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;",
    input_display_preferences:
      "table=all;record=all;assignment_group=standard;assigned_to=standard;",
    category: "708801831b0c1010affd0e55cc4bcb81",
  },
});

// Activity 11: Risk Summary
export const riskSummary = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["risk-summary"],
  data: {
    name: "x_gegis_ins_policy_risk_summary",
    label: "Risk Summary",
    source: "cb18ceef1b230010affd0e55cc4bcbf2",
    source_type: "sys_hub_flow",
    activity_type: "e12af577871333003058d1a936cb0ba4",
    access: "public",
    wait_for_completion: true,
    table: "x_gegis_ins_policy_submission",
    active: true,
    experience_display_preferences:
      "associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;",
    input_display_preferences:
      "table=all;record=all;assignment_group=standard;assigned_to=standard;",
    category: "708801831b0c1010affd0e55cc4bcb81",
  },
});
