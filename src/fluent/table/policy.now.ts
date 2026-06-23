import { Table, StringColumn, ReferenceColumn, DateColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_policy = Table({
    name: 'x_gegis_ins_policy_policy',
    label: 'Policy',
    autoNumber: { prefix: 'POL', number: 1000 },
    schema: {
        policy_number: StringColumn({ label: 'Policy number', maxLength: 40, mandatory: true, unique: true }),
        insured: ReferenceColumn({
            label: 'Insured',
            referenceTable: 'x_gegis_ins_policy_party',
            mandatory: true,
        }),
        quote: ReferenceColumn({
            label: 'Quote',
            referenceTable: 'x_gegis_ins_policy_quote',
        }),
        quote_option: ReferenceColumn({
            label: 'Quote option',
            referenceTable: 'x_gegis_ins_policy_quote_option',
        }),
        product: ReferenceColumn({
            label: 'Product',
            referenceTable: 'x_gegis_ins_policy_product',
        }),
        effective_date: DateColumn({ label: 'Effective date', mandatory: true }),
        expiry_date: DateColumn({ label: 'Expiry date', mandatory: true }),
        status: StringColumn({
            label: 'Status',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                active: { label: 'Active', sequence: 0 },
                bound: { label: 'Bound', sequence: 1 },
                in_force: { label: 'In-Force', sequence: 2 },
                cancelled: { label: 'Cancelled', sequence: 3 },
                expired: { label: 'Expired', sequence: 4 },
                non_renewed: { label: 'Non-Renewed', sequence: 5 },
            },
        }),
        line_of_business: StringColumn({
            label: 'Line of business',
            dropdown: 'dropdown_with_none',
            choices: {
                property: {
                    label: 'Property',
                    sequence: 0,
                },
                workers_comp: {
                    label: 'Workers Comp',
                    sequence: 1,
                },
                auto: {
                    label: 'Auto',
                    sequence: 2,
                },
                motor: {
                    label: 'Motor',
                    sequence: 3,
                },
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
    index: [
        {
            name: 'index',
            unique: false,
            element: 'broker',
        },
        {
            name: 'index2',
            unique: false,
            element: 'insured',
        },
        {
            name: 'index3',
            unique: false,
            element: 'originating_qnb_case',
        },
        {
            name: 'index4',
            unique: false,
            element: 'originating_submission',
        },
        {
            name: 'index5',
            unique: true,
            element: 'policy_number',
        },
        {
            name: 'index6',
            unique: false,
            element: 'product',
        },
        {
            name: 'index7',
            unique: false,
            element: 'quote',
        },
        {
            name: 'index8',
            unique: false,
            element: 'quote_option',
        },
        {
            name: 'index9',
            unique: false,
            element: 'renewed_from',
        },
    ],
})
