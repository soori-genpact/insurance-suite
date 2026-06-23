import { Role } from '@servicenow/sdk/core'

// ─── Tier 1: Base ───────────────────────────────────────────────────────────
// Lowest-privilege role. All internal roles inherit from this.
// Grants basic authenticated read access to non-sensitive lookups.
export const userRole = Role({
    name: 'x_gegis_ins_policy.user',
    description: 'Base role for all internal users. Read-only access to general application data.',
})

// ─── Tier 2: Specialist Roles ────────────────────────────────────────────────

// Read submissions, risk assessments, exposure, clearance, quote-bind.
// Primary consumer of insurance pipeline data.
export const riskAnalystRole = Role({
    name: 'x_gegis_ins_policy.risk_analyst',
    description: 'Reads and updates risk assessment and exposure case records.',
    containsRoles: [userRole],
})

// Full read/write on all pipeline tables: submission → orchestration → clearance
// → exposure → risk assessment → quote-bind.
export const underwriterRole = Role({
    name: 'x_gegis_ins_policy.underwriter',
    description: 'Creates and manages the full underwriting pipeline from submission to quote-bind.',
    containsRoles: [riskAnalystRole],
})

// Manages intake queues, orchestration cases, and AI task monitoring.
// Does not access financial/premium data.
export const operationalRole = Role({
    name: 'x_gegis_ins_policy.operational',
    description: 'Manages case queues, orchestration workflow, and AI extraction tasks.',
    containsRoles: [userRole],
})

// Read-only across all tables for audit, reporting, and regulatory compliance.
export const complianceOfficerRole = Role({
    name: 'x_gegis_ins_policy.compliance_officer',
    description: 'Read-only access across all tables for audit and regulatory reporting.',
    containsRoles: [userRole],
})

// External broker: can create new submissions and track the status of their own.
// No access to internal risk/clearance/exposure details.
export const brokerRole = Role({
    name: 'x_gegis_ins_policy.broker',
    description: 'External broker who submits new insurance requests and tracks submission status.',
    containsRoles: [userRole],
})

// External policyholder: read-only on their own bound policies and quote records.
// Does not inherit userRole — most restrictive external role.
export const policyholderRole = Role({
    name: 'x_gegis_ins_policy.policyholder',
    description: 'External policyholder. Read-only view of own policy and quote-bind records.',
})

// System-to-system integration account. Used by REST API callers and external
// platforms (e.g., Azure, n8n, LangGraph connectors). Full CRUD, no delete.
export const integrationRole = Role({
    name: 'x_gegis_ins_policy.integration',
    description: 'Service account role for REST API and system integrations. Create/read/write only.',
})

// ─── Tier 3: Approval Authority ──────────────────────────────────────────────

// Can approve quotes and bind policies. Full underwriter rights plus approve/bind.
export const approverRole = Role({
    name: 'x_gegis_ins_policy.approver',
    description: 'Authorized to approve quotes and bind insurance policies. Extends underwriter.',
    containsRoles: [underwriterRole],
})

// ─── Tier 4: Admin ───────────────────────────────────────────────────────────

// GOLDEN RULE: admin is the ONLY role with delete permission on any table.
// Contains all internal roles — admin inherits the full permission set of the application.
export const adminRole = Role({
    name: 'x_gegis_ins_policy.admin',
    description: 'Full application admin. Only role with delete access on any table.',
    containsRoles: [approverRole, operationalRole, complianceOfficerRole, integrationRole],
})
