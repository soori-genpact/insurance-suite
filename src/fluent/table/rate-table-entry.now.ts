import { Table, StringColumn, ReferenceColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_rate_table_entry = Table({
    name: 'x_gegis_ins_policy_rate_table_entry',
    label: 'Rate Table Entry',
    schema: {
        rate_table: ReferenceColumn({
            label: 'Rate table',
            referenceTable: 'x_gegis_ins_policy_rate_table',
            mandatory: true,
        }),

        // ── Property LOB (COPE) ────────────────────────────────────────────────
        construction: StringColumn({
            label: 'Construction',
            dropdown: 'dropdown_with_none',
            choices: {
                fire_resistive: { label: 'Fire Resistive', sequence: 0 },
                modified_fire_resistive: { label: 'Modified Fire Resistive', sequence: 1 },
                masonry: { label: 'Masonry', sequence: 2 },
                joisted_masonry: { label: 'Joisted Masonry', sequence: 3 },
                non_combustible: { label: 'Non-Combustible', sequence: 4 },
                frame: { label: 'Frame', sequence: 5 },
            },
        }),
        occupancy: StringColumn({
            label: 'Occupancy',
            dropdown: 'dropdown_with_none',
            choices: {
                retail_mall: { label: 'Retail/Mall', sequence: 0 },
                warehouse: { label: 'Warehouse', sequence: 1 },
                office: { label: 'Office', sequence: 2 },
                it_office: { label: 'IT/Office', sequence: 3 },
                manufacturing: { label: 'Manufacturing', sequence: 4 },
                restaurant: { label: 'Restaurant', sequence: 5 },
                healthcare: { label: 'Healthcare', sequence: 6 },
                education: { label: 'Education', sequence: 7 },
                hospitality: { label: 'Hospitality', sequence: 8 },
            },
        }),
        protection: StringColumn({
            label: 'Protection',
            dropdown: 'dropdown_with_none',
            choices: {
                sprinklered: { label: 'Sprinklered', sequence: 0 },
                no_sprinkler: { label: 'No Sprinkler', sequence: 1 },
                partial_sprinkler: { label: 'Partial Sprinkler', sequence: 2 },
                fire_alarm_only: { label: 'Fire Alarm Only', sequence: 3 },
                full_suppression: { label: 'Full Suppression System', sequence: 4 },
            },
        }),

        // ── Motor LOB ──────────────────────────────────────────────────────────
        vehicle_type: StringColumn({
            label: 'Vehicle type',
            dropdown: 'dropdown_with_none',
            choices: {
                private_car: { label: 'Private Car', sequence: 0 },
                two_wheeler: { label: 'Two Wheeler', sequence: 1 },
                commercial: { label: 'Commercial', sequence: 2 },
                taxi: { label: 'Taxi', sequence: 3 },
            },
        }),
        zone: StringColumn({
            label: 'Zone',
            dropdown: 'dropdown_with_none',
            choices: {
                metro: { label: 'Metro', sequence: 0 },
                urban: { label: 'Urban', sequence: 1 },
                rural: { label: 'Rural', sequence: 2 },
                any: { label: 'Any', sequence: 3 },
            },
        }),
        engine_cc: StringColumn({
            label: 'Engine CC',
            dropdown: 'dropdown_with_none',
            choices: {
                upto_350cc: { label: 'Up to 350cc', sequence: 0 },
                upto_1500cc: { label: 'Up to 1500cc', sequence: 1 },
                above_1500cc: { label: 'Above 1500cc', sequence: 2 },
                any: { label: 'Any', sequence: 3 },
            },
        }),

        // ── Rate value (unified — unit determined by rate_table.rate_type) ─────
        rate_value: DecimalColumn({
            label: 'Rate value',
            mandatory: true,
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'rate_table',
        },
    ],
})
