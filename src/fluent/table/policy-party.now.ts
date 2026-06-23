import { Table, StringColumn, ReferenceColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_policy_party = Table({
    name: 'x_gegis_ins_policy_policy_party',
    label: 'Policy Party',
    schema: {
        policy: ReferenceColumn({
            label: 'Policy',
            referenceTable: 'x_gegis_ins_policy_policy',
            mandatory: true,
        }),
        account: ReferenceColumn({
            label: 'Account',
            referenceTable: 'x_gegis_ins_policy_party',
            mandatory: true,
        }),
        party_role: StringColumn({
            label: 'Party role',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                policyholder: { label: 'Policyholder', sequence: 0 },
                loss_payee: { label: 'Loss Payee', sequence: 1 },
                broker: { label: 'Broker', sequence: 2 },
                named_insured: { label: 'Named Insured', sequence: 3 },
                additional_insured: { label: 'Additional Insured', sequence: 4 },
            },
        }),
        is_primary: BooleanColumn({
            label: 'Is primary',
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'account',
        },
        {
            name: 'index2',
            unique: false,
            element: 'policy',
        },
    ],
})
