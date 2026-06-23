import { Table, StringColumn, ReferenceColumn, DateColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_rate_table = Table({
    name: 'x_gegis_ins_policy_rate_table',
    label: 'Rate Table',
    schema: {
        name: StringColumn({
            label: 'Name',
            mandatory: true,
            maxLength: 200,
        }),
        coverage: ReferenceColumn({
            label: 'Coverage',
            referenceTable: 'x_gegis_ins_policy_coverage',
            mandatory: true,
        }),
        lob: StringColumn({
            label: 'LOB',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                property: {
                    label: 'Property',
                    sequence: 0,
                },
                workers_comp: {
                    label: 'Workers Comp',
                    sequence: 1,
                },
                auto: {
                    label: 'Auto',
                    sequence: 2,
                },
                motor: {
                    label: 'Motor',
                    sequence: 3,
                },
            },
        }),
        rate_type: StringColumn({
            label: 'Rate type',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                per_mille: { label: 'Per Mille (‰)', sequence: 0 },
                percentage: { label: 'Percentage', sequence: 1 },
                flat: { label: 'Flat', sequence: 2 },
            },
        }),
        effective_date: DateColumn({
            label: 'Effective date',
            mandatory: true,
        }),
        expiry_date: DateColumn({
            label: 'Expiry date',
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'coverage',
        },
    ],
})
