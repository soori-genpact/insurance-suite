import React, { useEffect, useState } from 'react'
import { displayValue, rawValue } from '../services/fieldValue'
import './SubmissionDetail.css'

// Maps a sub-case group to the "result" field that best summarizes its status,
// plus a CSS modifier for color-coding that value.
const RESULT_FIELD = {
    clearance: { field: 'clearance_result', tone: (v) => v },
    risk: { field: 'risk_level', tone: (v) => v },
    quote: { field: 'quote_status', tone: (v) => v },
}

function caseResult(groupKey, record) {
    const config = RESULT_FIELD[groupKey]
    if (!config) {
        return null
    }
    const value = rawValue(record[config.field])
    const label = displayValue(record[config.field])
    return value ? { value, label, tone: config.tone(value) } : null
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
            .then((result) => {
                if (!cancelled) {
                    setData(result)
                }
            })
            .catch((err) => {
                if (!cancelled) {
                    setError(err.message || 'Failed to load sub-cases')
                }
            })
            .finally(() => {
                if (!cancelled) {
                    setLoading(false)
                }
            })
        return () => {
            cancelled = true
        }
    }, [submissionSysId, service])

    return (
        <aside className="submission-detail">
            <div className="detail-header">
                <div>
                    <span className="detail-number">{displayValue(submission.number)}</span>
                    <h2>{displayValue(submission.insured_name)}</h2>
                </div>
                <button type="button" className="close-button" onClick={onClose} aria-label="Close panel">
                    ×
                </button>
            </div>

            <dl className="detail-meta">
                <div>
                    <dt>Policy Type</dt>
                    <dd>{displayValue(submission.policy_type) || '—'}</dd>
                </div>
                <div>
                    <dt>Subscription</dt>
                    <dd>{displayValue(submission.subscription) || 'All Cases'}</dd>
                </div>
                <div>
                    <dt>Effective</dt>
                    <dd>{displayValue(submission.effective_date) || '—'}</dd>
                </div>
                <div>
                    <dt>Expiration</dt>
                    <dd>{displayValue(submission.expiration_date) || '—'}</dd>
                </div>
            </dl>

            <h3 className="section-title">Orchestrated Cases</h3>

            {loading && <div className="detail-loading">Loading cases…</div>}
            {error && <div className="detail-error">{error}</div>}

            {!loading && !error && data && (
                <>
                    {data.orchestration ? (
                        <div className="orch-banner">
                            <span className="mono">{displayValue(data.orchestration.number)}</span>
                            <span>{displayValue(data.orchestration.short_description)}</span>
                        </div>
                    ) : (
                        <div className="orch-banner orch-banner--empty">
                            No orchestration case found yet. It is created right after the submission is inserted.
                        </div>
                    )}

                    <div className="case-groups">
                        {data.groups.map((group) => (
                            <div className="case-group" key={group.key}>
                                <div className="case-group-header">
                                    <span>{group.label}</span>
                                    <span className="case-count">{group.records.length}</span>
                                </div>
                                {group.records.length === 0 ? (
                                    <div className="case-empty">Not in subscription</div>
                                ) : (
                                    group.records.map((record) => {
                                        const result = caseResult(group.key, record)
                                        return (
                                            <div className="case-row" key={rawValue(record.sys_id)}>
                                                <span className="mono">{displayValue(record.number)}</span>
                                                {result && (
                                                    <span className={`result-badge tone-${result.tone}`}>
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
                </>
            )}
        </aside>
    )
}
