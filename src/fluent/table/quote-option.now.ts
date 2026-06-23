import { Table, StringColumn, ReferenceColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_quote_option = Table({
    name: 'x_gegis_ins_policy_quote_option',
    label: 'Quote Option',
    schema: {
        quote: ReferenceColumn({
            label: 'Quote',
            referenceTable: 'x_gegis_ins_policy_quote',
            mandatory: true,
        }),
        line_of_business: StringColumn({
            label: 'Line of business',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                property: { label: 'Property', sequence: 0 },
                workers_comp: { label: 'Workers Comp', sequence: 1 },
                auto: { label: 'Auto', sequence: 2 },
            },
        }),
        limit: DecimalColumn({ label: 'Limit' }),
        deductible: DecimalColumn({ label: 'Deductible' }),
        premium: DecimalColumn({ label: 'Premium' }),
        commission_rate: DecimalColumn({ label: 'Commission rate' }),
        terms: StringColumn({ label: 'Terms', maxLength: 2000 }),
        version: StringColumn({ label: 'Version', maxLength: 20 }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'quote',
        },
    ],
})
