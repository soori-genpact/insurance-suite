import { Table, StringColumn, ReferenceColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_rate_factor_entry = Table({
    name: 'x_gegis_ins_policy_rate_factor_entry',
    label: 'Rate Factor Entry',
    schema: {
        rate_factor: ReferenceColumn({
            label: 'Rate factor',
            referenceTable: 'x_gegis_ins_policy_rate_factor',
            mandatory: true,
        }),
        condition_label: StringColumn({
            label: 'Condition label',
            mandatory: true,
            maxLength: 200,
        }),
        condition_value: DecimalColumn({
            label: 'Condition value',
            mandatory: true,
        }),
        multiplier: DecimalColumn({
            label: 'Multiplier',
            mandatory: true,
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'rate_factor',
        },
    ],
})
