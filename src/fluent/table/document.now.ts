import { Table, StringColumn, ReferenceColumn, DateTimeColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_document = Table({
    name: 'x_gegis_ins_policy_document',
    label: 'Document',
    schema: {
        submission: ReferenceColumn({
            label: 'Submission',
            referenceTable: 'x_gegis_ins_policy_submission',
            mandatory: true,
        }),
        scope: StringColumn({
            label: 'Scope',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                common: { label: 'Common', sequence: 0 },
                clearance: { label: 'Clearance', sequence: 1 },
                exposure: { label: 'Exposure', sequence: 2 },
                risk: { label: 'Risk', sequence: 3 },
                quote_and_bind: { label: 'Quote & Bind', sequence: 4 },
            },
        }),
        document_type: StringColumn({
            label: 'Document type',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                slip: { label: 'Slip', sequence: 0 },
                sov: { label: 'SOV', sequence: 1 },
                acord: { label: 'ACORD', sequence: 2 },
                loss_run: { label: 'Loss Run', sequence: 3 },
                survey_report: { label: 'Survey Report', sequence: 4 },
                broker_email: { label: 'Broker Email', sequence: 5 },
                financial_statement: { label: 'Financial Statement', sequence: 6 },
                inspection_report: { label: 'Inspection Report', sequence: 7 },
                quote_letter: { label: 'Quote Letter', sequence: 8 },
                binder: { label: 'Binder', sequence: 9 },
                ofac_report: { label: 'OFAC Report', sequence: 10 },
                other: { label: 'Other', sequence: 11 },
            },
        }),
        document_name: StringColumn({ label: 'Document name', maxLength: 200 }),
        received_date: DateTimeColumn({ label: 'Received date' }),
        file_type: StringColumn({
            label: 'File type',
            dropdown: 'dropdown_with_none',
            choices: {
                pdf: { label: 'PDF', sequence: 0 },
                excel: { label: 'Excel', sequence: 1 },
                word: { label: 'Word', sequence: 2 },
                image: { label: 'Image', sequence: 3 },
                email: { label: 'Email', sequence: 4 },
                csv: { label: 'CSV', sequence: 5 },
                other: { label: 'Other', sequence: 6 },
            },
        }),
        file_size_kb: IntegerColumn({ label: 'File size (KB)' }),
        page_count: IntegerColumn({ label: 'Page count' }),
        uploaded_by: ReferenceColumn({ label: 'Uploaded by', referenceTable: 'sys_user' }),
        uploaded_date: DateTimeColumn({ label: 'Uploaded date' }),
        version: StringColumn({ label: 'Version', maxLength: 20 }),
        status: StringColumn({
            label: 'Status',
            dropdown: 'dropdown_with_none',
            choices: {
                draft: { label: 'Draft', sequence: 0 },
                final: { label: 'Final', sequence: 1 },
                superseded: { label: 'Superseded', sequence: 2 },
            },
        }),
        confidentiality: StringColumn({
            label: 'Confidentiality',
            dropdown: 'dropdown_with_none',
            choices: {
                public_access: { label: 'Public', sequence: 0 },
                internal: { label: 'Internal', sequence: 1 },
                confidential: { label: 'Confidential', sequence: 2 },
                restricted: { label: 'Restricted', sequence: 3 },
            },
        }),
        notes: StringColumn({ label: 'Notes', maxLength: 2000 }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'submission',
        },
        {
            name: 'index2',
            unique: false,
            element: 'uploaded_by',
        },
    ],
})
