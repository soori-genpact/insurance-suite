import { GlideRecord, gs, GlideSysAttachment } from "@servicenow/glide";
import { RESTMessageV2 } from "@servicenow/glide/sn_ws";
import { RESTAPIRequest, RESTAPIResponse } from "@servicenow/glide/sn_ws_int";

/**
 * Handler for creating an Intake Case record.
 * Downloads attachments from blob URLs and attaches them to the case.
 *
 * @param {RESTAPIRequest} request
 * @param {RESTAPIResponse} response
 */
export default function createIntakeCase(request, response) {
    try {
        var body = request.body.data;

        var brokerName = body.broker_name || "";
        var brokerEmail = body.broker_email || "";
        var insuredName = body.insured_name || "";
        var sourceEmailId = body.source_email_id || "";
        var shortDescription = body.short_description || "";

        if (!insuredName) {
            response.setStatus(400);
            return { error: "insured_name is required" };
        }

        var gr = new GlideRecord("x_gegis_ins_policy_intake_case");
        gr.initialize();
        gr.setValue("broker_name", brokerName);
        gr.setValue("broker_email", brokerEmail);
        gr.setValue("insured_name", insuredName);
        gr.setValue("source_email_id", sourceEmailId);
        gr.setValue("short_description", shortDescription);
        var sysId = gr.insert();

        if (!sysId) {
            response.setStatus(500);
            return { error: "Failed to create intake case record" };
        }

        // Handle attachment downloads from blob URLs
        var attachmentUrls = body.attachment_urls;
        if (attachmentUrls && attachmentUrls.length > 0) {
            var gsa = new GlideSysAttachment();

            for (var i = 0; i < attachmentUrls.length; i++) {
                try {
                    var url = attachmentUrls[i];
                    var restMessage = new RESTMessageV2();
                    restMessage.setHttpMethod("GET");
                    restMessage.setEndpoint(url);
                    var restResponse = restMessage.execute();
                    var responseBody = restResponse.getBody();
                    var contentType = restResponse.getHeader("Content-Type") || "application/octet-stream";

                    // Extract filename from URL or use a default
                    var fileName = url.substring(url.lastIndexOf("/") + 1) || "attachment_" + i;
                    // Remove query params from filename
                    if (fileName.indexOf("?") > -1) {
                        fileName = fileName.substring(0, fileName.indexOf("?"));
                    }

                    gsa.write(gr, fileName, contentType, responseBody);
                } catch (attachErr) {
                    gs.error("Failed to download attachment from URL: " + attachmentUrls[i] + " Error: " + attachErr.message);
                }
            }
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
        gs.error("Error in createIntakeCase: " + e.message);
        response.setStatus(500);
        return { error: "Internal server error: " + e.message };
    }
}
