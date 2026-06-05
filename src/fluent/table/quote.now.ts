import { Table, StringColumn, ReferenceColumn, DateColumn, IntegerColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_quote = Table({
    name: 'x_gegis_ins_policy_quote',
    label: 'Quote',
    autoNumber: { prefix: 'QUO', number: 1000 },
    schema: {
        qnb_case: ReferenceColumn({
            label: 'Q&B case',
            referenceTable: 'x_gegis_ins_policy_qnb_case',
            mandatory: true,
        }),
        quote_number: StringColumn({ label: 'Quote number', maxLength: 20, mandatory: true, unique: true }),
        version: IntegerColumn({ label: 'Version' }),
        status: StringColumn({
            label: 'Status',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                draft: { label: 'Draft', sequence: 0 },
                issued: { label: 'Issued', sequence: 1 },
                accepted: { label: 'Accepted', sequence: 2 },
                declined: { label: 'Declined', sequence: 3 },
                expired: { label: 'Expired', sequence: 4 },
            },
        }),
        valid_until: DateColumn({ label: 'Valid until' }),
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
        terms_conditions: StringColumn({ label: 'Terms & conditions', maxLength: 4000 }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
