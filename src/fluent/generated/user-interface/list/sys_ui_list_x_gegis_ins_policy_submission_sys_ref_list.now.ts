import { List } from '@servicenow/sdk/core'

List({
    table: 'x_gegis_ins_policy_submission',
    view: 'sys_ref_list',
    columns: ['sys_id'],
})
