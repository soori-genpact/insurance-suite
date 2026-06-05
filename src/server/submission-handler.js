import { GlideRecord, gs } from "@servicenow/glide";
import { RESTAPIRequest, RESTAPIResponse } from "@servicenow/glide/sn_ws_int";

/**
 * POST /submission
 * Creates or updates a Submission record.
 * If intake_case_sys_id is provided, links that intake case back to this submission.
 *
 * @param {RESTAPIRequest} request
 * @param {RESTAPIResponse} response
 */
export default function upsertSubmission(request, response) {
    try {
        var body = request.body.data;

        var submissionId = body.submission_id || "";
        var transactionType = body.transaction_type || "";
        var lineOfBusiness = body.line_of_business || "";
        var policyEffectiveDate = body.policy_effective_date || "";
        var policyExpiryDate = body.policy_expiry_date || "";
        var policyCurrency = body.policy_currency || "";
        var sourceChannel = body.source_channel || "";
        var policyTerritory = body.policy_territory || "";
        var predominantState = body.predominant_state || "";
        var billingType = body.billing_type || "";
        var noOfInstallments = body.no_of_installments || "";
        var numberOfLocations = body.number_of_locations || "";
        var natureOfBusiness = body.nature_of_business || "";
        var overallStatus = body.overall_status || "open";
        var primaryInsured = body.primary_insured || "";
        var primaryBroker = body.primary_broker || "";
        var intakeCaseSysId = body.intake_case_sys_id || "";

        if (!transactionType || !lineOfBusiness || !policyEffectiveDate || !policyExpiryDate || !policyCurrency || !primaryInsured) {
            response.setStatus(400);
            return { error: "transaction_type, line_of_business, policy_effective_date, policy_expiry_date, policy_currency, and primary_insured are required" };
        }

        var gr = new GlideRecord("x_gegis_ins_policy_submission");
        var isUpdate = false;

        if (submissionId) {
            if (gr.get(submissionId)) {
                isUpdate = true;
            } else {
                response.setStatus(404);
                return { error: "Submission not found: " + submissionId };
            }
        } else {
            gr.initialize();
        }

        gr.setValue("transaction_type", transactionType);
        gr.setValue("line_of_business", lineOfBusiness);
        gr.setValue("policy_effective_date", policyEffectiveDate);
        gr.setValue("policy_expiry_date", policyExpiryDate);
        gr.setValue("policy_currency", policyCurrency);
        if (sourceChannel) gr.setValue("source_channel", sourceChannel);
        if (policyTerritory) gr.setValue("policy_territory", policyTerritory);
        if (predominantState) gr.setValue("predominant_state", predominantState);
        if (billingType) gr.setValue("billing_type", billingType);
        if (noOfInstallments) gr.setValue("no_of_installments", noOfInstallments);
        if (numberOfLocations) gr.setValue("number_of_locations", numberOfLocations);
        if (natureOfBusiness) gr.setValue("nature_of_business", natureOfBusiness);
        if (overallStatus) gr.setValue("overall_status", overallStatus);
        if (primaryInsured) gr.setValue("primary_insured", primaryInsured);
        if (primaryBroker) gr.setValue("primary_broker", primaryBroker);

        var sysId;
        if (isUpdate) {
            gr.update();
            sysId = gr.getUniqueValue();
        } else {
            gr.setValue("received_date", new GlideDateTime().toString());
            sysId = gr.insert();
        }

        if (!sysId) {
            response.setStatus(500);
            return { error: "Failed to " + (isUpdate ? "update" : "create") + " submission" };
        }

        // Link back to the intake case that triggered this submission
        if (intakeCaseSysId && !isUpdate) {
            var inkGr = new GlideRecord("x_gegis_ins_policy_intake_case");
            if (inkGr.get(intakeCaseSysId)) {
                inkGr.setValue("linked_submission", sysId.toString());
                inkGr.setValue("intake_status", "processed");
                inkGr.update();
            }
        }

        response.setStatus(isUpdate ? 200 : 201);
        return {
            result: {
                sys_id: sysId.toString(),
                number: gr.getValue("number"),
                status: isUpdate ? "updated" : "created",
            },
        };
    } catch (e) {
        gs.error("SubmissionHandler: " + e.message);
        response.setStatus(500);
        return { error: "Internal server error: " + e.message };
    }
}
