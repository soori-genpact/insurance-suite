import { Table, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_top_risk = Table({
    name: 'x_gegis_ins_policy_top_risk',
    label: 'Top Risk',
    schema: {
        risk_case: ReferenceColumn({
            label: 'Risk case',
            referenceTable: 'x_gegis_ins_policy_risk_case',
            mandatory: true,
        }),
        risk_description: StringColumn({ label: 'Risk description', maxLength: 500 }),
        new_renewal_currency: StringColumn({
            label: 'Currency',
            dropdown: 'dropdown_with_none',
            choices: {
                usd: { label: 'USD', sequence: 0 },
                gbp: { label: 'GBP', sequence: 1 },
                eur: { label: 'EUR', sequence: 2 },
                cad: { label: 'CAD', sequence: 3 },
                aud: { label: 'AUD', sequence: 4 },
                jpy: { label: 'JPY', sequence: 5 },
                chf: { label: 'CHF', sequence: 6 },
            },
        }),
        impact: StringColumn({
            label: 'Impact',
            dropdown: 'dropdown_with_none',
            choices: {
                low: { label: 'Low', sequence: 0 },
                medium: { label: 'Medium', sequence: 1 },
                high: { label: 'High', sequence: 2 },
                critical: { label: 'Critical', sequence: 3 },
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
            element: 'risk_case',
        },
    ],
})
