import { Table } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_base_case = Table({
    name: 'x_gegis_ins_policy_base_case',
    label: 'Base Case',
    extends: 'task',
    schema: {},
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
