import { Table, BooleanColumn, DecimalColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_product_coverage = Table({
    name: 'x_gegis_ins_policy_product_coverage',
    label: 'Product Coverage',
    schema: {
        product: ReferenceColumn({
            label: 'Product',
            referenceTable: 'x_gegis_ins_policy_product',
            mandatory: true,
        }),
        coverage: ReferenceColumn({
            label: 'Coverage',
            referenceTable: 'x_gegis_ins_policy_coverage',
            mandatory: true,
        }),
        mandatory: BooleanColumn({
            label: 'Mandatory',
        }),
        base_premium: DecimalColumn({
            label: 'Base premium',
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
        {
            name: 'index2',
            unique: false,
            element: 'product',
        },
    ],
})
