import { Table, StringColumn, EmailColumn } from "@servicenow/sdk/core";

export const x_gegis_ins_policy_intake_case = Table({
  name: "x_gegis_ins_policy_intake_case",
  label: "Intake Case",
  extends: "task",
  auto_number: { prefix: "IC", number: 1000 },
  schema: {
    broker_name: StringColumn({ label: "Broker Name", maxLength: 100 }),
    broker_email: EmailColumn({ label: "Broker Email" }),
    insured_name: StringColumn({ label: "Insured Name", maxLength: 200, mandatory: true }),
    source_email_id: StringColumn({ label: "Source Email ID", maxLength: 255 }),
  },
  allow_web_service_access: true,
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
});
