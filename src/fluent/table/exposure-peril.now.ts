import { Table, StringColumn, ReferenceColumn, IntegerColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_exposure_peril = Table({
    name: 'x_gegis_ins_policy_exposure_peril',
    label: 'Exposure Peril',
    schema: {
        exposure_item: ReferenceColumn({
            label: 'Exposure item',
            referenceTable: 'x_gegis_ins_policy_exposure_item',
            mandatory: true,
        }),
        peril: StringColumn({
            label: 'Peril',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                fire: { label: 'Fire', sequence: 0 },
                flood: { label: 'Flood', sequence: 1 },
                windstorm: { label: 'Windstorm', sequence: 2 },
                terrorism: { label: 'Terrorism', sequence: 3 },
                earthquake: { label: 'Earthquake', sequence: 4 },
                eq_california: { label: 'EQ California', sequence: 5 },
                tsunami: { label: 'Tsunami', sequence: 6 },
                srcc: { label: 'SRCC', sequence: 7 },
                boiler_and_machinery: { label: 'Boiler & Machinery', sequence: 8 },
                cbi_named: { label: 'CBI Named', sequence: 9 },
                cbi_unnamed: { label: 'CBI Unnamed', sequence: 10 },
                hail: { label: 'Hail', sequence: 11 },
                service_interruption: { label: 'Service Interruption', sequence: 12 },
                civil_authority: { label: 'Civil Authority', sequence: 13 },
                course_of_construction: { label: 'Course of Construction', sequence: 14 },
                theft: { label: 'Theft', sequence: 15 },
                liability: { label: 'Liability', sequence: 16 },
                bi: { label: 'BI', sequence: 17 },
                other: { label: 'Other', sequence: 18 },
            },
        }),
        expiring_status: StringColumn({
            label: 'Expiring status',
            dropdown: 'dropdown_with_none',
            choices: {
                included: { label: 'Included', sequence: 0 },
                excluded: { label: 'Excluded', sequence: 1 },
            },
        }),
        expiring_sub_limit_amount: DecimalColumn({ label: 'Expiring sublimit' }),
        new_sub_limit_amount: DecimalColumn({ label: 'New sublimit' }),
        waiting_period_days_expiring: IntegerColumn({ label: 'Wait days (expiring)' }),
        waiting_period_days_new: IntegerColumn({ label: 'Wait days (new)' }),
        remarks: StringColumn({ label: 'Remarks', maxLength: 2000 }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'exposure_item',
        },
    ],
})
