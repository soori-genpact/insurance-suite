import { Table, StringColumn, ReferenceColumn, IntegerColumn, DecimalColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_auto_exposure = Table({
    name: 'x_gegis_ins_policy_auto_exposure',
    label: 'Auto Exposure',
    schema: {
        exposure_case: ReferenceColumn({
            label: 'Exposure case',
            referenceTable: 'x_gegis_ins_policy_exposure_case',
            mandatory: true,
        }),
        total_number_of_drivers: IntegerColumn({ label: 'Total drivers' }),
        pip_coverage: BooleanColumn({ label: 'PIP coverage' }),
        towing_coverage: BooleanColumn({ label: 'Towing coverage' }),
        roadside_assistance: BooleanColumn({ label: 'Roadside assistance' }),
        audio_visual_equip_limit: DecimalColumn({ label: 'AV equip coverage limit' }),
        bodily_injury_occurrence_limit: DecimalColumn({ label: 'BI occurrence limit' }),
        vehicle_damage_total: DecimalColumn({ label: 'Vehicle damage total' }),
        per_vehicle_deductible: DecimalColumn({ label: 'Per vehicle deductible' }),
        per_occurrence_deductible: DecimalColumn({ label: 'Per occurrence deductible' }),
        comprehensive_deductible: DecimalColumn({ label: 'Comprehensive deductible' }),
        collision_deductible: DecimalColumn({ label: 'Collision deductible' }),
        medical_payments: DecimalColumn({ label: 'Medical payments' }),
        uninsured_payment: DecimalColumn({ label: 'Uninsured payment' }),
        no_faults: BooleanColumn({ label: 'No-fault' }),
        garage_keepers: BooleanColumn({ label: 'Garage keepers' }),
        full_glass_coverage: BooleanColumn({ label: 'Full glass coverage' }),
        cost_of_hire: DecimalColumn({ label: 'Cost of hire' }),
        number_of_employees: IntegerColumn({ label: 'No. of employees' }),
        policy_coverage_type: StringColumn({
            label: 'Coverage type',
            dropdown: 'dropdown_with_none',
            choices: {
                liability_only: { label: 'Liability Only', sequence: 0 },
                physical_damage_only: { label: 'Physical Damage Only', sequence: 1 },
                combined: { label: 'Combined', sequence: 2 },
            },
        }),
        peril: StringColumn({
            label: 'Peril',
            dropdown: 'dropdown_with_none',
            choices: {
                comprehensive: { label: 'Comprehensive', sequence: 0 },
                collision: { label: 'Collision', sequence: 1 },
                specified_perils: { label: 'Specified Perils', sequence: 2 },
            },
        }),
        perils_deductible_applies_to: StringColumn({
            label: 'Deductible applies to',
            dropdown: 'dropdown_with_none',
            choices: {
                per_vehicle: { label: 'Per Vehicle', sequence: 0 },
                per_occurrence: { label: 'Per Occurrence', sequence: 1 },
            },
        }),
        vehicle_operated_by_employees: BooleanColumn({ label: 'Operated by employees' }),
        um_bi_statutory: BooleanColumn({ label: 'UM/BI statutory' }),
        supplemental_spousal_liability: BooleanColumn({ label: 'Supplemental spousal liability' }),
        override_premium: DecimalColumn({ label: 'Override premium' }),
        rental_number_of_days: IntegerColumn({ label: 'Rental days' }),
        rental_amount_per_day: DecimalColumn({ label: 'Rental amount/day' }),
        state: StringColumn({ label: 'State', maxLength: 50 }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'exposure_case',
        },
    ],
})
