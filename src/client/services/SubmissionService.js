const SCOPE = 'x_gegis_ins_policy'

const SUBMISSION_TABLE = `${SCOPE}_submission`

const SUB_CASE_TABLES = [
    {
        key: 'clearance',
        table: `${SCOPE}_clearance_case`,
        label: 'Clearance',
        fields: 'sys_id,number,short_description,clearance_status,cleared_date,state',
    },
    {
        key: 'exposure',
        table: `${SCOPE}_exposure_case`,
        label: 'Exposure',
        fields: 'sys_id,number,short_description,exposure_status,total_tiv,state',
    },
    {
        key: 'risk',
        table: `${SCOPE}_risk_case`,
        label: 'Risk',
        fields: 'sys_id,number,short_description,overall_risk_score,risk_grade,appetite_decision,state',
    },
    {
        key: 'qnb',
        table: `${SCOPE}_qnb_case`,
        label: 'Quote & Bind',
        fields: 'sys_id,number,short_description,qnb_status,state',
    },
]

export class SubmissionService {
    constructor() {
        this.tableName = SUBMISSION_TABLE
    }

    async #request(path, options = {}) {
        const response = await fetch(`/api/now/table/${path}`, {
            ...options,
            headers: {
                Accept: 'application/json',
                'X-UserToken': window.g_ck,
                ...(options.headers || {}),
            },
        })

        if (!response.ok) {
            let message = `HTTP error ${response.status}`
            try {
                const errorData = await response.json()
                message = errorData.error?.message || message
            } catch {
                // no JSON body
            }
            throw new Error(message)
        }

        if (response.status === 204) return null
        return response.json()
    }

    async list() {
        const params = new URLSearchParams()
        params.set('sysparm_display_value', 'all')
        params.set(
            'sysparm_fields',
            'sys_id,number,primary_insured,primary_insured.name,primary_broker,primary_broker.name,transaction_type,line_of_business,policy_effective_date,policy_expiry_date,overall_status,policy_currency,sys_created_on'
        )
        params.set('sysparm_query', 'ORDERBYDESCsys_created_on')

        const { result } = await this.#request(`${this.tableName}?${params.toString()}`, { method: 'GET' })
        return result || []
    }

    async create(data) {
        const { result } = await this.#request(this.tableName, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        return result
    }

    async getSubCases(submissionSysId) {
        const query = `submission=${submissionSysId}`

        const groups = await Promise.all(
            SUB_CASE_TABLES.map(async ({ key, table, label, fields }) => {
                const params = new URLSearchParams()
                params.set('sysparm_display_value', 'all')
                params.set('sysparm_fields', fields)
                params.set('sysparm_query', query)
                const { result } = await this.#request(`${table}?${params.toString()}`, { method: 'GET' })
                return { key, label, records: result || [] }
            })
        )

        return { groups }
    }
}
