import { Table, StringColumn, MultiLineTextColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_condition = Table({
    name: 'x_gegis_ins_policy_condition',
    label: 'Condition',
    schema: {
        name: StringColumn({
            label: 'Name',
            mandatory: true,
            maxLength: 200,
        }),
        code: StringColumn({
            label: 'Code',
            mandatory: true,
            maxLength: 20,
            unique: true,
        }),
        description: MultiLineTextColumn({
            label: 'Description',
            maxLength: 2000,
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: true,
            element: 'code',
        },
    ],
})
