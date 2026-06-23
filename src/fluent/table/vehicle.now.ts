import { Table, StringColumn, ReferenceColumn, IntegerColumn, DecimalColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_vehicle = Table({
    name: 'x_gegis_ins_policy_vehicle',
    label: 'Vehicle',
    schema: {
        exposure_case: ReferenceColumn({
            label: 'Exposure case',
            referenceTable: 'x_gegis_ins_policy_exposure_case',
            mandatory: true,
        }),
        vehicle_type: StringColumn({
            label: 'Vehicle type',
            dropdown: 'dropdown_with_none',
            choices: {
                private_passenger: { label: 'Private Passenger', sequence: 0 },
                light_truck: { label: 'Light Truck', sequence: 1 },
                medium_truck: { label: 'Medium Truck', sequence: 2 },
                heavy_truck: { label: 'Heavy Truck', sequence: 3 },
                trailer: { label: 'Trailer', sequence: 4 },
                bus: { label: 'Bus', sequence: 5 },
                other: { label: 'Other', sequence: 6 },
            },
        }),
        vin: StringColumn({ label: 'VIN', maxLength: 20 }),
        year: IntegerColumn({ label: 'Year' }),
        make: StringColumn({ label: 'Make', maxLength: 100 }),
        license_plate_number: StringColumn({ label: 'License plate', maxLength: 20 }),
        cost_of_new_vehicle: DecimalColumn({ label: 'Cost new' }),
        vehicle_use: StringColumn({
            label: 'Vehicle use',
            dropdown: 'dropdown_with_none',
            choices: {
                commercial: { label: 'Commercial', sequence: 0 },
                service: { label: 'Service', sequence: 1 },
                retail: { label: 'Retail', sequence: 2 },
                pleasure: { label: 'Pleasure', sequence: 3 },
            },
        }),
        telematics_installed: BooleanColumn({ label: 'Telematics installed' }),
        telematics_type: StringColumn({
            label: 'Telematics type',
            dropdown: 'dropdown_with_none',
            choices: {
                factory_fitted: { label: 'Factory Fitted', sequence: 0 },
                aftermarket: { label: 'Aftermarket', sequence: 1 },
            },
        }),
        garaging_address: StringColumn({ label: 'Garaging address', maxLength: 300 }),
        garaging_city: StringColumn({ label: 'Garaging city', maxLength: 100 }),
        garaging_state: StringColumn({ label: 'Garaging state', maxLength: 50 }),
        garaging_zip_code: StringColumn({ label: 'Garaging zip', maxLength: 20 }),
        insured_vehicle_carry_employees: BooleanColumn({ label: 'Carries employees' }),
        current_auto_policy: BooleanColumn({ label: 'Current auto policy' }),
        existing_policy_expired: BooleanColumn({ label: 'Existing policy expired' }),
        current_carrier_name: StringColumn({ label: 'Current carrier', maxLength: 200 }),
        transports_seasonal_workers: BooleanColumn({ label: 'Transports seasonal workers' }),
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
