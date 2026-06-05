import { Table, StringColumn, DocumentIdColumn, OverrideColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_case_task = Table({
    name: 'x_gegis_ins_policy_case_task',
    label: 'Case Task',
    extends: 'task',
    autoNumber: { prefix: 'TSK', number: 1000 },
    schema: {
        number: OverrideColumn({ baseTable: 'task' }),
        category: StringColumn({
            label: 'Category',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                clearance: { label: 'Clearance', sequence: 0 },
                exposure: { label: 'Exposure', sequence: 1 },
                risk: { label: 'Risk', sequence: 2 },
                qnb: { label: 'Quote & Bind', sequence: 3 },
                extraction: { label: 'Extraction', sequence: 4 },
                document: { label: 'Document', sequence: 5 },
                general: { label: 'General', sequence: 6 },
            },
        }),
        parent_case: DocumentIdColumn({ label: 'Parent case' }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
