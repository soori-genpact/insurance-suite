import { GlideRecord, gs } from "@servicenow/glide";

/**
 * Orchestration handler for Submission insert.
 * Creates an Orchestration Case and sub-cases based on subscription type.
 *
 * @param {GlideRecord} current - The Submission record being inserted
 * @param {GlideRecord} previous - The previous Submission record (null on insert)
 */
export function orchestrateSubCases(current, previous) {
    try {
        var submissionId = current.getUniqueValue();
        var intakeCaseId = current.getValue("intake_case") || "";
        var insuredName = current.getValue("insured_name") || "";
        var subscription = current.getValue("subscription") || "all";

        // Create the Orchestration Case
        var orchGr = new GlideRecord("x_gegis_ins_policy_orch_case");
        orchGr.initialize();
        orchGr.setValue("submission", submissionId);
        orchGr.setValue("intake_case", intakeCaseId);
        orchGr.setValue("short_description", "Orchestration: " + insuredName);
        var orchId = orchGr.insert();

        if (!orchId) {
            gs.error("Failed to create Orchestration Case for Submission: " + submissionId);
            return;
        }

        // Determine which sub-cases to create based on subscription
        var createClearance = (subscription === "all" || subscription === "clearance_only");
        var createRisk = (subscription === "all" || subscription === "risk_only");
        var createExposure = (subscription === "all" || subscription === "exposure_only");
        var createQuote = (subscription === "all" || subscription === "quote_only");

        // Create Clearance Case
        if (createClearance) {
            var clrGr = new GlideRecord("x_gegis_ins_policy_clearance");
            clrGr.initialize();
            clrGr.setValue("orchestration_case", orchId);
            clrGr.setValue("submission", submissionId);
            clrGr.setValue("short_description", "Clearance: " + insuredName);
            clrGr.setValue("clearance_result", "pending");
            clrGr.insert();
        }

        // Create Risk Assessment Case
        if (createRisk) {
            var rskGr = new GlideRecord("x_gegis_ins_policy_risk_assess");
            rskGr.initialize();
            rskGr.setValue("orchestration_case", orchId);
            rskGr.setValue("submission", submissionId);
            rskGr.setValue("short_description", "Risk Assessment: " + insuredName);
            rskGr.insert();
        }

        // Create Exposure Case
        if (createExposure) {
            var expGr = new GlideRecord("x_gegis_ins_policy_exposure");
            expGr.initialize();
            expGr.setValue("orchestration_case", orchId);
            expGr.setValue("submission", submissionId);
            expGr.setValue("short_description", "Exposure Analysis: " + insuredName);
            expGr.insert();
        }

        // Create Quote & Bind Case
        if (createQuote) {
            var qtbGr = new GlideRecord("x_gegis_ins_policy_quote_bind");
            qtbGr.initialize();
            qtbGr.setValue("orchestration_case", orchId);
            qtbGr.setValue("submission", submissionId);
            qtbGr.setValue("short_description", "Quote & Bind: " + insuredName);
            qtbGr.setValue("quote_status", "draft");
            qtbGr.insert();
        }

        gs.info("Orchestration completed for Submission: " + submissionId + " - Created sub-cases based on subscription: " + subscription);

    } catch (e) {
        gs.error("Error in orchestrateSubCases: " + e.message);
    }
}
