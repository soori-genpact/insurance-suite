import {
    Table,
    StringColumn,
    DecimalColumn,
    BooleanColumn,
    IntegerColumn,
    ListColumn,
    MultiLineTextColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core'

export const x_gegis_ins_policy_coverage = Table({
    name: 'x_gegis_ins_policy_coverage',
    label: 'Coverage',
    schema: {
        // ── Basic Information ─────────────────────────────────────────────────
        coverage_category: ReferenceColumn({
            label: 'Coverage category',
            referenceTable: 'x_gegis_ins_policy_coverage_category',
            mandatory: true,
        }),
        coverage_name: StringColumn({
            label: 'Coverage name',
            mandatory: true,
            maxLength: 200,
        }),
        coverage_code: StringColumn({
            label: 'Coverage code',
            mandatory: true,
            maxLength: 100,
        }),
        coverage_selection: StringColumn({
            label: 'Required / Optional / Excluded',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                required: { label: 'Required', sequence: 0 },
                optional: { label: 'Optional', sequence: 1 },
                excluded: { label: 'Excluded', sequence: 2 },
            },
        }),
        default_selected: BooleanColumn({
            label: 'Default selected',
        }),
        active_status: BooleanColumn({
            label: 'Active status',
        }),

        // ── Limits & Deductibles ──────────────────────────────────────────────
        limit_type: StringColumn({
            label: 'Limit type',
            dropdown: 'dropdown_with_none',
            choices: {
                per_occurrence: { label: 'Per Occurrence', sequence: 0 },
                per_location: { label: 'Per Location', sequence: 1 },
                aggregate: { label: 'Aggregate', sequence: 2 },
                per_item: { label: 'Per Item', sequence: 3 },
                combined_single_limit: { label: 'Combined Single Limit', sequence: 4 },
            },
        }),
        default_limit: DecimalColumn({ label: 'Default limit' }),
        minimum_limit: DecimalColumn({ label: 'Minimum limit' }),
        maximum_limit: DecimalColumn({ label: 'Maximum limit' }),
        deductible_type: StringColumn({
            label: 'Deductible type',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                flat: { label: 'Flat', sequence: 0 },
                percentage: { label: 'Percentage', sequence: 1 },
                per_occurrence: { label: 'Per Occurrence', sequence: 2 },
                per_location: { label: 'Per Location', sequence: 3 },
                waiting_period: { label: 'Waiting Period', sequence: 4 },
            },
        }),
        default_deductible: DecimalColumn({ label: 'Default deductible' }),

        // ── Rating & Financials ───────────────────────────────────────────────
        coinsurance_pct: DecimalColumn({ label: 'Coinsurance %' }),
        valuation_basis: StringColumn({
            label: 'Valuation basis',
            dropdown: 'dropdown_with_none',
            choices: {
                rcv: { label: 'Replacement Cost Value (RCV)', sequence: 0 },
                acv: { label: 'Actual Cash Value (ACV)', sequence: 1 },
                agreed_value: { label: 'Agreed Value', sequence: 2 },
                functional_replacement: { label: 'Functional Replacement Cost', sequence: 3 },
            },
        }),
        cause_of_loss_form: StringColumn({
            label: 'Cause of loss form',
            dropdown: 'dropdown_with_none',
            choices: {
                basic: { label: 'Basic Form', sequence: 0 },
                broad: { label: 'Broad Form', sequence: 1 },
                special: { label: 'Special Form (Open Perils)', sequence: 2 },
                named_perils: { label: 'Named Perils', sequence: 3 },
            },
        }),

        // ── Rules ─────────────────────────────────────────────────────────────
        applicable_states: ListColumn({
            label: 'Applicable states',
        }),
        eligibility_rule_ref: StringColumn({
            label: 'Eligibility rule reference',
            maxLength: 200,
        }),

        // ── Display ───────────────────────────────────────────────────────────
        display_order: IntegerColumn({
            label: 'Display order',
            mandatory: true,
        }),

        // ── Description ───────────────────────────────────────────────────────
        description: MultiLineTextColumn({
            label: 'Description text',
            maxLength: 2000,
        }),

        // ── Lifecycle ─────────────────────────────────────────────────────────
        status: StringColumn({
            label: 'Status',
            mandatory: true,
            dropdown: 'dropdown_with_none',
            choices: {
                draft: { label: 'Draft', sequence: 0 },
                published: { label: 'Published', sequence: 1 },
                archived: { label: 'Archived', sequence: 2 },
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
            element: 'coverage_category',
        },
    ],
})
