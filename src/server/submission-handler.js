import { GlideRecord, gs } from "@servicenow/glide";
import { RESTAPIRequest, RESTAPIResponse } from "@servicenow/glide/sn_ws_int";

/**
 * Handler for upserting (create or update) a Submission record.
 *
 * @param {RESTAPIRequest} request
 * @param {RESTAPIResponse} response
 */
export default function upsertSubmission(request, response) {
    try {
        var body = request.body.data;

        var intakeCaseId = body.intake_case_id || "";
        var insuredName = body.insured_name || "";
        var policyType = body.policy_type || "";
        var effectiveDate = body.effective_date || "";
        var expirationDate = body.expiration_date || "";
        var blobUrl = body.blob_url || "";
        var subscription = body.subscription || "";
        var submissionId = body.submission_id || "";

        if (!insuredName) {
            response.setStatus(400);
            return { error: "insured_name is required" };
        }

        var gr = new GlideRecord("x_gegis_ins_policy_submission");
        var isUpdate = false;

        if (submissionId) {
            // Update existing record
            if (gr.get(submissionId)) {
                isUpdate = true;
            } else {
                response.setStatus(404);
                return { error: "Submission not found with id: " + submissionId };
            }
        } else {
            // Create new record
            gr.initialize();
        }

        gr.setValue("intake_case", intakeCaseId);
        gr.setValue("insured_name", insuredName);
        gr.setValue("policy_type", policyType);
        gr.setValue("effective_date", effectiveDate);
        gr.setValue("expiration_date", expirationDate);
        gr.setValue("blob_url", blobUrl);
        gr.setValue("subscription", subscription);

        var sysId;
        if (isUpdate) {
            gr.update();
            sysId = gr.getUniqueValue();
        } else {
            sysId = gr.insert();
        }

        if (!sysId) {
            response.setStatus(500);
            return { error: "Failed to " + (isUpdate ? "update" : "create") + " submission record" };
        }

        var number = gr.getValue("number");
        response.setStatus(isUpdate ? 200 : 201);
        return {
            result: {
                sys_id: sysId.toString(),
                number: number,
                status: isUpdate ? "updated" : "created"
            }
        };
    } catch (e) {
        gs.error("Error in upsertSubmission: " + e.message);
        response.setStatus(500);
        return { error: "Internal server error: " + e.message };
    }
}
