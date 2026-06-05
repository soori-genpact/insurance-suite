import { Table, StringColumn, ReferenceColumn, DateTimeColumn, DecimalColumn, BooleanColumn, OverrideColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_risk_case = Table({
    name: 'x_gegis_ins_policy_risk_case',
    label: 'Risk Case',
    extends: 'task',
    autoNumber: { prefix: 'RSK', number: 1000 },
    schema: {
        number: OverrideColumn({ baseTable: 'task' }),
        submission: ReferenceColumn({
            label: 'Submission',
            referenceTable: 'x_gegis_ins_policy_submission',
            mandatory: true,
        }),
        overall_risk_score: DecimalColumn({ label: 'Risk score' }),
        risk_grade: StringColumn({
            label: 'Risk grade',
            dropdown: 'dropdown_with_none',
            choices: {
                a: { label: 'A', sequence: 0 },
                b: { label: 'B', sequence: 1 },
                c: { label: 'C', sequence: 2 },
                d: { label: 'D', sequence: 3 },
                e: { label: 'E', sequence: 4 },
            },
        }),
        appetite_decision: StringColumn({
            label: 'Appetite decision',
            dropdown: 'dropdown_with_none',
            choices: {
                in_appetite: { label: 'In Appetite', sequence: 0 },
                out_of_appetite: { label: 'Out of Appetite', sequence: 1 },
                refer: { label: 'Refer', sequence: 2 },
            },
        }),
        referral_required: BooleanColumn({ label: 'Referral required' }),
        assessed_by: ReferenceColumn({ label: 'Assessed by', referenceTable: 'sys_user' }),
        assessed_date: DateTimeColumn({ label: 'Assessed date' }),
        notes: StringColumn({ label: 'Notes', maxLength: 4000 }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
