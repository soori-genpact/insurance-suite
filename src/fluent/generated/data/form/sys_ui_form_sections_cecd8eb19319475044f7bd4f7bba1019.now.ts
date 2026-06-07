import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_gegis_ins_policy_coverage',
    view: default_view,
    sections: [
        {
            caption: 'General',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'coverage_name',
                            type: 'table_field',
                        },
                        {
                            field: 'coverage_selection',
                            type: 'table_field',
                        },
                        {
                            field: 'coverage_category',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'coverage_code',
                            type: 'table_field',
                        },
                        {
                            field: 'active_status',
                            type: 'table_field',
                        },
                        {
                            field: 'default_selected',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Limits & Deducatbles',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'limit_type',
                            type: 'table_field',
                        },
                        {
                            field: 'minimum_limit',
                            type: 'table_field',
                        },
                        {
                            field: 'deductible_type',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'default_limit',
                            type: 'table_field',
                        },
                        {
                            field: 'maximum_limit',
                            type: 'table_field',
                        },
                        {
                            field: 'default_deductible',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Rating & Financials',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'coinsurance_pct',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'valuation_basis',
                            type: 'table_field',
                        },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'cause_of_loss_form',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Rules',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'applicable_states',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'eligibility_rule_ref',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Display',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'display_order',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'status',
                            type: 'table_field',
                        },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'description',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
    ],
})
