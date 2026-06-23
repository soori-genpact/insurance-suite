import {
    Table,
    StringColumn,
    ReferenceColumn,
    DateColumn,
    DecimalColumn,
    MultiLineTextColumn,
} from '@servicenow/sdk/core'

export const x_gegis_ins_policy_policy_transaction = Table({
    name: 'x_gegis_ins_policy_policy_transaction',
    label: 'Policy Transaction',
    schema: {
        policy: ReferenceColumn({
            label: 'Policy',
            referenceTable: 'x_gegis_ins_policy_policy',
            mandatory: true,
        }),
        type: StringColumn({
            label: 'Type',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                new_business: { label: 'New Business', sequence: 0 },
                renewal: { label: 'Renewal', sequence: 1 },
                endorsement: { label: 'Endorsement', sequence: 2 },
                cancellation: { label: 'Cancellation', sequence: 3 },
                reinstatement: { label: 'Reinstatement', sequence: 4 },
            },
        }),
        effective_date: DateColumn({
            label: 'Effective date',
            mandatory: true,
        }),
        description: MultiLineTextColumn({
            label: 'Description',
            maxLength: 2000,
        }),
        premium_delta: DecimalColumn({
            label: 'Premium delta',
        }),
        status: StringColumn({
            label: 'Status',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                draft: { label: 'Draft', sequence: 0 },
                pending_approval: { label: 'Pending Approval', sequence: 1 },
                approved: { label: 'Approved', sequence: 2 },
                completed: { label: 'Completed', sequence: 3 },
                rejected: { label: 'Rejected', sequence: 4 },
                voided: { label: 'Voided', sequence: 5 },
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
            element: 'policy',
        },
    ],
})
