import React from 'react'
import { displayValue, rawValue } from '../services/fieldValue'
import './SubmissionList.css'

export default function SubmissionList({ submissions, onSelect, selectedSysId }) {
    if (submissions.length === 0) {
        return <div className="no-submissions">No submissions yet. Create one to start the orchestration workflow.</div>
    }

    return (
        <div className="submission-list">
            <table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Insured</th>
                        <th>Policy Type</th>
                        <th>Subscription</th>
                        <th>Effective</th>
                        <th>Expiration</th>
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
                                <td>{displayValue(submission.insured_name)}</td>
                                <td>{displayValue(submission.policy_type) || '—'}</td>
                                <td>
                                    <span className="subscription-badge">
                                        {displayValue(submission.subscription) || 'All Cases'}
                                    </span>
                                </td>
                                <td>{displayValue(submission.effective_date) || '—'}</td>
                                <td>{displayValue(submission.expiration_date) || '—'}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
