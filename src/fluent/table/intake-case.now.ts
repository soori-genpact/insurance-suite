import { Table, StringColumn, ReferenceColumn, OverrideColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_intake_case = Table({
    name: 'x_gegis_ins_policy_intake_case',
    label: 'Intake Case',
    extends: 'task',
    autoNumber: { prefix: 'INK', number: 1000 },
    schema: {
        number: OverrideColumn({ baseTable: 'task' }),
        sender: StringColumn({ label: 'Sender', maxLength: 200 }),
        sender_email: StringColumn({ label: 'Sender email', maxLength: 200 }),
        recipient: StringColumn({ label: 'Recipient', maxLength: 200 }),
        subject: StringColumn({ label: 'Subject', maxLength: 500 }),
        body: StringColumn({ label: 'Body', maxLength: 4000 }),
        channel: StringColumn({
            label: 'Channel',
            dropdown: 'dropdown_with_none',
            choices: {
                email: { label: 'Email', sequence: 0 },
                portal: { label: 'Portal', sequence: 1 },
                api: { label: 'API', sequence: 2 },
                fax: { label: 'Fax', sequence: 3 },
                manual: { label: 'Manual', sequence: 4 },
            },
        }),
        intake_status: StringColumn({
            label: 'Intake status',
            dropdown: 'dropdown_with_none',
            choices: {
                'new': { label: 'New', sequence: 0 },
                processing: { label: 'Processing', sequence: 1 },
                processed: { label: 'Processed', sequence: 2 },
                failed: { label: 'Failed', sequence: 3 },
                needs_review: { label: 'Needs Review', sequence: 4 },
            },
        }),
        linked_submission: ReferenceColumn({
            label: 'Linked submission',
            referenceTable: 'x_gegis_ins_policy_submission',
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
