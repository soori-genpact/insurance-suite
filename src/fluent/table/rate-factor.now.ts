import { Table, StringColumn, MultiLineTextColumn } from '@servicenow/sdk/core'
import { LOB_CHOICES } from './choices'

export const x_gegis_ins_policy_rate_factor = Table({
    name: 'x_gegis_ins_policy_rate_factor',
    label: 'Rate Factor',
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
        lob: StringColumn({
            label: 'LOB',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: LOB_CHOICES,
        }),
        factor_type: StringColumn({
            label: 'Factor type',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                discount:   { label: 'Discount',   sequence: 0 },
                loading:    { label: 'Loading',    sequence: 1 },
                multiplier: { label: 'Multiplier', sequence: 2 },
            },
        }),
        applies_to: StringColumn({
            label: 'Applies to',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                policy:   { label: 'Policy',   sequence: 0 },
                risk:     { label: 'Risk',     sequence: 1 },
                coverage: { label: 'Coverage', sequence: 2 },
            },
        }),
        description: MultiLineTextColumn({
            label: 'Description',
            maxLength: 2000,
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
