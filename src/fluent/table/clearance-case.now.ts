import { Table, StringColumn, ReferenceColumn, DateTimeColumn, OverrideColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_clearance_case = Table({
    name: 'x_gegis_ins_policy_clearance_case',
    label: 'Clearance Case',
    extends: 'task',
    autoNumber: { prefix: 'CLR', number: 1000 },
    schema: {
        number: OverrideColumn({ baseTable: 'task' }),
        submission: ReferenceColumn({
            label: 'Submission',
            referenceTable: 'x_gegis_ins_policy_submission',
            mandatory: true,
        }),
        clearance_status: StringColumn({
            label: 'Clearance status',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                pending: { label: 'Pending', sequence: 0 },
                in_progress: { label: 'In Progress', sequence: 1 },
                cleared: { label: 'Cleared', sequence: 2 },
                conditionally_cleared: { label: 'Conditionally Cleared', sequence: 3 },
                blocked: { label: 'Blocked', sequence: 4 },
                failed: { label: 'Failed', sequence: 5 },
            },
        }),
        cleared_by: ReferenceColumn({ label: 'Cleared by', referenceTable: 'sys_user' }),
        cleared_date: DateTimeColumn({ label: 'Cleared date' }),
        overall_notes: StringColumn({ label: 'Notes', maxLength: 4000 }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
