import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['4a6ff31553a5c7107d5fd301a0490e61'],
    table: 'sys_pd_activity_definition',
    data: {
        access: 'public',
        active: 'true',
        activity_type: '',
        ai_agent_execution_mode: 'off',
        ai_agent_field_display_preferences:
            'enable_ai_agent=all;ai_agent_objective=all;ai_agent_run_as=all;ai_agent_execution_mode=all;',
        ai_agent_run_as: 'playbook_user',
        category: '708801831b0c1010affd0e55cc4bcb81',
        description: `<p>Provide an Instruction to the process user, allowing for the process author to define a message to display,</p>
<p><b>Inputs:</b></p>
<ul>
<li><b>Message</b> - Description message that will be displayed in Playbook experience.</li>
<li><b>Wait for user input</b> - Pauses process execution until user manually completes the process activity</li>
</ul>

<p><b>Outputs:</b></p>
<ul><li><b>Record</b> - Flow Data Record</li></ul>`,
        enable_ai_agent: 'off',
        experience_display_preferences:
            'associated_table=advanced;associated_record=advanced;experience_status_table=advanced;experience_status_record=advanced;description=all;is_automated=advanced;',
        input_display_preferences: 'message=all;wait=all;',
        label: 'Base Activity',
        name: 'instruction',
        public_access: 'true',
        source: 'db1084e553a5c7107d5fd301a0490e31',
        source_type: 'sys_hub_flow',
        sys_policy: 'read',
        system_level: 'true',
        table: 'global',
        wait_for_completion: 'true',
    },
})
