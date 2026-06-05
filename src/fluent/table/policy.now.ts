import { Table, StringColumn, ReferenceColumn, DateColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_policy = Table({
    name: 'x_gegis_ins_policy_policy',
    label: 'Policy',
    schema: {
        policy_number: StringColumn({ label: 'Policy number', maxLength: 40, mandatory: true, unique: true }),
        insured: ReferenceColumn({
            label: 'Insured',
            referenceTable: 'x_gegis_ins_policy_party',
            mandatory: true,
        }),
        effective_date: DateColumn({ label: 'Effective date', mandatory: true }),
        expiry_date: DateColumn({ label: 'Expiry date', mandatory: true }),
        status: StringColumn({
            label: 'Status',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                bound: { label: 'Bound', sequence: 0 },
                in_force: { label: 'In-Force', sequence: 1 },
                cancelled: { label: 'Cancelled', sequence: 2 },
                expired: { label: 'Expired', sequence: 3 },
                non_renewed: { label: 'Non-Renewed', sequence: 4 },
            },
        }),
        line_of_business: StringColumn({
            label: 'Lines',
            dropdown: 'dropdown_with_none',
            choices: {
                property: { label: 'Property', sequence: 0 },
                workers_comp: { label: 'Workers Comp', sequence: 1 },
                auto: { label: 'Auto', sequence: 2 },
            },
        }),
        total_premium: DecimalColumn({ label: 'Total premium' }),
        currency: StringColumn({
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
        originating_qnb_case: ReferenceColumn({
            label: 'Originating Q&B',
            referenceTable: 'x_gegis_ins_policy_qnb_case',
        }),
        originating_submission: ReferenceColumn({
            label: 'Originating submission',
            referenceTable: 'x_gegis_ins_policy_submission',
        }),
        renewed_from: ReferenceColumn({
            label: 'Renewed from',
            referenceTable: 'x_gegis_ins_policy_policy',
        }),
        broker: ReferenceColumn({
            label: 'Broker',
            referenceTable: 'x_gegis_ins_policy_party',
        }),
        territory: StringColumn({
            label: 'Territory',
            dropdown: 'dropdown_with_none',
            choices: {
                us: { label: 'US', sequence: 0 },
                uk: { label: 'UK', sequence: 1 },
                eu: { label: 'EU', sequence: 2 },
                apac: { label: 'APAC', sequence: 3 },
                global: { label: 'Global', sequence: 4 },
            },
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
