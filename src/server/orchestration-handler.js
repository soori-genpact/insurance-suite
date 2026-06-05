import { GlideRecord, gs } from "@servicenow/glide";

/**
 * Business Rule handler — fires AFTER INSERT on x_gegis_ins_policy_submission.
 * Spawns the four module cases: Clearance, Exposure, Risk, QNB.
 *
 * @param {GlideRecord} current - the newly inserted Submission record
 * @param {GlideRecord} previous
 */
export function orchestrateSubCases(current, previous) {
    try {
        var submissionId = current.getUniqueValue();
        var label = current.getValue("primary_insured_display") || current.getValue("number") || submissionId;

        var cases = [
            {
                table: "x_gegis_ins_policy_clearance_case",
                shortDesc: "Clearance: " + label,
                extraField: "clearance_status",
                extraValue: "pending",
            },
            {
                table: "x_gegis_ins_policy_exposure_case",
                shortDesc: "Exposure: " + label,
                extraField: "exposure_status",
                extraValue: "pending",
            },
            {
                table: "x_gegis_ins_policy_risk_case",
                shortDesc: "Risk: " + label,
                extraField: null,
                extraValue: null,
            },
            {
                table: "x_gegis_ins_policy_qnb_case",
                shortDesc: "Quote & Bind: " + label,
                extraField: "qnb_status",
                extraValue: "draft",
            },
        ];

        for (var i = 0; i < cases.length; i++) {
            var def = cases[i];
            var gr = new GlideRecord(def.table);
            gr.initialize();
            gr.setValue("submission", submissionId);
            gr.setValue("short_description", def.shortDesc);
            if (def.extraField) {
                gr.setValue(def.extraField, def.extraValue);
            }
            var id = gr.insert();
            if (!id) {
                gs.error("OrchestrationHandler: failed to create " + def.table + " for submission " + submissionId);
            }
        }

        gs.info("OrchestrationHandler: spawned 4 module cases for submission " + submissionId);
    } catch (e) {
        gs.error("OrchestrationHandler: " + e.message);
    }
}
