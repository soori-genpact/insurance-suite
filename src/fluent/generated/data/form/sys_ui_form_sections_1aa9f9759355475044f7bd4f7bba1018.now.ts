import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_gegis_ins_policy_coverage_category',
    view: default_view,
    sections: [
        {
            caption: 'Basic Information',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'category_name',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'category_code',
                            type: 'table_field',
                        },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'help_text',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Behavior',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'coverage_selection',
                            type: 'table_field',
                        },
                        {
                            field: 'display_order',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'minimum_coverages',
                            type: 'table_field',
                        },
                        {
                            field: 'active',
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
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'eligibility_rule',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
    ],
})
