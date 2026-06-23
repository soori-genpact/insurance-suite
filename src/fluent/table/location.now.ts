import { Table, StringColumn, ReferenceColumn, IntegerColumn, DecimalColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_location = Table({
    name: 'x_gegis_ins_policy_location',
    label: 'Location',
    schema: {
        submission: ReferenceColumn({
            label: 'Submission',
            referenceTable: 'x_gegis_ins_policy_submission',
            mandatory: true,
        }),
        location_number: IntegerColumn({ label: 'Location number' }),
        address1: StringColumn({ label: 'Address line 1', maxLength: 200 }),
        address2: StringColumn({ label: 'Address line 2', maxLength: 200 }),
        address3: StringColumn({ label: 'Address line 3', maxLength: 200 }),
        city: StringColumn({ label: 'City', maxLength: 100 }),
        state: StringColumn({ label: 'State', maxLength: 50 }),
        county: StringColumn({ label: 'County', maxLength: 100 }),
        country: StringColumn({ label: 'Country', maxLength: 50 }),
        zipcode: StringColumn({ label: 'Zip code', maxLength: 20 }),
        latitude: DecimalColumn({ label: 'Latitude' }),
        longitude: DecimalColumn({ label: 'Longitude' }),
        occupancy: StringColumn({ label: 'Occupancy', maxLength: 200 }),
        construction_type: StringColumn({
            label: 'Construction type',
            dropdown: 'dropdown_with_none',
            choices: {
                frame: { label: 'Frame', sequence: 0 },
                joisted_masonry: { label: 'Joisted Masonry', sequence: 1 },
                non_combustible: { label: 'Non-Combustible', sequence: 2 },
                masonry_non_comb: { label: 'Masonry Non-Comb', sequence: 3 },
                modified_fire_resistive: { label: 'Modified Fire Resistive', sequence: 4 },
                fire_resistive: { label: 'Fire Resistive', sequence: 5 },
            },
        }),
        no_of_floors: IntegerColumn({ label: 'No. of floors' }),
        sq_footage: DecimalColumn({ label: 'Square footage' }),
        sprinkler: BooleanColumn({ label: 'Sprinkler' }),
        sprinkler_grade: StringColumn({ label: 'Sprinkler grade', maxLength: 50 }),
        alarm: BooleanColumn({ label: 'Alarm' }),
        class_code: StringColumn({ label: 'Class code', maxLength: 20 }),
        coinsurance: DecimalColumn({ label: 'Coinsurance %' }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'submission',
        },
    ],
})
