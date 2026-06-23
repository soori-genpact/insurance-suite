import { Table, StringColumn, ReferenceColumn, DecimalColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_policy_coverage = Table({
    name: 'x_gegis_ins_policy_policy_coverage',
    label: 'Policy Coverage',
    schema: {
        policy: ReferenceColumn({
            label: 'Policy',
            referenceTable: 'x_gegis_ins_policy_policy',
            mandatory: true,
        }),
        policy_risk: ReferenceColumn({
            label: 'Policy risk',
            referenceTable: 'x_gegis_ins_policy_policy_risk',
            mandatory: true,
        }),
        coverage: ReferenceColumn({
            label: 'Coverage',
            referenceTable: 'x_gegis_ins_policy_coverage',
            mandatory: true,
        }),
        coverage_premium: DecimalColumn({
            label: 'Coverage premium',
        }),
        mandatory: BooleanColumn({
            label: 'Mandatory',
        }),
        status: StringColumn({
            label: 'Status',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                active: { label: 'Active', sequence: 0 },
                cancelled: { label: 'Cancelled', sequence: 1 },
                expired: { label: 'Expired', sequence: 2 },
            },
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
            element: 'policy',
        },
        {
            name: 'index3',
            unique: false,
            element: 'policy_risk',
        },
    ],
})
