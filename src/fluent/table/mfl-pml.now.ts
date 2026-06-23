import { Table, StringColumn, ReferenceColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_mfl_pml = Table({
    name: 'x_gegis_ins_policy_mfl_pml',
    label: 'MFL / PML',
    schema: {
        risk_case: ReferenceColumn({
            label: 'Risk case',
            referenceTable: 'x_gegis_ins_policy_risk_case',
            mandatory: true,
            unique: true,
        }),
        amount_of_mfl: DecimalColumn({ label: 'MFL amount' }),
        amount_of_pml: DecimalColumn({ label: 'PML amount' }),
        mfl_pml_scenario: StringColumn({ label: 'Scenario', maxLength: 2000 }),
        mfl_or_pml: StringColumn({
            label: 'MFL or PML',
            dropdown: 'dropdown_with_none',
            choices: {
                mfl: { label: 'MFL', sequence: 0 },
                pml: { label: 'PML', sequence: 1 },
                both: { label: 'Both', sequence: 2 },
            },
        }),
        original_currency: StringColumn({
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
        percent_of_tiv: DecimalColumn({ label: '% of TIV' }),
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
