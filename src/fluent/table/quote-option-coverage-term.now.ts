import { Table, DecimalColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_quote_option_coverage_term = Table({
    name: 'x_gegis_ins_policy_quote_option_coverage_term',
    label: 'Quote Option Coverage Term',
    schema: {
        quote_option_coverage: ReferenceColumn({
            label: 'Quote option coverage',
            referenceTable: 'x_gegis_ins_policy_quote_option_coverage',
            mandatory: true,
        }),
        coverage_term_option: ReferenceColumn({
            label: 'Coverage term option',
            referenceTable: 'x_gegis_ins_policy_coverage_term_option',
            mandatory: true,
        }),
        selected_value: DecimalColumn({
            label: 'Selected value',
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'coverage_term_option',
        },
        {
            name: 'index2',
            unique: false,
            element: 'quote_option_coverage',
        },
    ],
})
