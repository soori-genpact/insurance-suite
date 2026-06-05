import { Table, StringColumn, DateColumn } from '@servicenow/sdk/core'

export const x_gegis_ins_policy_party = Table({
    name: 'x_gegis_ins_policy_party',
    label: 'Party',
    extends: 'core_company',
    schema: {
        sic_code: StringColumn({ label: 'SIC code', maxLength: 10 }),
        sic_description: StringColumn({ label: 'SIC description', maxLength: 200 }),
        industry: StringColumn({ label: 'Industry', maxLength: 100 }),
        industry_code: StringColumn({ label: 'Industry code', maxLength: 20 }),
        fei_number: StringColumn({ label: 'FEI / FEIN', maxLength: 20 }),
        business_established: DateColumn({ label: 'Business established' }),
        client_id: StringColumn({ label: 'Client ID', maxLength: 40 }),
        broker_agent_organization: StringColumn({ label: 'Broker agent org', maxLength: 200 }),
        party_type: StringColumn({
            label: 'Party type',
            dropdown: 'dropdown_with_none',
            choices: {
                organization: { label: 'Organization', sequence: 0 },
                individual: { label: 'Individual', sequence: 1 },
            },
        }),
        status: StringColumn({
            label: 'Status',
            dropdown: 'dropdown_with_none',
            choices: {
                active: { label: 'Active', sequence: 0 },
                inactive: { label: 'Inactive', sequence: 1 },
                suspended: { label: 'Suspended', sequence: 2 },
            },
        }),
    },
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    actions: ['read', 'update', 'delete', 'create'],
})
