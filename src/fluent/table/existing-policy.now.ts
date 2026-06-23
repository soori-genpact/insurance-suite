import { Table, StringColumn, ReferenceColumn, DateColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_existing_policy = Table({
    name: 'x_gegis_ins_policy_existing_policy',
    label: 'Existing Policy',
    schema: {
        submission: ReferenceColumn({
            label: 'Submission',
            referenceTable: 'x_gegis_ins_policy_submission',
            mandatory: true,
        }),
        external: BooleanColumn({ label: 'External', mandatory: true }),
        provider: StringColumn({ label: 'Provider / carrier', maxLength: 200 }),
        policy_reference: ReferenceColumn({
            label: 'Policy reference',
            referenceTable: 'x_gegis_ins_policy_policy',
        }),
        policy_number: StringColumn({ label: 'Policy number', maxLength: 40 }),
        effective_date: DateColumn({ label: 'Effective date' }),
        expiry_date: DateColumn({ label: 'Expiry date' }),
        line_of_business: StringColumn({
            label: 'Line of business',
            dropdown: 'dropdown_with_none',
            choices: {
                property: { label: 'Property', sequence: 0 },
                workers_comp: { label: 'Workers Comp', sequence: 1 },
                auto: { label: 'Auto', sequence: 2 },
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
            element: 'policy_reference',
        },
        {
            name: 'index2',
            unique: false,
            element: 'submission',
        },
    ],
})
