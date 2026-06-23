import { Table, StringColumn, DateTimeColumn, ListColumn, MultiLineTextColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_product = Table({
    name: 'x_gegis_ins_policy_product',
    label: 'Product',
    schema: {
        product_name: StringColumn({
            label: 'Product name',
            mandatory: true,
            maxLength: 200,
        }),
        product_code: StringColumn({
            label: 'Product code',
            mandatory: true,
            maxLength: 100,
        }),
        line_of_business: StringColumn({
            label: 'Line of business',
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
        effective_date: DateTimeColumn({
            label: 'Effective date',
            mandatory: true,
        }),
        expiration_date: DateTimeColumn({
            label: 'Expiration date',
            mandatory: true,
        }),
        applicable_states: ListColumn({
            label: 'Applicable states',
        }),
        status: StringColumn({
            label: 'Status',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                draft: { label: 'Draft', sequence: 0 },
                published: { label: 'Published', sequence: 1 },
                archived: { label: 'Archived', sequence: 2 },
            },
        }),
        description: MultiLineTextColumn({
            label: 'Description',
            maxLength: 2000,
        }),
        version: StringColumn({
            label: 'Version',
            maxLength: 20,
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
