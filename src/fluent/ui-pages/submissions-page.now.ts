import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import submissionsPage from '../../client/index.html'

UiPage({
    $id: Now.ID['submissions-page'],
    endpoint: 'x_gegis_ins_policy_submissions.do',
    description: 'Policy Suite Submissions UI Page',
    category: 'general',
    html: submissionsPage,
    direct: true,
})
