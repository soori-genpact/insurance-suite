import { Table, ReferenceColumn, OverrideColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_orch_case = Table({
    name: 'x_gegis_ins_policy_orch_case',
    label: 'Orchestration Case',
    extends: 'task',
    autoNumber: { prefix: 'ORC', number: 1000 },
    schema: {
        submission: ReferenceColumn({ label: 'Submission', referenceTable: 'x_gegis_ins_policy_submission' }),
        intake_case: ReferenceColumn({ label: 'Intake Case', referenceTable: 'x_gegis_ins_policy_intake_case' }),
        assigned_to: OverrideColumn({
            baseTable: 'task',
            referenceQualifier: 'active=true',
        }),
        number: OverrideColumn({
            baseTable: 'task',
        }),
        assignment_group: OverrideColumn({
            baseTable: 'task',
            referenceQualifier: 'active=true',
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
