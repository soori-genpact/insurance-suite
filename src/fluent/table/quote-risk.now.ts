import { Table, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_quote_risk = Table({
    name: 'x_gegis_ins_policy_quote_risk',
    label: 'Quote Risk',
    schema: {
        quote: ReferenceColumn({
            label: 'Quote',
            referenceTable: 'x_gegis_ins_policy_quote',
            mandatory: true,
        }),
        risk_type: StringColumn({
            label: 'Risk type',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                building: { label: 'Building', sequence: 0 },
                contents: { label: 'Contents', sequence: 1 },
                business_interruption: { label: 'Business Interruption', sequence: 2 },
                vehicle: { label: 'Vehicle', sequence: 3 },
                equipment: { label: 'Equipment', sequence: 4 },
            },
        }),
        location: ReferenceColumn({
            label: 'Location',
            referenceTable: 'x_gegis_ins_policy_location',
        }),

        // ── COPE ──────────────────────────────────────────────────────────────
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
        exposure: StringColumn({
            label: 'Exposure',
            dropdown: 'dropdown_with_none',
            choices: {
                urban_low: { label: 'Urban/Low', sequence: 0 },
                suburban_medium: { label: 'Suburban/Medium', sequence: 1 },
                industrial_high: { label: 'Industrial/High', sequence: 2 },
                rural_low: { label: 'Rural/Low', sequence: 3 },
                coastal: { label: 'Coastal', sequence: 4 },
                flood_zone: { label: 'Flood Zone', sequence: 5 },
            },
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'location',
        },
        {
            name: 'index2',
            unique: false,
            element: 'quote',
        },
    ],
})
