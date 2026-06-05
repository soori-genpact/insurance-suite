import React, { useState } from 'react'
import './SubmissionForm.css'

const TRANSACTION_TYPES = [
    { value: 'new', label: 'New' },
    { value: 'renewal', label: 'Renewal' },
    { value: 'endorsement', label: 'Endorsement' },
]

const LINES_OF_BUSINESS = [
    { value: 'property', label: 'Property' },
    { value: 'workers_comp', label: 'Workers Comp' },
    { value: 'auto', label: 'Auto' },
]

const CURRENCIES = [
    { value: 'usd', label: 'USD' },
    { value: 'gbp', label: 'GBP' },
    { value: 'eur', label: 'EUR' },
    { value: 'cad', label: 'CAD' },
    { value: 'aud', label: 'AUD' },
    { value: 'jpy', label: 'JPY' },
    { value: 'chf', label: 'CHF' },
]

const SOURCE_CHANNELS = [
    { value: 'email', label: 'Email' },
    { value: 'portal', label: 'Portal' },
    { value: 'api', label: 'API' },
    { value: 'broker_upload', label: 'Broker Upload' },
]

const INITIAL = {
    transaction_type: 'new',
    line_of_business: 'property',
    policy_currency: 'usd',
    policy_effective_date: '',
    policy_expiry_date: '',
    primary_insured_display: '',
    primary_broker_display: '',
    source_channel: 'email',
}

export default function SubmissionForm({ onSubmit, onCancel }) {
    const [formData, setFormData] = useState(INITIAL)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <div className="form-overlay" onClick={onCancel}>
            <div className="form-container" onClick={(e) => e.stopPropagation()}>
                <div className="form-header">
                    <h2>New Submission</h2>
                    <button type="button" className="close-button" onClick={onCancel} aria-label="Close">
                        ×
                    </button>
                </div>
                <p className="form-hint">
                    Creating a submission automatically spawns Clearance, Exposure, Risk, and Quote &amp; Bind cases.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="primary_insured_display">Primary Insured *</label>
                        <input
                            type="text"
                            id="primary_insured_display"
                            name="primary_insured_display"
                            value={formData.primary_insured_display}
                            onChange={handleChange}
                            required
                            maxLength={200}
                            autoFocus
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="primary_broker_display">Primary Broker</label>
                        <input
                            type="text"
                            id="primary_broker_display"
                            name="primary_broker_display"
                            value={formData.primary_broker_display}
                            onChange={handleChange}
                            maxLength={200}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="transaction_type">Transaction Type *</label>
                            <select
                                id="transaction_type"
                                name="transaction_type"
                                value={formData.transaction_type}
                                onChange={handleChange}
                                required
                            >
                                {TRANSACTION_TYPES.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="line_of_business">Line of Business *</label>
                            <select
                                id="line_of_business"
                                name="line_of_business"
                                value={formData.line_of_business}
                                onChange={handleChange}
                                required
                            >
                                {LINES_OF_BUSINESS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="policy_effective_date">Effective Date *</label>
                            <input
                                type="date"
                                id="policy_effective_date"
                                name="policy_effective_date"
                                value={formData.policy_effective_date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="policy_expiry_date">Expiry Date *</label>
                            <input
                                type="date"
                                id="policy_expiry_date"
                                name="policy_expiry_date"
                                value={formData.policy_expiry_date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="policy_currency">Currency *</label>
                            <select
                                id="policy_currency"
                                name="policy_currency"
                                value={formData.policy_currency}
                                onChange={handleChange}
                                required
                            >
                                {CURRENCIES.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="source_channel">Source Channel</label>
                            <select
                                id="source_channel"
                                name="source_channel"
                                value={formData.source_channel}
                                onChange={handleChange}
                            >
                                {SOURCE_CHANNELS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-button" onClick={onCancel}>
                            Cancel
                        </button>
                        <button type="submit" className="submit-button">
                            Create Submission
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
