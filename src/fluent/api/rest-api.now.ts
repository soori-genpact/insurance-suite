import { RestApi } from '@servicenow/sdk/core'
import createIntakeCase from '../../server/intake-case-handler.js'
import upsertSubmission from '../../server/submission-handler.js'
import createCaseTask from '../../server/case-task-handler.js'

RestApi({
    $id: Now.ID['policy_suite_api'],
    name: 'Policy Suite API',
    serviceId: 'policy_suite_api',
    consumes: 'application/json',
    produces: 'application/json',
    routes: [
        {
            $id: Now.ID['route_intake_case'],
            path: '/intake-case',
            method: 'POST',
            script: createIntakeCase,
            name: 'Create Intake Case',
            shortDescription: 'Creates an intake case from any inbound channel (email, portal, API)',
            version: 1,
            consumes: 'application/json',
            produces: 'application/json',
        },
        {
            $id: Now.ID['route_submission'],
            path: '/submission',
            method: 'POST',
            script: upsertSubmission,
            name: 'Upsert Submission',
            shortDescription: 'Creates or updates a submission record',
            version: 1,
            consumes: 'application/json',
            produces: 'application/json',
        },
        {
            $id: Now.ID['route_case_task'],
            path: '/case-task',
            method: 'POST',
            script: createCaseTask,
            name: 'Create Case Task',
            shortDescription: 'Creates a case sub-task for any module (clearance, exposure, risk, qnb, extracti',
            version: 1,
            consumes: 'application/json',
            produces: 'application/json',
        },
    ],
    versions: [
        {
            $id: Now.ID['policy_suite_api_v1'],
            version: 1,
            isDefault: true,
        },
    ],
})
