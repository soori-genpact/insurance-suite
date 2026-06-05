import { GlideRecord, gs, GlideSysAttachment } from "@servicenow/glide";
import { RESTMessageV2 } from "@servicenow/glide/sn_ws";
import { RESTAPIRequest, RESTAPIResponse } from "@servicenow/glide/sn_ws_int";

/**
 * POST /intake-case
 * Creates an Intake Case from any inbound channel (email, portal, API, etc.).
 * Optionally downloads and attaches files from blob URLs.
 *
 * @param {RESTAPIRequest} request
 * @param {RESTAPIResponse} response
 */
export default function createIntakeCase(request, response) {
    try {
        var body = request.body.data;

        var sender = body.sender || "";
        var senderEmail = body.sender_email || "";
        var recipient = body.recipient || "";
        var subject = body.subject || "";
        var bodyText = body.body || "";
        var channel = body.channel || "email";

        if (!subject) {
            response.setStatus(400);
            return { error: "subject is required" };
        }

        var gr = new GlideRecord("x_gegis_ins_policy_intake_case");
        gr.initialize();
        gr.setValue("sender", sender);
        gr.setValue("sender_email", senderEmail);
        gr.setValue("recipient", recipient);
        gr.setValue("subject", subject);
        gr.setValue("body", bodyText);
        gr.setValue("channel", channel);
        gr.setValue("intake_status", "new");
        gr.setValue("short_description", subject);
        var sysId = gr.insert();

        if (!sysId) {
            response.setStatus(500);
            return { error: "Failed to create intake case" };
        }

        var attachmentUrls = body.attachment_urls;
        if (attachmentUrls && attachmentUrls.length > 0) {
            var gsa = new GlideSysAttachment();
            for (var i = 0; i < attachmentUrls.length; i++) {
                try {
                    var url = attachmentUrls[i];
                    var rm = new RESTMessageV2();
                    rm.setHttpMethod("GET");
                    rm.setEndpoint(url);
                    var rmResp = rm.execute();
                    var contentType = rmResp.getHeader("Content-Type") || "application/octet-stream";
                    var fileName = url.substring(url.lastIndexOf("/") + 1) || ("attachment_" + i);
                    if (fileName.indexOf("?") > -1) {
                        fileName = fileName.substring(0, fileName.indexOf("?"));
                    }
                    gsa.write(gr, fileName, contentType, rmResp.getBody());
                } catch (attachErr) {
                    gs.error("IntakeCaseHandler: attachment download failed for " + attachmentUrls[i] + " — " + attachErr.message);
                }
            }
        }

        response.setStatus(201);
        return {
            result: {
                sys_id: sysId.toString(),
                number: gr.getValue("number"),
            },
        };
    } catch (e) {
        gs.error("IntakeCaseHandler: " + e.message);
        response.setStatus(500);
        return { error: "Internal server error: " + e.message };
    }
}
