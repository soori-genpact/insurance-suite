import { Table, StringColumn, ReferenceColumn, OverrideColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_qnb_case = Table({
    name: 'x_gegis_ins_policy_qnb_case',
    label: 'Q&B Case',
    extends: 'task',
    autoNumber: { prefix: 'QNB', number: 1000 },
    schema: {
        number: OverrideColumn({ baseTable: 'task' }),
        submission: ReferenceColumn({
            label: 'Submission',
            referenceTable: 'x_gegis_ins_policy_submission',
            mandatory: true,
        }),
        qnb_status: StringColumn({
            label: 'Q&B status',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                draft: { label: 'Draft', sequence: 0 },
                quoting: { label: 'Quoting', sequence: 1 },
                quoted: { label: 'Quoted', sequence: 2 },
                negotiating: { label: 'Negotiating', sequence: 3 },
                binding: { label: 'Binding', sequence: 4 },
                bound: { label: 'Bound', sequence: 5 },
                declined: { label: 'Declined', sequence: 6 },
                ntu: { label: 'NTU', sequence: 7 },
            },
        }),
        underwriter: ReferenceColumn({ label: 'Underwriter', referenceTable: 'sys_user' }),
        resulting_policy: ReferenceColumn({
            label: 'Resulting policy',
            referenceTable: 'x_gegis_ins_policy_policy',
        }),
        notes: StringColumn({ label: 'Notes', maxLength: 4000 }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
