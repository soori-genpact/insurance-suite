import { GlideRecord, gs } from "@servicenow/glide";
import { RESTAPIRequest, RESTAPIResponse } from "@servicenow/glide/sn_ws_int";

/**
 * POST /case-task
 * Creates a generic Case Task (sub-task) for any module.
 * Use the category field to classify: clearance, exposure, risk, qnb, extraction, document, general.
 *
 * @param {RESTAPIRequest} request
 * @param {RESTAPIResponse} response
 */
export default function createCaseTask(request, response) {
    try {
        var body = request.body.data;

        var category = body.category || "";
        var parentCaseId = body.parent_case_id || "";
        var shortDescription = body.short_description || "";
        var description = body.description || "";

        if (!category) {
            response.setStatus(400);
            return { error: "category is required" };
        }

        if (!shortDescription) {
            response.setStatus(400);
            return { error: "short_description is required" };
        }

        var gr = new GlideRecord("x_gegis_ins_policy_case_task");
        gr.initialize();
        gr.setValue("category", category);
        gr.setValue("short_description", shortDescription);
        gr.setValue("description", description);
        if (parentCaseId) {
            gr.setValue("parent_case", parentCaseId);
        }
        var sysId = gr.insert();

        if (!sysId) {
            response.setStatus(500);
            return { error: "Failed to create case task" };
        }

        response.setStatus(201);
        return {
            result: {
                sys_id: sysId.toString(),
                number: gr.getValue("number"),
            },
        };
    } catch (e) {
        gs.error("CaseTaskHandler: " + e.message);
        response.setStatus(500);
        return { error: "Internal server error: " + e.message };
    }
}
