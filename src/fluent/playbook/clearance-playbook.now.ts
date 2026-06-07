import "@servicenow/sdk/global";
import { Record } from "@servicenow/sdk/core";

// Clearance Playbook Process Definition
export const clearancePlaybook = Record({
  table: "sys_pd_process_definition",
  $id: Now.ID["clearance-playbook"],
  data: {
    label: "Clearance Playbook",
    name: "x_gegis_ins_policy_clearance_playbook",
    description: "Clearance Playbook for insurance submission clearance process",
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

// Activity 1: Initiate Submission Request
export const clearanceInitiateSubmissionRequest = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["clearance-initiate-submission-request"],
  data: {
    name: "x_gegis_ins_policy_initiate_submission_request",
    label: "Initiate Submission Request",
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

// Activity 2: Extract
export const clearanceExtract = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["clearance-extract"],
  data: {
    name: "x_gegis_ins_policy_extract",
    label: "Extract",
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

// Activity 3: Insured Verification
export const clearanceInsuredVerification = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["clearance-insured-verification"],
  data: {
    name: "x_gegis_ins_policy_insured_verification",
    label: "Insured Verification",
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

// Activity 4: Check for Duplicates
export const clearanceCheckForDuplicates = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["clearance-check-for-duplicates"],
  data: {
    name: "x_gegis_ins_policy_check_for_duplicates",
    label: "Check for Duplicates",
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

// Activity 5: Check for Sanctions
export const clearanceCheckForSanctions = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["clearance-check-for-sanctions"],
  data: {
    name: "x_gegis_ins_policy_check_for_sanctions",
    label: "Check for Sanctions",
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

// Activity 6: Confirm Data Review
export const clearanceConfirmDataReview = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["clearance-confirm-data-review"],
  data: {
    name: "x_gegis_ins_policy_confirm_data_review",
    label: "Confirm Data Review",
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

// Activity 7: Quality Assurance
export const clearanceQualityAssurance = Record({
  table: "sys_pd_activity_definition",
  $id: Now.ID["clearance-quality-assurance"],
  data: {
    name: "x_gegis_ins_policy_quality_assurance",
    label: "Quality Assurance",
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
