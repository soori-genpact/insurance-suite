import { Table, StringColumn, ReferenceColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_risk_factor = Table({
    name: 'x_gegis_ins_policy_risk_factor',
    label: 'Risk Factor',
    schema: {
        risk_case: ReferenceColumn({
            label: 'Risk case',
            referenceTable: 'x_gegis_ins_policy_risk_case',
            mandatory: true,
        }),
        factor_name: StringColumn({ label: 'Factor name', maxLength: 200, mandatory: true }),
        weight: DecimalColumn({ label: 'Weight' }),
        score: DecimalColumn({ label: 'Score' }),
        comment: StringColumn({ label: 'Comment', maxLength: 2000 }),
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
