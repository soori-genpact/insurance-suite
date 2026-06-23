import { Table, StringColumn, ReferenceColumn, DateTimeColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_extraction = Table({
    name: 'x_gegis_ins_policy_extraction',
    label: 'Extraction',
    schema: {
        document: ReferenceColumn({
            label: 'Document',
            referenceTable: 'x_gegis_ins_policy_document',
            mandatory: true,
        }),
        submission: ReferenceColumn({
            label: 'Submission',
            referenceTable: 'x_gegis_ins_policy_submission',
            mandatory: true,
        }),
        extraction_status: StringColumn({
            label: 'Extraction status',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                pending: { label: 'Pending', sequence: 0 },
                extracted: { label: 'Extracted', sequence: 1 },
                reviewed: { label: 'Reviewed', sequence: 2 },
                failed: { label: 'Failed', sequence: 3 },
            },
        }),
        extraction_method: StringColumn({
            label: 'Extraction method',
            dropdown: 'dropdown_with_none',
            choices: {
                ocr: { label: 'OCR', sequence: 0 },
                ai: { label: 'AI', sequence: 1 },
                manual: { label: 'Manual', sequence: 2 },
                hybrid: { label: 'Hybrid', sequence: 3 },
            },
        }),
        confidence_overall: DecimalColumn({ label: 'Overall confidence' }),
        extracted_date: DateTimeColumn({ label: 'Extracted date' }),
        model_version: StringColumn({ label: 'Model version', maxLength: 50 }),
        version: StringColumn({ label: 'Version', maxLength: 20 }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'document',
        },
        {
            name: 'index2',
            unique: false,
            element: 'submission',
        },
    ],
})
