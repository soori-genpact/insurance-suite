import { Table, BooleanColumn, DecimalColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_product_coverage_term_option = Table({
    name: 'x_gegis_ins_policy_product_coverage_term_option',
    label: 'Product Coverage Term Option',
    schema: {
        product_coverage: ReferenceColumn({
            label: 'Product coverage',
            referenceTable: 'x_gegis_ins_policy_product_coverage',
            mandatory: true,
        }),
        coverage_term_option: ReferenceColumn({
            label: 'Coverage term option',
            referenceTable: 'x_gegis_ins_policy_coverage_term_option',
            mandatory: true,
        }),
        available: BooleanColumn({
            label: 'Available',
        }),
        is_product_default: BooleanColumn({
            label: 'Is product default',
        }),
        premium_impact: DecimalColumn({
            label: 'Premium impact',
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
            element: 'product_coverage',
        },
    ],
})
