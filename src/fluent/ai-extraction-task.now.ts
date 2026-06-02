import { Table, ReferenceColumn, StringColumn, UrlColumn } from "@servicenow/sdk/core";

export const x_gegis_ins_policy_ai_task = Table({
  name: "x_gegis_ins_policy_ai_task",
  label: "AI Extraction Task",
  extends: "task",
  auto_number: { prefix: "AIT", number: 1000 },
  schema: {
    intake_case: ReferenceColumn({ label: "Intake Case", referenceTable: "x_gegis_ins_policy_intake_case" }),
    error_message: StringColumn({ label: "Error Message", maxLength: 500 }),
    document_name: StringColumn({ label: "Document Name", maxLength: 255 }),
    blob_url: UrlColumn({ label: "Document Blob URL" }),
  },
  allow_web_service_access: true,
  accessible_from: "public",
  actions: ["create", "read", "update", "delete"],
});
