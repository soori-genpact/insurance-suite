import { Table, StringColumn, BooleanColumn, IntegerColumn, MultiLineTextColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_coverage_category = Table({
    name: 'x_gegis_ins_policy_coverage_category',
    label: 'Coverage Category',
    schema: {

        // ── Basic Information ─────────────────────────────────────────────────
        category_name: StringColumn({
            label: 'Category name',
            mandatory: true,
            maxLength: 200,
        }),
        category_code: StringColumn({
            label: 'Category code',
            mandatory: true,
            maxLength: 100,
        }),
        help_text: MultiLineTextColumn({
            label: 'Help text',
            maxLength: 1000,
        }),

        // ── Behavior ──────────────────────────────────────────────────────────
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
        minimum_coverages: IntegerColumn({
            label: 'Minimum coverages',
        }),
        active: BooleanColumn({
            label: 'Active',
        }),

        // ── Rules ─────────────────────────────────────────────────────────────
        eligibility_rule: StringColumn({
            label: 'Eligibility rule',
            maxLength: 200,
        }),

        // ── Display ───────────────────────────────────────────────────────────
        display_order: IntegerColumn({
            label: 'Display order',
            mandatory: true,
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
