import { Table, DecimalColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_quote_option_coverage = Table({
    name: 'x_gegis_ins_policy_quote_option_coverage',
    label: 'Quote Option Coverage',
    schema: {
        quote_option: ReferenceColumn({
            label: 'Quote option',
            referenceTable: 'x_gegis_ins_policy_quote_option',
            mandatory: true,
        }),
        product_coverage: ReferenceColumn({
            label: 'Product coverage',
            referenceTable: 'x_gegis_ins_policy_product_coverage',
            mandatory: true,
        }),
        quote_risk: ReferenceColumn({
            label: 'Quote risk',
            referenceTable: 'x_gegis_ins_policy_quote_risk',
            mandatory: true,
        }),
        coverage_premium: DecimalColumn({
            label: 'Coverage premium',
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'product_coverage',
        },
        {
            name: 'index2',
            unique: false,
            element: 'quote_option',
        },
        {
            name: 'index3',
            unique: false,
            element: 'quote_risk',
        },
    ],
})
