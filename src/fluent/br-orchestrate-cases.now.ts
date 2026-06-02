import { BusinessRule } from "@servicenow/sdk/core";
import { orchestrateSubCases } from "../server/orchestration-handler.js";

BusinessRule({
  $id: Now.ID["br_orchestrate_sub_cases"],
  name: "Orchestrate Sub-Cases on Submission Insert",
  table: "x_gegis_ins_policy_submission",
  when: "after",
  action: ["insert"],
  script: orchestrateSubCases,
  order: 100,
  active: true,
  description: "When a Submission is created, creates an Orchestration Case and spawns sub-cases (Clearance, Risk Assessment, Exposure, Quote & Bind) based on the subscription type.",
});
