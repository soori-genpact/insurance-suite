import {
    Table,
    StringColumn,
    BooleanColumn,
    IntegerColumn,
    DecimalColumn,
    MultiLineTextColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core'

export const x_gegis_ins_policy_coverage_term = Table({
    name: 'x_gegis_ins_policy_coverage_term',
    label: 'Coverage Term',
    schema: {
        // ── Basic Information ─────────────────────────────────────────────────
        coverage: ReferenceColumn({
            label: 'Coverage',
            referenceTable: 'x_gegis_ins_policy_coverage',
            mandatory: true,
        }),
        term_name: StringColumn({
            label: 'Term name',
            mandatory: true,
            maxLength: 200,
        }),
        term_code: StringColumn({
            label: 'Term code',
            mandatory: true,
            maxLength: 100,
        }),
        term_type: StringColumn({
            label: 'Term type',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                limit: { label: 'Limit', sequence: 0 },
                deductible: { label: 'Deductible', sequence: 1 },
                duration: { label: 'Duration', sequence: 2 },
                premium: { label: 'Premium', sequence: 3 },
                percentage: { label: 'Percentage', sequence: 4 },
                fee: { label: 'Fee', sequence: 5 },
            },
        }),
        data_type: StringColumn({
            label: 'Data type',
            dropdown: 'dropdown_with_none',
            choices: {
                currency: { label: 'Currency', sequence: 0 },
                percentage: { label: 'Percentage', sequence: 1 },
                integer: { label: 'Integer', sequence: 2 },
                text: { label: 'Text', sequence: 3 },
                date: { label: 'Date', sequence: 4 },
                duration: { label: 'Duration', sequence: 5 },
            },
        }),

        // ── Behavior ──────────────────────────────────────────────────────────
        required: BooleanColumn({
            label: 'Required',
        }),
        affects_rating: BooleanColumn({
            label: 'Affects rating',
        }),
        display_order: IntegerColumn({
            label: 'Display order',
        }),

        // ── Constraints ───────────────────────────────────────────────────────
        default_value: DecimalColumn({
            label: 'Default value',
        }),
        minimum_value: DecimalColumn({
            label: 'Minimum value',
        }),
        maximum_value: DecimalColumn({
            label: 'Maximum value',
        }),

        // ── Rules ─────────────────────────────────────────────────────────────
        dependency_rule: StringColumn({
            label: 'Dependency rule',
            maxLength: 200,
        }),

        // ── Help Text ─────────────────────────────────────────────────────────
        description: MultiLineTextColumn({
            label: 'Description',
            maxLength: 2000,
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
    index: [
        {
            name: 'index',
            unique: false,
            element: 'coverage',
        },
    ],
})
