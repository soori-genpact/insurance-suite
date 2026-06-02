import { RestApi } from "@servicenow/sdk/core";
import createIntakeCase from "../../server/intake-case-handler.js";
import upsertSubmission from "../../server/submission-handler.js";
import createAiTask from "../../server/ai-task-handler.js";

RestApi({
  $id: Now.ID["policy_suite_api"],
  name: "Policy Suite API",
  serviceId: "policy_suite_api",
  consumes: "application/json",
  produces: "application/json",
  routes: [
    {
      $id: Now.ID["route_intake_case"],
      path: "/intake-case",
      method: "POST",
      script: createIntakeCase,
      name: "Create Intake Case",
      shortDescription: "Creates a new intake case record with optional blob attachments",
      version: 1,
    },
    {
      $id: Now.ID["route_submission"],
      path: "/submission",
      method: "POST",
      script: upsertSubmission,
      name: "Upsert Submission",
      shortDescription: "Creates or updates a submission record",
      version: 1,
    },
    {
      $id: Now.ID["route_ai_task"],
      path: "/ai-task",
      method: "POST",
      script: createAiTask,
      name: "Create AI Task",
      shortDescription: "Creates an AI extraction task when AI processing fails",
      version: 1,
    },
  ],
  versions: [
    {
      $id: Now.ID["policy_suite_api_v1"],
      version: 1,
      isDefault: true,
    },
  ],
});
