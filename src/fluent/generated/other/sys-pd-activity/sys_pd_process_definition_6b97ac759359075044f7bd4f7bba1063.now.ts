import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['fb0e906d172e50349ff70dbde2a24a39'],
    table: 'sys_pd_activity',
    data: {
        active: 'true',
        activity_definition: 'b0c35e2b1b630010affd0e55cc4bcbca',
        ai_agent_execution_mode: 'off',
        ai_agent_run_as: 'playbook_user',
        enable_ai_agent: 'false',
        label: 'Instruction',
        lane: 'aad6ced21bc6674bb6dec23a02352360',
        name: 'instruction',
        order: '1',
        process_definition: '6b97ac759359075044f7bd4f7bba1063',
        restart_rule: 'RUN_ONLY_ONCE',
        start_rule_name: 'immediate',
    },
})
