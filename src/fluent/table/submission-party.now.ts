import { Table, StringColumn, ReferenceColumn, IntegerColumn, DecimalColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_submission_party = Table({
    name: 'x_gegis_ins_policy_submission_party',
    label: 'Submission Party',
    schema: {
        submission: ReferenceColumn({
            label: 'Submission',
            referenceTable: 'x_gegis_ins_policy_submission',
            mandatory: true,
        }),
        organization: ReferenceColumn({
            label: 'Organization',
            referenceTable: 'x_gegis_ins_policy_party',
            mandatory: true,
        }),
        role: StringColumn({
            label: 'Role',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                primary_insured: { label: 'Primary Insured', sequence: 0 },
                co_applicant: { label: 'Co-Applicant', sequence: 1 },
                co_insured: { label: 'Co-Insured', sequence: 2 },
                subsidiary: { label: 'Subsidiary', sequence: 3 },
                additional_insured: { label: 'Additional Insured', sequence: 4 },
                broker: { label: 'Broker', sequence: 5 },
                co_broker: { label: 'Co-Broker', sequence: 6 },
                leader: { label: 'Leader', sequence: 7 },
                reinsurer: { label: 'Reinsurer', sequence: 8 },
                other: { label: 'Other', sequence: 9 },
            },
        }),
        relationship_to_primary: StringColumn({
            label: 'Relationship to primary',
            dropdown: 'dropdown_with_none',
            choices: {
                parent: { label: 'Parent', sequence: 0 },
                subsidiary: { label: 'Subsidiary', sequence: 1 },
                affiliate: { label: 'Affiliate', sequence: 2 },
                joint_venture: { label: 'Joint Venture', sequence: 3 },
                none: { label: 'None', sequence: 4 },
            },
        }),
        parent_organization: ReferenceColumn({
            label: 'Parent organization',
            referenceTable: 'x_gegis_ins_policy_party',
        }),
        ownership_percent: DecimalColumn({ label: 'Ownership %' }),
        is_primary: BooleanColumn({ label: 'Is primary' }),
        sequence: IntegerColumn({ label: 'Sequence' }),
        contact_name: StringColumn({ label: 'Contact name', maxLength: 200 }),
        contact_phone: StringColumn({ label: 'Contact phone', maxLength: 50 }),
        contact_email: StringColumn({ label: 'Contact email', maxLength: 200 }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'organization',
        },
        {
            name: 'index2',
            unique: false,
            element: 'parent_organization',
        },
        {
            name: 'index3',
            unique: false,
            element: 'submission',
        },
    ],
})
