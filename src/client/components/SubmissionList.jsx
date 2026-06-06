import React from 'react'
import { displayValue, rawValue } from '../services/fieldValue'
import './SubmissionList.css'

export default function SubmissionList({ submissions, onSelect, selectedSysId }) {
    if (submissions.length === 0) {
        return <div className="no-submissions">No submissions yet. Create one to start the workflow.</div>
    }

    return (
        <div className="submission-list">
            <table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Primary Insured</th>
                        <th>Transaction</th>
                        <th>Line of Business</th>
                        <th>Status</th>
                        <th>Effective</th>
                        <th>Expiry</th>
                    </tr>
                </thead>
                <tbody>
                    {submissions.map((submission) => {
                        const sysId = rawValue(submission.sys_id)
                        const isSelected = sysId === selectedSysId
                        return (
                            <tr
                                key={sysId}
                                className={isSelected ? 'selected' : ''}
                                onClick={() => onSelect(submission)}
                            >
                                <td className="mono">{displayValue(submission.number)}</td>
                                <td>{displayValue(submission.primary_insured) || '—'}</td>
                                <td>{displayValue(submission.transaction_type) || '—'}</td>
                                <td>{displayValue(submission.line_of_business) || '—'}</td>
                                <td>
                                    <span className="status-badge">
                                        {displayValue(submission.overall_status) || '—'}
                                    </span>
                                </td>
                                <td>{displayValue(submission.policy_effective_date) || '—'}</td>
                                <td>{displayValue(submission.policy_expiry_date) || '—'}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
