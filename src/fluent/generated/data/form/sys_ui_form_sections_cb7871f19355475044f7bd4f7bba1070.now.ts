import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_gegis_ins_policy_product',
    view: default_view,
    sections: [
        {
            caption: 'Basic Information',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'product_name',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'product_code',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Lifecycle & Availability',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'effective_date',
                            type: 'table_field',
                        },
                        {
                            field: 'applicable_states',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'expiration_date',
                            type: 'table_field',
                        },
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
