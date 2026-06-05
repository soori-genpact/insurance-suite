import { Acl } from '@servicenow/sdk/core'
import {
    adminRole,
    underwriterRole,
    riskAnalystRole,
    operationalRole,
    complianceOfficerRole,
    brokerRole,
    policyholderRole,
    integrationRole,
    approverRole,
} from './roles.now.js'

// ─────────────────────────────────────────────────────────────────────────────
// GOLDEN RULE: ONLY adminRole receives delete ACLs on every table.
// No other role — ever.
// ─────────────────────────────────────────────────────────────────────────────

// ── SUBMISSION (HUB) ──────────────────────────────────────────────────────────

export const aclSubmissionRead = Acl({
    $id: Now.ID['acl_sub_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_submission',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, brokerRole, integrationRole],
    adminOverrides: true,
})

export const aclSubmissionCreate = Acl({
    $id: Now.ID['acl_sub_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_submission',
    operation: 'create',
    roles: [brokerRole, underwriterRole, integrationRole],
    adminOverrides: true,
})

export const aclSubmissionWrite = Acl({
    $id: Now.ID['acl_sub_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_submission',
    operation: 'write',
    roles: [underwriterRole, operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclSubmissionDelete = Acl({
    $id: Now.ID['acl_sub_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_submission',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── PARTY ─────────────────────────────────────────────────────────────────────

export const aclPartyRead = Acl({
    $id: Now.ID['acl_pty_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_party',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, brokerRole, integrationRole],
    adminOverrides: true,
})

export const aclPartyCreate = Acl({
    $id: Now.ID['acl_pty_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_party',
    operation: 'create',
    roles: [operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclPartyWrite = Acl({
    $id: Now.ID['acl_pty_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_party',
    operation: 'write',
    roles: [operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclPartyDelete = Acl({
    $id: Now.ID['acl_pty_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_party',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── SUBMISSION PARTY ──────────────────────────────────────────────────────────

export const aclSubPartyRead = Acl({
    $id: Now.ID['acl_sp_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_submission_party',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, brokerRole, integrationRole],
    adminOverrides: true,
})

export const aclSubPartyCreate = Acl({
    $id: Now.ID['acl_sp_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_submission_party',
    operation: 'create',
    roles: [brokerRole, operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclSubPartyWrite = Acl({
    $id: Now.ID['acl_sp_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_submission_party',
    operation: 'write',
    roles: [operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclSubPartyDelete = Acl({
    $id: Now.ID['acl_sp_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_submission_party',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── CLEARANCE CASE ────────────────────────────────────────────────────────────

export const aclClearanceCaseRead = Acl({
    $id: Now.ID['acl_clrc_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_clearance_case',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclClearanceCaseCreate = Acl({
    $id: Now.ID['acl_clrc_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_clearance_case',
    operation: 'create',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclClearanceCaseWrite = Acl({
    $id: Now.ID['acl_clrc_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_clearance_case',
    operation: 'write',
    roles: [underwriterRole, operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclClearanceCaseDelete = Acl({
    $id: Now.ID['acl_clrc_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_clearance_case',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── CLEARANCE CHECK ───────────────────────────────────────────────────────────

export const aclClearanceCheckRead = Acl({
    $id: Now.ID['acl_clrk_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_clearance_check',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclClearanceCheckCreate = Acl({
    $id: Now.ID['acl_clrk_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_clearance_check',
    operation: 'create',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclClearanceCheckWrite = Acl({
    $id: Now.ID['acl_clrk_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_clearance_check',
    operation: 'write',
    roles: [underwriterRole, operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclClearanceCheckDelete = Acl({
    $id: Now.ID['acl_clrk_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_clearance_check',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── EXPOSURE CASE ─────────────────────────────────────────────────────────────

export const aclExposureCaseRead = Acl({
    $id: Now.ID['acl_expc_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure_case',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclExposureCaseCreate = Acl({
    $id: Now.ID['acl_expc_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure_case',
    operation: 'create',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclExposureCaseWrite = Acl({
    $id: Now.ID['acl_expc_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure_case',
    operation: 'write',
    roles: [underwriterRole, riskAnalystRole, operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclExposureCaseDelete = Acl({
    $id: Now.ID['acl_expc_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure_case',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── LOCATION ──────────────────────────────────────────────────────────────────

export const aclLocationRead = Acl({
    $id: Now.ID['acl_loc_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_location',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclLocationCreate = Acl({
    $id: Now.ID['acl_loc_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_location',
    operation: 'create',
    roles: [riskAnalystRole, operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclLocationWrite = Acl({
    $id: Now.ID['acl_loc_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_location',
    operation: 'write',
    roles: [riskAnalystRole, operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclLocationDelete = Acl({
    $id: Now.ID['acl_loc_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_location',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── EXPOSURE ITEM ─────────────────────────────────────────────────────────────

export const aclExposureItemRead = Acl({
    $id: Now.ID['acl_expi_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure_item',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclExposureItemCreate = Acl({
    $id: Now.ID['acl_expi_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure_item',
    operation: 'create',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclExposureItemWrite = Acl({
    $id: Now.ID['acl_expi_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure_item',
    operation: 'write',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclExposureItemDelete = Acl({
    $id: Now.ID['acl_expi_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure_item',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── EXPOSURE PERIL ────────────────────────────────────────────────────────────

export const aclExposurePerilRead = Acl({
    $id: Now.ID['acl_expp_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure_peril',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclExposurePerilCreate = Acl({
    $id: Now.ID['acl_expp_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure_peril',
    operation: 'create',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclExposurePerilWrite = Acl({
    $id: Now.ID['acl_expp_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure_peril',
    operation: 'write',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclExposurePerilDelete = Acl({
    $id: Now.ID['acl_expp_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure_peril',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── VEHICLE ───────────────────────────────────────────────────────────────────

export const aclVehicleRead = Acl({
    $id: Now.ID['acl_veh_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_vehicle',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclVehicleCreate = Acl({
    $id: Now.ID['acl_veh_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_vehicle',
    operation: 'create',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclVehicleWrite = Acl({
    $id: Now.ID['acl_veh_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_vehicle',
    operation: 'write',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclVehicleDelete = Acl({
    $id: Now.ID['acl_veh_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_vehicle',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── WC EXPOSURE ───────────────────────────────────────────────────────────────

export const aclWcExposureRead = Acl({
    $id: Now.ID['acl_wce_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_wc_exposure',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclWcExposureCreate = Acl({
    $id: Now.ID['acl_wce_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_wc_exposure',
    operation: 'create',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclWcExposureWrite = Acl({
    $id: Now.ID['acl_wce_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_wc_exposure',
    operation: 'write',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclWcExposureDelete = Acl({
    $id: Now.ID['acl_wce_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_wc_exposure',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── AUTO EXPOSURE ─────────────────────────────────────────────────────────────

export const aclAutoExposureRead = Acl({
    $id: Now.ID['acl_aue_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_auto_exposure',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclAutoExposureCreate = Acl({
    $id: Now.ID['acl_aue_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_auto_exposure',
    operation: 'create',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclAutoExposureWrite = Acl({
    $id: Now.ID['acl_aue_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_auto_exposure',
    operation: 'write',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclAutoExposureDelete = Acl({
    $id: Now.ID['acl_aue_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_auto_exposure',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── EXISTING POLICY ───────────────────────────────────────────────────────────

export const aclExistingPolicyRead = Acl({
    $id: Now.ID['acl_exp_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_existing_policy',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclExistingPolicyCreate = Acl({
    $id: Now.ID['acl_ep_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_existing_policy',
    operation: 'create',
    roles: [operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclExistingPolicyWrite = Acl({
    $id: Now.ID['acl_ep_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_existing_policy',
    operation: 'write',
    roles: [riskAnalystRole, operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclExistingPolicyDelete = Acl({
    $id: Now.ID['acl_ep_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_existing_policy',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── RISK CASE ─────────────────────────────────────────────────────────────────

export const aclRiskCaseRead = Acl({
    $id: Now.ID['acl_rskc_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_risk_case',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclRiskCaseCreate = Acl({
    $id: Now.ID['acl_rskc_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_risk_case',
    operation: 'create',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclRiskCaseWrite = Acl({
    $id: Now.ID['acl_rskc_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_risk_case',
    operation: 'write',
    roles: [underwriterRole, riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclRiskCaseDelete = Acl({
    $id: Now.ID['acl_rskc_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_risk_case',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── RISK FACTOR ───────────────────────────────────────────────────────────────

export const aclRiskFactorRead = Acl({
    $id: Now.ID['acl_rskf_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_risk_factor',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclRiskFactorCreate = Acl({
    $id: Now.ID['acl_rskf_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_risk_factor',
    operation: 'create',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclRiskFactorWrite = Acl({
    $id: Now.ID['acl_rskf_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_risk_factor',
    operation: 'write',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclRiskFactorDelete = Acl({
    $id: Now.ID['acl_rskf_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_risk_factor',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── MFL / PML ─────────────────────────────────────────────────────────────────

export const aclMflPmlRead = Acl({
    $id: Now.ID['acl_mfl_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_mfl_pml',
    operation: 'read',
    roles: [underwriterRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclMflPmlCreate = Acl({
    $id: Now.ID['acl_mfl_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_mfl_pml',
    operation: 'create',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclMflPmlWrite = Acl({
    $id: Now.ID['acl_mfl_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_mfl_pml',
    operation: 'write',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclMflPmlDelete = Acl({
    $id: Now.ID['acl_mfl_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_mfl_pml',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── LOSS SUMMARY ──────────────────────────────────────────────────────────────

export const aclLossSummaryRead = Acl({
    $id: Now.ID['acl_lss_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_loss_summary',
    operation: 'read',
    roles: [underwriterRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclLossSummaryCreate = Acl({
    $id: Now.ID['acl_lss_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_loss_summary',
    operation: 'create',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclLossSummaryWrite = Acl({
    $id: Now.ID['acl_lss_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_loss_summary',
    operation: 'write',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclLossSummaryDelete = Acl({
    $id: Now.ID['acl_lss_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_loss_summary',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── LOSS RECORD ───────────────────────────────────────────────────────────────

export const aclLossRecordRead = Acl({
    $id: Now.ID['acl_lsr_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_loss_record',
    operation: 'read',
    roles: [underwriterRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclLossRecordCreate = Acl({
    $id: Now.ID['acl_lsr_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_loss_record',
    operation: 'create',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclLossRecordWrite = Acl({
    $id: Now.ID['acl_lsr_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_loss_record',
    operation: 'write',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclLossRecordDelete = Acl({
    $id: Now.ID['acl_lsr_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_loss_record',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── MAJOR EXCLUSION ───────────────────────────────────────────────────────────

export const aclMajorExclusionRead = Acl({
    $id: Now.ID['acl_mex_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_major_exclusion',
    operation: 'read',
    roles: [underwriterRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclMajorExclusionCreate = Acl({
    $id: Now.ID['acl_mex_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_major_exclusion',
    operation: 'create',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclMajorExclusionWrite = Acl({
    $id: Now.ID['acl_mex_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_major_exclusion',
    operation: 'write',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclMajorExclusionDelete = Acl({
    $id: Now.ID['acl_mex_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_major_exclusion',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── TOP RISK ──────────────────────────────────────────────────────────────────

export const aclTopRiskRead = Acl({
    $id: Now.ID['acl_trsk_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_top_risk',
    operation: 'read',
    roles: [underwriterRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclTopRiskCreate = Acl({
    $id: Now.ID['acl_trsk_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_top_risk',
    operation: 'create',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclTopRiskWrite = Acl({
    $id: Now.ID['acl_trsk_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_top_risk',
    operation: 'write',
    roles: [riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclTopRiskDelete = Acl({
    $id: Now.ID['acl_trsk_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_top_risk',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── QNB CASE ──────────────────────────────────────────────────────────────────

export const aclQnbCaseRead = Acl({
    $id: Now.ID['acl_qnbc_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_qnb_case',
    operation: 'read',
    roles: [underwriterRole, approverRole, complianceOfficerRole, brokerRole, integrationRole],
    adminOverrides: true,
})

export const aclQnbCaseCreate = Acl({
    $id: Now.ID['acl_qnbc_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_qnb_case',
    operation: 'create',
    roles: [underwriterRole, integrationRole],
    adminOverrides: true,
})

export const aclQnbCaseWrite = Acl({
    $id: Now.ID['acl_qnbc_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_qnb_case',
    operation: 'write',
    roles: [approverRole, integrationRole],
    adminOverrides: true,
})

export const aclQnbCaseDelete = Acl({
    $id: Now.ID['acl_qnbc_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_qnb_case',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── QUOTE ─────────────────────────────────────────────────────────────────────

export const aclQuoteRead = Acl({
    $id: Now.ID['acl_quo_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_quote',
    operation: 'read',
    roles: [underwriterRole, approverRole, complianceOfficerRole, brokerRole, integrationRole],
    adminOverrides: true,
})

export const aclQuoteCreate = Acl({
    $id: Now.ID['acl_quo_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_quote',
    operation: 'create',
    roles: [underwriterRole, integrationRole],
    adminOverrides: true,
})

export const aclQuoteWrite = Acl({
    $id: Now.ID['acl_quo_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_quote',
    operation: 'write',
    roles: [approverRole, integrationRole],
    adminOverrides: true,
})

export const aclQuoteDelete = Acl({
    $id: Now.ID['acl_quo_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_quote',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── QUOTE OPTION ──────────────────────────────────────────────────────────────

export const aclQuoteOptionRead = Acl({
    $id: Now.ID['acl_quoo_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_quote_option',
    operation: 'read',
    roles: [underwriterRole, approverRole, complianceOfficerRole, brokerRole, integrationRole],
    adminOverrides: true,
})

export const aclQuoteOptionCreate = Acl({
    $id: Now.ID['acl_quoo_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_quote_option',
    operation: 'create',
    roles: [underwriterRole, integrationRole],
    adminOverrides: true,
})

export const aclQuoteOptionWrite = Acl({
    $id: Now.ID['acl_quoo_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_quote_option',
    operation: 'write',
    roles: [approverRole, integrationRole],
    adminOverrides: true,
})

export const aclQuoteOptionDelete = Acl({
    $id: Now.ID['acl_quoo_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_quote_option',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── BIND ──────────────────────────────────────────────────────────────────────

export const aclBindRead = Acl({
    $id: Now.ID['acl_bnd_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_bind',
    operation: 'read',
    roles: [underwriterRole, approverRole, complianceOfficerRole, brokerRole, integrationRole],
    adminOverrides: true,
})

export const aclBindCreate = Acl({
    $id: Now.ID['acl_bnd_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_bind',
    operation: 'create',
    roles: [approverRole, integrationRole],
    adminOverrides: true,
})

export const aclBindWrite = Acl({
    $id: Now.ID['acl_bnd_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_bind',
    operation: 'write',
    roles: [approverRole, integrationRole],
    adminOverrides: true,
})

export const aclBindDelete = Acl({
    $id: Now.ID['acl_bnd_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_bind',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── POLICY ────────────────────────────────────────────────────────────────────

export const aclPolicyRead = Acl({
    $id: Now.ID['acl_pol_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_policy',
    operation: 'read',
    roles: [underwriterRole, approverRole, complianceOfficerRole, brokerRole, policyholderRole, integrationRole],
    adminOverrides: true,
})

export const aclPolicyCreate = Acl({
    $id: Now.ID['acl_pol_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_policy',
    operation: 'create',
    roles: [approverRole, integrationRole],
    adminOverrides: true,
})

export const aclPolicyWrite = Acl({
    $id: Now.ID['acl_pol_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_policy',
    operation: 'write',
    roles: [underwriterRole, integrationRole],
    adminOverrides: true,
})

export const aclPolicyDelete = Acl({
    $id: Now.ID['acl_pol_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_policy',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── DOCUMENT ──────────────────────────────────────────────────────────────────

export const aclDocumentRead = Acl({
    $id: Now.ID['acl_doc_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_document',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, brokerRole, integrationRole],
    adminOverrides: true,
})

export const aclDocumentCreate = Acl({
    $id: Now.ID['acl_doc_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_document',
    operation: 'create',
    roles: [brokerRole, underwriterRole, operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclDocumentWrite = Acl({
    $id: Now.ID['acl_doc_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_document',
    operation: 'write',
    roles: [operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclDocumentDelete = Acl({
    $id: Now.ID['acl_doc_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_document',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── EXTRACTION ────────────────────────────────────────────────────────────────

export const aclExtractionRead = Acl({
    $id: Now.ID['acl_ext_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_extraction',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclExtractionCreate = Acl({
    $id: Now.ID['acl_ext_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_extraction',
    operation: 'create',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclExtractionWrite = Acl({
    $id: Now.ID['acl_ext_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_extraction',
    operation: 'write',
    roles: [integrationRole],
    adminOverrides: true,
})

export const aclExtractionDelete = Acl({
    $id: Now.ID['acl_ext_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_extraction',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── EXTRACTION FIELD ──────────────────────────────────────────────────────────

export const aclExtractionFieldRead = Acl({
    $id: Now.ID['acl_extf_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_extraction_field',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclExtractionFieldCreate = Acl({
    $id: Now.ID['acl_extf_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_extraction_field',
    operation: 'create',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclExtractionFieldWrite = Acl({
    $id: Now.ID['acl_extf_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_extraction_field',
    operation: 'write',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclExtractionFieldDelete = Acl({
    $id: Now.ID['acl_extf_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_extraction_field',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── INTAKE CASE ───────────────────────────────────────────────────────────────

export const aclIntakeCaseRead = Acl({
    $id: Now.ID['acl_ink_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_intake_case',
    operation: 'read',
    roles: [underwriterRole, operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclIntakeCaseCreate = Acl({
    $id: Now.ID['acl_ink_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_intake_case',
    operation: 'create',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclIntakeCaseWrite = Acl({
    $id: Now.ID['acl_ink_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_intake_case',
    operation: 'write',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclIntakeCaseDelete = Acl({
    $id: Now.ID['acl_ink_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_intake_case',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── CASE TASK ─────────────────────────────────────────────────────────────────

export const aclCaseTaskRead = Acl({
    $id: Now.ID['acl_tsk_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_case_task',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclCaseTaskCreate = Acl({
    $id: Now.ID['acl_tsk_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_case_task',
    operation: 'create',
    roles: [underwriterRole, operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclCaseTaskWrite = Acl({
    $id: Now.ID['acl_tsk_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_case_task',
    operation: 'write',
    roles: [underwriterRole, operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclCaseTaskDelete = Acl({
    $id: Now.ID['acl_tsk_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_case_task',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── BASE CASE ─────────────────────────────────────────────────────────────────

export const aclBaseCaseRead = Acl({
    $id: Now.ID['acl_bcs_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_base_case',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclBaseCaseCreate = Acl({
    $id: Now.ID['acl_bcs_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_base_case',
    operation: 'create',
    roles: [operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclBaseCaseWrite = Acl({
    $id: Now.ID['acl_bcs_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_base_case',
    operation: 'write',
    roles: [operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclBaseCaseDelete = Acl({
    $id: Now.ID['acl_bcs_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_base_case',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── REST API — ENDPOINT ACL ───────────────────────────────────────────────────

export const aclRestApiExecute = Acl({
    $id: Now.ID['acl_rest_api_execute'],
    type: 'rest_endpoint',
    name: 'policy_suite_api',
    operation: 'execute',
    roles: [integrationRole, operationalRole, underwriterRole],
    adminOverrides: true,
})
