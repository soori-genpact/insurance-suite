import { Table, StringColumn, ReferenceColumn, IntegerColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_extraction_field = Table({
    name: 'x_gegis_ins_policy_extraction_field',
    label: 'Extraction Field',
    schema: {
        extraction: ReferenceColumn({
            label: 'Extraction',
            referenceTable: 'x_gegis_ins_policy_extraction',
            mandatory: true,
        }),
        field_path: StringColumn({ label: 'Field path (OGNL)', maxLength: 300, mandatory: true }),
        extracted_value: StringColumn({ label: 'Extracted value', maxLength: 2000 }),
        mapped_value: StringColumn({ label: 'Mapped value', maxLength: 2000 }),
        target_table: StringColumn({ label: 'Target table', maxLength: 100 }),
        target_column: StringColumn({ label: 'Target column', maxLength: 100 }),
        confidence: DecimalColumn({ label: 'Confidence' }),
        review_status: StringColumn({
            label: 'Review status',
            dropdown: 'dropdown_with_none',
            choices: {
                auto_accepted: { label: 'Auto-Accepted', sequence: 0 },
                needs_review: { label: 'Needs Review', sequence: 1 },
                corrected: { label: 'Corrected', sequence: 2 },
                rejected: { label: 'Rejected', sequence: 3 },
            },
        }),
        reviewed_by: ReferenceColumn({ label: 'Reviewed by', referenceTable: 'sys_user' }),
        page_number: IntegerColumn({ label: 'Page number' }),
        bounding_box: StringColumn({ label: 'Bounding box', maxLength: 100 }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'extraction',
        },
        {
            name: 'index2',
            unique: false,
            element: 'reviewed_by',
        },
    ],
})
