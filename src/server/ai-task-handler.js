import { GlideRecord, gs } from "@servicenow/glide";
import { RESTAPIRequest, RESTAPIResponse } from "@servicenow/glide/sn_ws_int";

/**
 * Handler for creating an AI Extraction Task when AI processing fails.
 *
 * @param {RESTAPIRequest} request
 * @param {RESTAPIResponse} response
 */
export default function createAiTask(request, response) {
    try {
        var body = request.body.data;

        var intakeCaseId = body.intake_case_id || "";
        var errorMessage = body.error_message || "";
        var documentName = body.document_name || "";
        var blobUrl = body.blob_url || "";

        if (!intakeCaseId) {
            response.setStatus(400);
            return { error: "intake_case_id is required" };
        }

        if (!documentName) {
            response.setStatus(400);
            return { error: "document_name is required" };
        }

        var gr = new GlideRecord("x_gegis_ins_policy_ai_task");
        gr.initialize();
        gr.setValue("intake_case", intakeCaseId);
        gr.setValue("error_message", errorMessage);
        gr.setValue("document_name", documentName);
        gr.setValue("blob_url", blobUrl);
        gr.setValue("short_description", "AI Extraction Failed: " + documentName);
        var sysId = gr.insert();

        if (!sysId) {
            response.setStatus(500);
            return { error: "Failed to create AI extraction task record" };
        }

        var number = gr.getValue("number");
        response.setStatus(201);
        return {
            result: {
                sys_id: sysId.toString(),
                number: number
            }
        };
    } catch (e) {
        gs.error("Error in createAiTask: " + e.message);
        response.setStatus(500);
        return { error: "Internal server error: " + e.message };
    }
}
