import { Table, ReferenceColumn, DateColumn, IntegerColumn, DecimalColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_loss_summary = Table({
    name: 'x_gegis_ins_policy_loss_summary',
    label: 'Loss Summary',
    schema: {
        risk_case: ReferenceColumn({
            label: 'Risk case',
            referenceTable: 'x_gegis_ins_policy_risk_case',
            mandatory: true,
            unique: true,
        }),
        total_loss_past_5_years: DecimalColumn({ label: 'Total loss (5yr)' }),
        number_of_losses_past_5_years: IntegerColumn({ label: 'No. of losses (5yr)' }),
        loss_period_from: DateColumn({ label: 'Loss period from' }),
        loss_period_to: DateColumn({ label: 'Loss period to' }),
        loss_records_at_least_5_years: BooleanColumn({ label: '5yr records available' }),
        total_claim_amount_incl_os: DecimalColumn({ label: 'Total incl. O/S' }),
        loss_ratio: DecimalColumn({ label: 'Loss ratio' }),
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
