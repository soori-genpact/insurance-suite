import { Table, StringColumn, ReferenceColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_policy_coverage_term = Table({
    name: 'x_gegis_ins_policy_policy_coverage_term',
    label: 'Policy Coverage Term',
    schema: {
        policy_coverage: ReferenceColumn({
            label: 'Policy coverage',
            referenceTable: 'x_gegis_ins_policy_policy_coverage',
            mandatory: true,
        }),
        term_name: StringColumn({
            label: 'Term name',
            mandatory: true,
            maxLength: 200,
        }),
        term_type: StringColumn({
            label: 'Term type',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                limit: { label: 'Limit', sequence: 0 },
                deductible: { label: 'Deductible', sequence: 1 },
                sublimit: { label: 'Sublimit', sequence: 2 },
                waiting_period: { label: 'Waiting Period', sequence: 3 },
                coinsurance: { label: 'Coinsurance', sequence: 4 },
            },
        }),
        selected_label: StringColumn({
            label: 'Selected label',
            maxLength: 200,
        }),
        selected_value: DecimalColumn({
            label: 'Selected value',
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'policy_coverage',
        },
    ],
})
