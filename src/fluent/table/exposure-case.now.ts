import { Table, StringColumn, ReferenceColumn, DecimalColumn, OverrideColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_exposure_case = Table({
    name: 'x_gegis_ins_policy_exposure_case',
    label: 'Exposure Case',
    extends: 'task',
    autoNumber: { prefix: 'EXP', number: 1000 },
    schema: {
        number: OverrideColumn({ baseTable: 'task' }),
        submission: ReferenceColumn({
            label: 'Submission',
            referenceTable: 'x_gegis_ins_policy_submission',
            mandatory: true,
        }),
        exposure_status: StringColumn({
            label: 'Exposure status',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                pending: { label: 'Pending', sequence: 0 },
                data_entry: { label: 'Data Entry', sequence: 1 },
                in_review: { label: 'In Review', sequence: 2 },
                complete: { label: 'Complete', sequence: 3 },
            },
        }),
        total_tiv: DecimalColumn({ label: 'Total TIV' }),
        notes: StringColumn({ label: 'Notes', maxLength: 4000 }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
