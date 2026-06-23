import { Form } from '@servicenow/sdk/core'

Form({
    table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
    view: 'process_automation_designer',
    sections: [
        {
            caption: 'Details',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'title',
                            type: 'table_field',
                        },
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
