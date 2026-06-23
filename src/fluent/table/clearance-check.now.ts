import {
    Table,
    StringColumn,
    ReferenceColumn,
    DateTimeColumn,
    DecimalColumn,
    DocumentIdColumn,
} from '@servicenow/sdk/core'

export const x_gegis_ins_policy_clearance_check = Table({
    name: 'x_gegis_ins_policy_clearance_check',
    label: 'Clearance Check',
    schema: {
        clearance_case: ReferenceColumn({
            label: 'Clearance case',
            referenceTable: 'x_gegis_ins_policy_clearance_case',
            mandatory: true,
        }),
        check_type: StringColumn({
            label: 'Check type',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                insured_verification: { label: 'Insured Verification', sequence: 0 },
                duplicate_submission: { label: 'Duplicate Submission', sequence: 1 },
                sanctions: { label: 'Sanctions', sequence: 2 },
                existing_policy: { label: 'Existing Policy', sequence: 3 },
                data_validation: { label: 'Data Validation', sequence: 4 },
            },
        }),
        status: StringColumn({
            label: 'Status',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                not_started: { label: 'Not Started', sequence: 0 },
                in_progress: { label: 'In Progress', sequence: 1 },
                pass: { label: 'Pass', sequence: 2 },
                fail: { label: 'Fail', sequence: 3 },
                warning: { label: 'Warning', sequence: 4 },
                manual_review: { label: 'Manual Review', sequence: 5 },
            },
        }),
        method: StringColumn({
            label: 'Method',
            dropdown: 'dropdown_with_none',
            choices: {
                automated: { label: 'Automated', sequence: 0 },
                ai: { label: 'AI', sequence: 1 },
                manual: { label: 'Manual', sequence: 2 },
            },
        }),
        confidence: DecimalColumn({ label: 'Confidence' }),
        result_summary: StringColumn({ label: 'Result summary', maxLength: 4000 }),
        related_record: DocumentIdColumn({ label: 'Related record' }),
        disposition: StringColumn({
            label: 'Disposition',
            dropdown: 'dropdown_with_none',
            choices: {
                clear: { label: 'Clear', sequence: 0 },
                escalated: { label: 'Escalated', sequence: 1 },
                false_positive: { label: 'False Positive', sequence: 2 },
                confirmed_hit: { label: 'Confirmed Hit', sequence: 3 },
                not_applicable: { label: 'Not Applicable', sequence: 4 },
            },
        }),
        reviewed_by: ReferenceColumn({ label: 'Reviewed by', referenceTable: 'sys_user' }),
        reviewed_date: DateTimeColumn({ label: 'Reviewed date' }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'clearance_case',
        },
        {
            name: 'index2',
            unique: false,
            element: 'related_record',
        },
        {
            name: 'index3',
            unique: false,
            element: 'reviewed_by',
        },
    ],
})
