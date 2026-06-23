import { Table, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_coverage_condition = Table({
    name: 'x_gegis_ins_policy_coverage_condition',
    label: 'Coverage Condition',
    schema: {
        coverage: ReferenceColumn({
            label: 'Coverage',
            referenceTable: 'x_gegis_ins_policy_coverage',
            mandatory: true,
        }),
        condition: ReferenceColumn({
            label: 'Condition',
            referenceTable: 'x_gegis_ins_policy_condition',
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
            element: 'condition',
        },
        {
            name: 'index2',
            unique: false,
            element: 'coverage',
        },
    ],
})
