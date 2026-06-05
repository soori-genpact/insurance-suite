import { Acl } from '@servicenow/sdk/core'
import {
    adminRole,
    underwriterRole,
    riskAnalystRole,
    operationalRole,
    complianceOfficerRole,
    brokerRole,
    integrationRole,
    approverRole,
} from './roles.now.js'

// ─────────────────────────────────────────────────────────────────────────────
// GOLDEN RULE: ONLY adminRole receives delete ACLs on every table.
// No other role — ever. See memory: feedback_delete-acl-golden-rule.md
// ─────────────────────────────────────────────────────────────────────────────

// ── INTAKE CASE ──────────────────────────────────────────────────────────────
// First contact point — created by integration/email ingestion, managed by ops.

export const aclIntakeCaseRead = Acl({
    $id: Now.ID['acl_ic_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_intake_case',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclIntakeCaseCreate = Acl({
    $id: Now.ID['acl_ic_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_intake_case',
    operation: 'create',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclIntakeCaseWrite = Acl({
    $id: Now.ID['acl_ic_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_intake_case',
    operation: 'write',
    roles: [operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclIntakeCaseDelete = Acl({
    $id: Now.ID['acl_ic_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_intake_case',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── SUBMISSION ────────────────────────────────────────────────────────────────
// Core intake record. Brokers create submissions; underwriters own them.

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
    roles: [brokerRole, integrationRole, underwriterRole],
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

// ── ORCHESTRATION CASE ───────────────────────────────────────────────────────
// System-created by business rule on submission insert. Ops manages the queue.

export const aclOrchRead = Acl({
    $id: Now.ID['acl_orc_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_orch_case',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclOrchCreate = Acl({
    $id: Now.ID['acl_orc_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_orch_case',
    operation: 'create',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclOrchWrite = Acl({
    $id: Now.ID['acl_orc_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_orch_case',
    operation: 'write',
    roles: [operationalRole, integrationRole],
    adminOverrides: true,
})

export const aclOrchDelete = Acl({
    $id: Now.ID['acl_orc_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_orch_case',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── CLEARANCE CASE ───────────────────────────────────────────────────────────
// Sanctions/compliance clearance. Underwriters action; compliance reads.

export const aclClearanceRead = Acl({
    $id: Now.ID['acl_clr_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_clearance',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclClearanceCreate = Acl({
    $id: Now.ID['acl_clr_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_clearance',
    operation: 'create',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclClearanceWrite = Acl({
    $id: Now.ID['acl_clr_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_clearance',
    operation: 'write',
    roles: [underwriterRole, integrationRole],
    adminOverrides: true,
})

export const aclClearanceDelete = Acl({
    $id: Now.ID['acl_clr_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_clearance',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── EXPOSURE CASE ─────────────────────────────────────────────────────────────
// Financial exposure analysis. Risk analysts own this; underwriters read/write.

export const aclExposureRead = Acl({
    $id: Now.ID['acl_exp_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure',
    operation: 'read',
    // underwriterRole contains riskAnalystRole — risk_analyst access is inherited
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclExposureCreate = Acl({
    $id: Now.ID['acl_exp_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure',
    operation: 'create',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclExposureWrite = Acl({
    $id: Now.ID['acl_exp_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure',
    operation: 'write',
    // riskAnalystRole explicitly included for direct write access
    roles: [underwriterRole, riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclExposureDelete = Acl({
    $id: Now.ID['acl_exp_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_exposure',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── RISK ASSESSMENT ───────────────────────────────────────────────────────────
// Core underwriting data. Risk analysts score; underwriters review and approve.

export const aclRiskRead = Acl({
    $id: Now.ID['acl_rsk_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_risk_assess',
    operation: 'read',
    roles: [underwriterRole, operationalRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclRiskCreate = Acl({
    $id: Now.ID['acl_rsk_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_risk_assess',
    operation: 'create',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclRiskWrite = Acl({
    $id: Now.ID['acl_rsk_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_risk_assess',
    operation: 'write',
    roles: [underwriterRole, riskAnalystRole, integrationRole],
    adminOverrides: true,
})

export const aclRiskDelete = Acl({
    $id: Now.ID['acl_rsk_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_risk_assess',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── QUOTE & BIND ─────────────────────────────────────────────────────────────
// Financial records. Approvers bind; brokers read status.
// NOTE: policyholder read access requires a policyholder reference column
// on this table before it can be implemented with row-level filtering.

export const aclQuoteRead = Acl({
    $id: Now.ID['acl_qtb_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_quote_bind',
    operation: 'read',
    roles: [underwriterRole, complianceOfficerRole, brokerRole, integrationRole],
    adminOverrides: true,
})

export const aclQuoteCreate = Acl({
    $id: Now.ID['acl_qtb_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_quote_bind',
    operation: 'create',
    roles: [underwriterRole, integrationRole],
    adminOverrides: true,
})

export const aclQuoteWrite = Acl({
    $id: Now.ID['acl_qtb_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_quote_bind',
    operation: 'write',
    // approverRole contains underwriterRole — underwriter write is inherited
    roles: [approverRole, integrationRole],
    adminOverrides: true,
})

// Premium amount is sensitive — deny range queries from non-approvers
export const aclQuotePremiumQueryRange = Acl({
    $id: Now.ID['acl_qtb_premium_query_range'],
    type: 'record',
    table: 'x_gegis_ins_policy_quote_bind',
    field: 'premium_amount',
    operation: 'query_range',
    decisionType: 'deny',
    roles: [approverRole],
    adminOverrides: true,
})

export const aclQuoteDelete = Acl({
    $id: Now.ID['acl_qtb_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_quote_bind',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── AI EXTRACTION TASK ───────────────────────────────────────────────────────
// Internal system records. Ops monitors; integration creates/updates.

export const aclAiTaskRead = Acl({
    $id: Now.ID['acl_ait_read'],
    type: 'record',
    table: 'x_gegis_ins_policy_ai_task',
    operation: 'read',
    roles: [operationalRole, underwriterRole, complianceOfficerRole, integrationRole],
    adminOverrides: true,
})

export const aclAiTaskCreate = Acl({
    $id: Now.ID['acl_ait_create'],
    type: 'record',
    table: 'x_gegis_ins_policy_ai_task',
    operation: 'create',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclAiTaskWrite = Acl({
    $id: Now.ID['acl_ait_write'],
    type: 'record',
    table: 'x_gegis_ins_policy_ai_task',
    operation: 'write',
    roles: [integrationRole, operationalRole],
    adminOverrides: true,
})

export const aclAiTaskDelete = Acl({
    $id: Now.ID['acl_ait_delete'],
    type: 'record',
    table: 'x_gegis_ins_policy_ai_task',
    operation: 'delete',
    roles: [adminRole],
    adminOverrides: true,
})

// ── REST API — ENDPOINT ACL ───────────────────────────────────────────────────
// Layer 1: guards the entire Policy Suite API endpoint (execute access).

export const aclRestApiExecute = Acl({
    $id: Now.ID['acl_rest_api_execute'],
    type: 'rest_endpoint',
    name: 'policy_suite_api',
    operation: 'execute',
    roles: [integrationRole, operationalRole, underwriterRole],
    adminOverrides: true,
})

// ── REST API — PATH-BASED ACLs (Australia release) ────────────────────────────
// The SDK type system currently only exposes 'execute' for rest_endpoint ACLs.
// Path-based ACLs (http_post/get/put/patch/delete per route) must be created
// manually on the instance via System Security > Access Control (ACL):
//
//   Type: REST_Endpoint | Operation: http_post
//   /api/x_gegis_ins_policy/policy_suite_api/intake-case  → integration, operational
//   /api/x_gegis_ins_policy/policy_suite_api/submission   → integration, broker, underwriter
//   /api/x_gegis_ins_policy/policy_suite_api/ai-task      → integration, operational
