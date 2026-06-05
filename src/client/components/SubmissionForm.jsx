import React, { useState } from 'react'
import './SubmissionForm.css'

// Choices mirror the x_gegis_ins_policy_submission table definition.
const POLICY_TYPES = [
    { value: 'general_liability', label: 'General Liability' },
    { value: 'property', label: 'Property' },
    { value: 'workers_comp', label: 'Workers Compensation' },
    { value: 'commercial_auto', label: 'Commercial Auto' },
    { value: 'umbrella', label: 'Umbrella' },
]

const SUBSCRIPTIONS = [
    { value: 'all', label: 'All Cases' },
    { value: 'clearance_only', label: 'Clearance Only' },
    { value: 'risk_only', label: 'Risk Assessment Only' },
    { value: 'exposure_only', label: 'Exposure Only' },
    { value: 'quote_only', label: 'Quote & Bind Only' },
]

const INITIAL = {
    insured_name: '',
    policy_type: 'general_liability',
    subscription: 'all',
    effective_date: '',
    expiration_date: '',
    blob_url: '',
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
                    Creating a submission spawns its orchestration case and sub-cases automatically based on the
                    selected subscription.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="insured_name">Insured Name *</label>
                        <input
                            type="text"
                            id="insured_name"
                            name="insured_name"
                            value={formData.insured_name}
                            onChange={handleChange}
                            required
                            maxLength={200}
                            autoFocus
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="policy_type">Policy Type</label>
                            <select
                                id="policy_type"
                                name="policy_type"
                                value={formData.policy_type}
                                onChange={handleChange}
                            >
                                {POLICY_TYPES.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subscription">Subscription</label>
                            <select
                                id="subscription"
                                name="subscription"
                                value={formData.subscription}
                                onChange={handleChange}
                            >
                                {SUBSCRIPTIONS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="effective_date">Effective Date</label>
                            <input
                                type="date"
                                id="effective_date"
                                name="effective_date"
                                value={formData.effective_date}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="expiration_date">Expiration Date</label>
                            <input
                                type="date"
                                id="expiration_date"
                                name="expiration_date"
                                value={formData.expiration_date}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="blob_url">Data Blob URL</label>
                        <input
                            type="url"
                            id="blob_url"
                            name="blob_url"
                            value={formData.blob_url}
                            onChange={handleChange}
                            placeholder="https://..."
                        />
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
