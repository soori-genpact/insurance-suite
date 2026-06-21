import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['6f1d94b2fbe98b58b70efc647befdc44'],
    table: 'sys_element_mapping',
    data: {
        field: 'associated_record',
        id: '45c5037568a5483aa51faf7ed0171f45',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
    },
})
Record({
    $id: Now.ID['ab1d94b2fbe98b58b70efc647befdc45'],
    table: 'sys_element_mapping',
    data: {
        field: 'experience_status_record',
        id: '45c5037568a5483aa51faf7ed0171f45',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./end.record}}',
    },
})
Record({
    $id: Now.ID['ebad5436fbe98b58b70efc647befdcef'],
    table: 'sys_element_mapping',
    data: {
        field: 'is_automated',
        id: '45c5037568a5483aa51faf7ed0171f45',
        table: 'var__m_sys_pd_activity_type_prop_def008e553a5c7107d5fd301a0490eac',
        value: '{{vl.Base Playbook Activity Flow./end.automated}}',
    },
})
