import { Table, StringColumn, ReferenceColumn, DateColumn, DateTimeColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_submission = Table({
    name: 'x_gegis_ins_policy_submission',
    label: 'Submission',
    autoNumber: { prefix: 'SUB', number: 1000 },
    schema: {
        received_date: DateTimeColumn({ label: 'Received date', mandatory: true }),
        transaction_type: StringColumn({
            label: 'Transaction type',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                new: { label: 'New', sequence: 0 },
                renewal: { label: 'Renewal', sequence: 1 },
                endorsement: { label: 'Endorsement', sequence: 2 },
            },
        }),
        line_of_business: StringColumn({
            label: 'Lines in scope',
            mandatory: true,
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
        source_channel: StringColumn({
            label: 'Source channel',
            dropdown: 'dropdown_with_none',
            choices: {
                email: { label: 'Email', sequence: 0 },
                portal: { label: 'Portal', sequence: 1 },
                api: { label: 'API', sequence: 2 },
                broker_upload: { label: 'Broker Upload', sequence: 3 },
            },
        }),
        policy_effective_date: DateColumn({ label: 'Policy effective date', mandatory: true }),
        policy_expiry_date: DateColumn({ label: 'Policy expiry date', mandatory: true }),
        policy_territory: StringColumn({
            label: 'Policy territory',
            dropdown: 'dropdown_with_none',
            choices: {
                us: { label: 'US', sequence: 0 },
                uk: { label: 'UK', sequence: 1 },
                eu: { label: 'EU', sequence: 2 },
                apac: { label: 'APAC', sequence: 3 },
                global: { label: 'Global', sequence: 4 },
            },
        }),
        policy_currency: StringColumn({
            label: 'Policy currency',
            mandatory: true,
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
        predominant_state: StringColumn({ label: 'Predominant state', maxLength: 50 }),
        billing_type: StringColumn({
            label: 'Billing type',
            dropdown: 'dropdown_with_none',
            choices: {
                agency_bill: { label: 'Agency Bill', sequence: 0 },
                direct_bill: { label: 'Direct Bill', sequence: 1 },
            },
        }),
        no_of_installments: IntegerColumn({ label: 'No. of installments' }),
        number_of_locations: IntegerColumn({ label: 'Number of locations' }),
        nature_of_business: StringColumn({ label: 'Nature of business', maxLength: 500 }),
        existing_policy: ReferenceColumn({
            label: 'Existing policy',
            referenceTable: 'x_gegis_ins_policy_policy',
        }),
        overall_status: StringColumn({
            label: 'Overall status',
            dropdown: 'dropdown_with_none',
            choices: {
                open: { label: 'Open', sequence: 0 },
                in_progress: { label: 'In Progress', sequence: 1 },
                cleared: { label: 'Cleared', sequence: 2 },
                quoted: { label: 'Quoted', sequence: 3 },
                bound: { label: 'Bound', sequence: 4 },
                declined: { label: 'Declined', sequence: 5 },
                lapsed: { label: 'Lapsed', sequence: 6 },
            },
        }),
        primary_insured: ReferenceColumn({
            label: 'Primary insured',
            referenceTable: 'x_gegis_ins_policy_party',
            mandatory: true,
        }),
        primary_broker: ReferenceColumn({
            label: 'Primary broker',
            referenceTable: 'x_gegis_ins_policy_party',
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'existing_policy',
        },
        {
            name: 'index2',
            unique: false,
            element: 'primary_broker',
        },
        {
            name: 'index3',
            unique: false,
            element: 'primary_insured',
        },
    ],
})
