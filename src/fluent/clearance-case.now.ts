import { Table, ReferenceColumn, StringColumn } from "@servicenow/sdk/core";

export const x_gegis_ins_policy_clearance = Table({
  name: "x_gegis_ins_policy_clearance",
  label: "Clearance Case",
  extends: "task",
  auto_number: { prefix: "CLR", number: 1000 },
  schema: {
    orchestration_case: ReferenceColumn({ label: "Orchestration Case", referenceTable: "x_gegis_ins_policy_orch_case" }),
    submission: ReferenceColumn({ label: "Submission", referenceTable: "x_gegis_ins_policy_submission" }),
    clearance_result: StringColumn({
      label: "Clearance Result",
      dropdown: "dropdown_with_none",
      choices: {
        pending: { label: "Pending", sequence: 0 },
        cleared: { label: "Cleared", sequence: 1 },
        flagged: { label: "Flagged", sequence: 2 },
      },
    }),
  },
  allow_web_service_access: true,
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
});
