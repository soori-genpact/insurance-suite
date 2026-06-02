import { Table, ReferenceColumn } from "@servicenow/sdk/core";

export const x_gegis_ins_policy_orch_case = Table({
  name: "x_gegis_ins_policy_orch_case",
  label: "Orchestration Case",
  extends: "task",
  auto_number: { prefix: "ORC", number: 1000 },
  schema: {
    submission: ReferenceColumn({ label: "Submission", referenceTable: "x_gegis_ins_policy_submission" }),
    intake_case: ReferenceColumn({ label: "Intake Case", referenceTable: "x_gegis_ins_policy_intake_case" }),
  },
  allow_web_service_access: true,
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
});
