import { Table, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_major_exclusion = Table({
    name: 'x_gegis_ins_policy_major_exclusion',
    label: 'Major Exclusion',
    schema: {
        risk_case: ReferenceColumn({
            label: 'Risk case',
            referenceTable: 'x_gegis_ins_policy_risk_case',
            mandatory: true,
        }),
        exclusion_type: StringColumn({
            label: 'Exclusion type',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                affirmative_cyber: { label: 'Affirmative Cyber', sequence: 0 },
                nuclear: { label: 'Nuclear', sequence: 1 },
                radioactive_contamination: { label: 'Radioactive Contamination', sequence: 2 },
                war_civil_war: { label: 'War & Civil War', sequence: 3 },
                communicable_disease: { label: 'Communicable Disease', sequence: 4 },
                other: { label: 'Other', sequence: 5 },
            },
        }),
        choice_value: StringColumn({
            label: 'Status',
            dropdown: 'dropdown_with_none',
            choices: {
                included: { label: 'Included', sequence: 0 },
                excluded: { label: 'Excluded', sequence: 1 },
                sub_limited: { label: 'Sub-limited', sequence: 2 },
            },
        }),
        remarks: StringColumn({ label: 'Remarks', maxLength: 2000 }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'risk_case',
        },
    ],
})
