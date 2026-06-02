import { Table, ReferenceColumn, StringColumn, DecimalColumn, OverrideColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_exposure = Table({
    name: 'x_gegis_ins_policy_exposure',
    label: 'Exposure Case',
    extends: 'task',
    autoNumber: { prefix: 'EXP', number: 1000 },
    schema: {
        orchestration_case: ReferenceColumn({
            label: 'Orchestration Case',
            referenceTable: 'x_gegis_ins_policy_orch_case',
        }),
        submission: ReferenceColumn({ label: 'Submission', referenceTable: 'x_gegis_ins_policy_submission' }),
        exposure_type: StringColumn({ label: 'Exposure Type', maxLength: 100 }),
        exposure_amount: DecimalColumn({ label: 'Exposure Amount' }),
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
