import { Table, StringColumn, ReferenceColumn, DateColumn, UrlColumn, OverrideColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_submission = Table({
    name: 'x_gegis_ins_policy_submission',
    label: 'Submission',
    extends: 'task',
    autoNumber: { prefix: 'SUB', number: 1000 },
    schema: {
        intake_case: ReferenceColumn({ label: 'Intake Case', referenceTable: 'x_gegis_ins_policy_intake_case' }),
        insured_name: StringColumn({ label: 'Insured Name', maxLength: 200, mandatory: true }),
        policy_type: StringColumn({
            label: 'Policy Type',
            dropdown: 'dropdown_with_none',
            choices: {
                general_liability: { label: 'General Liability', sequence: 0 },
                property: { label: 'Property', sequence: 1 },
                workers_comp: { label: 'Workers Compensation', sequence: 2 },
                commercial_auto: { label: 'Commercial Auto', sequence: 3 },
                umbrella: { label: 'Umbrella', sequence: 4 },
            },
        }),
        effective_date: DateColumn({ label: 'Effective Date' }),
        expiration_date: DateColumn({ label: 'Expiration Date' }),
        blob_url: UrlColumn({ label: 'Data Blob URL' }),
        subscription: StringColumn({
            label: 'Subscription',
            dropdown: 'dropdown_with_none',
            choices: {
                all: { label: 'All Cases', sequence: 0 },
                clearance_only: { label: 'Clearance Only', sequence: 1 },
                risk_only: { label: 'Risk Assessment Only', sequence: 2 },
                exposure_only: { label: 'Exposure Only', sequence: 3 },
                quote_only: { label: 'Quote & Bind Only', sequence: 4 },
            },
        }),
        assigned_to: OverrideColumn({
            baseTable: 'task',
            referenceQualifier: 'active=true',
        }),
        assignment_group: OverrideColumn({
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
