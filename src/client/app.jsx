import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { SubmissionService } from './services/SubmissionService'
import { rawValue } from './services/fieldValue'
import SubmissionList from './components/SubmissionList'
import SubmissionForm from './components/SubmissionForm'
import SubmissionDetail from './components/SubmissionDetail'
import './app.css'

export default function App() {
    const [submissions, setSubmissions] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [selected, setSelected] = useState(null)

    const service = useMemo(() => new SubmissionService(), [])

    const refresh = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await service.list()
            setSubmissions(data)
        } catch (err) {
            setError('Failed to load submissions: ' + (err.message || 'Unknown error'))
            console.error(err)
        } finally {
            setLoading(false)
        }
    }, [service])

    useEffect(() => {
        void refresh()
    }, [refresh])

    const handleCreate = async (formData) => {
        try {
            await service.create(formData)
            setShowForm(false)
            await refresh()
        } catch (err) {
            setError('Failed to create submission: ' + (err.message || 'Unknown error'))
            console.error(err)
        }
    }

    const selectedSysId = selected ? rawValue(selected.sys_id) : null

    return (
        <div className="policy-suite-app">
            <header className="app-header">
                <div>
                    <h1>Policy Suite</h1>
                    <p className="app-subtitle">Submission intake & case orchestration</p>
                </div>
                <button className="create-button" onClick={() => setShowForm(true)}>
                    + New Submission
                </button>
            </header>

            {error && (
                <div className="error-message">
                    <span>{error}</span>
                    <button onClick={() => setError(null)}>Dismiss</button>
                </div>
            )}

            {loading ? (
                <div className="loading">Loading…</div>
            ) : (
                <div className={`app-body ${selected ? 'app-body--split' : ''}`}>
                    <SubmissionList
                        submissions={submissions}
                        onSelect={setSelected}
                        selectedSysId={selectedSysId}
                    />
                    {selected && (
                        <SubmissionDetail
                            key={selectedSysId}
                            submission={selected}
                            service={service}
                            onClose={() => setSelected(null)}
                        />
                    )}
                </div>
            )}

            {showForm && <SubmissionForm onSubmit={handleCreate} onCancel={() => setShowForm(false)} />}
        </div>
    )
}
