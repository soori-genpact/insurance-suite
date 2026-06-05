const SCOPE = 'x_gegis_ins_policy'

// Tables in the Policy Suite data model
const SUBMISSION_TABLE = `${SCOPE}_submission`
const ORCH_TABLE = `${SCOPE}_orch_case`

// Child case tables spawned by the orchestration business rule, in workflow order.
// Each carries a `submission` reference back to the originating submission.
const SUB_CASE_TABLES = [
    { key: 'clearance', table: `${SCOPE}_clearance`, label: 'Clearance', fields: 'sys_id,number,short_description,clearance_result,state' },
    { key: 'risk', table: `${SCOPE}_risk_assess`, label: 'Risk Assessment', fields: 'sys_id,number,short_description,risk_score,risk_level,state' },
    { key: 'exposure', table: `${SCOPE}_exposure`, label: 'Exposure', fields: 'sys_id,number,short_description,exposure_type,exposure_amount,state' },
    { key: 'quote', table: `${SCOPE}_quote_bind`, label: 'Quote & Bind', fields: 'sys_id,number,short_description,premium_amount,quote_status,state' },
]

export class SubmissionService {
    constructor() {
        this.tableName = SUBMISSION_TABLE
    }

    // Shared fetch wrapper that handles auth headers and error parsing.
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
                // response had no JSON body; keep the status-based message
            }
            throw new Error(message)
        }

        if (response.status === 204) {
            return null
        }

        return response.json()
    }

    // List all submissions, newest first.
    async list() {
        const searchParams = new URLSearchParams()
        searchParams.set('sysparm_display_value', 'all')
        searchParams.set(
            'sysparm_fields',
            'sys_id,number,insured_name,policy_type,subscription,effective_date,expiration_date,state,sys_created_on'
        )
        searchParams.set('sysparm_query', 'ORDERBYDESCsys_created_on')

        const { result } = await this.#request(`${this.tableName}?${searchParams.toString()}`, { method: 'GET' })
        return result || []
    }

    // Create a new submission. Inserting fires the orchestration business rule,
    // which spawns the configured sub-cases server-side.
    async create(data) {
        const { result } = await this.#request(this.tableName, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        return result
    }

    // Load the orchestration case (if any) and all sub-cases tied to a submission.
    // Returns { orchestration, groups: [{ key, label, records }] }.
    async getSubCases(submissionSysId) {
        const query = `submission=${submissionSysId}`

        const orchParams = new URLSearchParams()
        orchParams.set('sysparm_display_value', 'all')
        orchParams.set('sysparm_fields', 'sys_id,number,short_description,state')
        orchParams.set('sysparm_query', query)

        const childRequests = SUB_CASE_TABLES.map(async ({ key, table, label, fields }) => {
            const params = new URLSearchParams()
            params.set('sysparm_display_value', 'all')
            params.set('sysparm_fields', fields)
            params.set('sysparm_query', query)
            const { result } = await this.#request(`${table}?${params.toString()}`, { method: 'GET' })
            return { key, label, records: result || [] }
        })

        const [orchResponse, ...groups] = await Promise.all([
            this.#request(`${ORCH_TABLE}?${orchParams.toString()}`, { method: 'GET' }),
            ...childRequests,
        ])

        return {
            orchestration: orchResponse.result?.[0] || null,
            groups,
        }
    }
}
