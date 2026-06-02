import { Table, ReferenceColumn, DecimalColumn, StringColumn, OverrideColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_quote_bind = Table({
    name: 'x_gegis_ins_policy_quote_bind',
    label: 'Quote & Bind Case',
    extends: 'task',
    autoNumber: { prefix: 'QTB', number: 1000 },
    schema: {
        orchestration_case: ReferenceColumn({
            label: 'Orchestration Case',
            referenceTable: 'x_gegis_ins_policy_orch_case',
        }),
        submission: ReferenceColumn({ label: 'Submission', referenceTable: 'x_gegis_ins_policy_submission' }),
        premium_amount: DecimalColumn({ label: 'Premium Amount' }),
        quote_status: StringColumn({
            label: 'Quote Status',
            dropdown: 'dropdown_with_none',
            choices: {
                draft: { label: 'Draft', sequence: 0 },
                quoted: { label: 'Quoted', sequence: 1 },
                bound: { label: 'Bound', sequence: 2 },
                declined: { label: 'Declined', sequence: 3 },
            },
        }),
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
