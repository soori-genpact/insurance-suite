import { Table, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_coverage_exclusion = Table({
    name: 'x_gegis_ins_policy_coverage_exclusion',
    label: 'Coverage Exclusion',
    schema: {
        coverage: ReferenceColumn({
            label: 'Coverage',
            referenceTable: 'x_gegis_ins_policy_coverage',
            mandatory: true,
        }),
        exclusion: ReferenceColumn({
            label: 'Exclusion',
            referenceTable: 'x_gegis_ins_policy_exclusion',
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
            element: 'coverage',
        },
        {
            name: 'index2',
            unique: false,
            element: 'exclusion',
        },
    ],
})
