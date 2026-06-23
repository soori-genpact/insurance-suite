import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
    view: default_view,
    sections: [
        {
            caption: 'Associated Record',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'associated_table',
                            type: 'table_field',
                        },
                        {
                            field: 'associated_record',
                            type: 'table_field',
                        },
                        {
                            field: 'experience_status_table',
                            type: 'table_field',
                        },
                        {
                            field: 'experience_status_record',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Details',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'tagline',
                            type: 'table_field',
                        },
                        {
                            field: 'icon',
                            type: 'table_field',
                        },
                        {
                            field: 'title',
                            type: 'table_field',
                        },
                        {
                            field: 'description',
                            type: 'table_field',
                        },
                        {
                            field: 'footer',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Features',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'is_automated',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
    ],
})
