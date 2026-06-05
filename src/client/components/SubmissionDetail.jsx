import React, { useEffect, useState } from 'react'
import { displayValue, rawValue } from '../services/fieldValue'
import './SubmissionDetail.css'

const RESULT_FIELD = {
    clearance: { field: 'clearance_status' },
    exposure:  { field: 'exposure_status' },
    risk:      { field: 'appetite_decision' },
    qnb:       { field: 'qnb_status' },
}

function caseResult(groupKey, record) {
    const config = RESULT_FIELD[groupKey]
    if (!config) return null
    const value = rawValue(record[config.field])
    const label = displayValue(record[config.field])
    return value ? { value, label } : null
}

export default function SubmissionDetail({ submission, service, onClose }) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const submissionSysId = rawValue(submission.sys_id)

    useEffect(() => {
        let cancelled = false
        setLoading(true)
        setError(null)
        service
            .getSubCases(submissionSysId)
            .then((result) => { if (!cancelled) setData(result) })
            .catch((err) => { if (!cancelled) setError(err.message || 'Failed to load cases') })
            .finally(() => { if (!cancelled) setLoading(false) })
        return () => { cancelled = true }
    }, [submissionSysId, service])

    return (
        <aside className="submission-detail">
            <div className="detail-header">
                <div>
                    <span className="detail-number">{displayValue(submission.number)}</span>
                    <h2>{displayValue(submission.primary_insured) || '—'}</h2>
                </div>
                <button type="button" className="close-button" onClick={onClose} aria-label="Close panel">
                    ×
                </button>
            </div>

            <dl className="detail-meta">
                <div>
                    <dt>Broker</dt>
                    <dd>{displayValue(submission.primary_broker) || '—'}</dd>
                </div>
                <div>
                    <dt>Transaction</dt>
                    <dd>{displayValue(submission.transaction_type) || '—'}</dd>
                </div>
                <div>
                    <dt>Line of Business</dt>
                    <dd>{displayValue(submission.line_of_business) || '—'}</dd>
                </div>
                <div>
                    <dt>Status</dt>
                    <dd>{displayValue(submission.overall_status) || '—'}</dd>
                </div>
                <div>
                    <dt>Effective</dt>
                    <dd>{displayValue(submission.policy_effective_date) || '—'}</dd>
                </div>
                <div>
                    <dt>Expiry</dt>
                    <dd>{displayValue(submission.policy_expiry_date) || '—'}</dd>
                </div>
                <div>
                    <dt>Currency</dt>
                    <dd>{displayValue(submission.policy_currency) || '—'}</dd>
                </div>
            </dl>

            <h3 className="section-title">Module Cases</h3>

            {loading && <div className="detail-loading">Loading cases…</div>}
            {error && <div className="detail-error">{error}</div>}

            {!loading && !error && data && (
                <div className="case-groups">
                    {data.groups.map((group) => (
                        <div className="case-group" key={group.key}>
                            <div className="case-group-header">
                                <span>{group.label}</span>
                                <span className="case-count">{group.records.length}</span>
                            </div>
                            {group.records.length === 0 ? (
                                <div className="case-empty">No cases found</div>
                            ) : (
                                group.records.map((record) => {
                                    const result = caseResult(group.key, record)
                                    return (
                                        <div className="case-row" key={rawValue(record.sys_id)}>
                                            <span className="mono">{displayValue(record.number)}</span>
                                            {result && (
                                                <span className={`result-badge tone-${result.value}`}>
                                                    {result.label}
                                                </span>
                                            )}
                                        </div>
                                    )
                                })
                            )}
                        </div>
                    ))}
                </div>
            )}
        </aside>
    )
}
