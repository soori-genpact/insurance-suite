import { BusinessRule } from '@servicenow/sdk/core'
import { orchestrateSubCases } from '../../server/orchestration-handler.js'

BusinessRule({
    $id: Now.ID['br_orchestrate_sub_cases'],
    name: 'Orchestrate Module Cases on Submission I',
    table: 'x_gegis_ins_policy_submission',
    when: 'after',
    action: ['insert'],
    script: orchestrateSubCases,
    order: 100,
    active: true,
    description: 'When a Submission is created, spawns Clearance, Exposure, Risk, and QNB cases linked to it.',
})
