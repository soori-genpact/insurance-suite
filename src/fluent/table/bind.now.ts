import { Table, StringColumn, ReferenceColumn, DateColumn, DateTimeColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_bind = Table({
    name: 'x_gegis_ins_policy_bind',
    label: 'Bind',
    schema: {
        qnb_case: ReferenceColumn({
            label: 'Q&B case',
            referenceTable: 'x_gegis_ins_policy_qnb_case',
            mandatory: true,
        }),
        accepted_quote: ReferenceColumn({
            label: 'Accepted quote',
            referenceTable: 'x_gegis_ins_policy_quote',
            mandatory: true,
        }),
        bind_date: DateTimeColumn({ label: 'Bind date', mandatory: true }),
        effective_date: DateColumn({ label: 'Effective date', mandatory: true }),
        expiry_date: DateColumn({ label: 'Expiry date', mandatory: true }),
        bound_premium: DecimalColumn({ label: 'Bound premium', mandatory: true }),
        policy_number: StringColumn({ label: 'Policy number', maxLength: 40 }),
        bound_by: ReferenceColumn({ label: 'Bound by', referenceTable: 'sys_user' }),
        status: StringColumn({
            label: 'Status',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                bound: { label: 'Bound', sequence: 0 },
                issued: { label: 'Issued', sequence: 1 },
                cancelled: { label: 'Cancelled', sequence: 2 },
            },
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'accepted_quote',
        },
        {
            name: 'index2',
            unique: false,
            element: 'bound_by',
        },
        {
            name: 'index3',
            unique: false,
            element: 'qnb_case',
        },
    ],
})
