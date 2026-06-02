import { Table, ReferenceColumn, StringColumn, UrlColumn, OverrideColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_ai_task = Table({
    name: 'x_gegis_ins_policy_ai_task',
    label: 'AI Extraction Task',
    extends: 'task',
    autoNumber: { prefix: 'AIT', number: 1000 },
    schema: {
        intake_case: ReferenceColumn({ label: 'Intake Case', referenceTable: 'x_gegis_ins_policy_intake_case' }),
        error_message: StringColumn({ label: 'Error Message', maxLength: 500 }),
        document_name: StringColumn({ label: 'Document Name', maxLength: 255 }),
        blob_url: UrlColumn({ label: 'Document Blob URL' }),
        assignment_group: OverrideColumn({
            baseTable: 'task',
            referenceQualifier: 'active=true',
        }),
        assigned_to: OverrideColumn({
            baseTable: 'task',
            referenceQualifier: 'active=true',
        }),
        number: OverrideColumn({
            baseTable: 'task',
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
