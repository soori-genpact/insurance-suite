import { Table, ReferenceColumn, IntegerColumn, StringColumn, OverrideColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_risk_assess = Table({
    name: 'x_gegis_ins_policy_risk_assess',
    label: 'Risk Assessment Case',
    extends: 'task',
    autoNumber: { prefix: 'RSK', number: 1000 },
    schema: {
        orchestration_case: ReferenceColumn({
            label: 'Orchestration Case',
            referenceTable: 'x_gegis_ins_policy_orch_case',
        }),
        submission: ReferenceColumn({ label: 'Submission', referenceTable: 'x_gegis_ins_policy_submission' }),
        risk_score: IntegerColumn({ label: 'Risk Score' }),
        risk_level: StringColumn({
            label: 'Risk Level',
            dropdown: 'dropdown_with_none',
            choices: {
                low: { label: 'Low', sequence: 0 },
                medium: { label: 'Medium', sequence: 1 },
                high: { label: 'High', sequence: 2 },
                critical: { label: 'Critical', sequence: 3 },
            },
        }),
        number: OverrideColumn({
            baseTable: 'task',
        }),
        assignment_group: OverrideColumn({
            baseTable: 'task',
            referenceQualifier: 'active=true',
        }),
        assigned_to: OverrideColumn({
            baseTable: 'task',
            referenceQualifier: 'active=true',
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
