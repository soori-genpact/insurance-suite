import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['8285556e619103a7f098b2c606b50a12'],
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: '56aed84476347689d139156ec8266212',
        category: '708801831b0c1010affd0e55cc4bcb81',
        experience_display_preferences:
            'associated_table=all;associated_record=all;experience_status_table=advanced;experience_status_record=advanced;tagline=all;icon=advanced;title=standard;description=standard;pending_title=advanced;pending_description=advanced;record_fields=all;footer=standard;form_view=all;form_fields=all;attachment_source=all;attachments_read_only=standard;show_sla=standard;show_checklist=standard;is_automated=advanced;',
        input_display_preferences: 'table=all;record=all;assignment_group=standard;assigned_to=standard;',
        label: 'Exposure Management Summary',
        name: 'x_gegis_ins_policy_exposure_management_summary',
        public_access: 'false',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        system_level: 'false',
        table: 'global',
        wait_for_completion: 'true',
    },
})
