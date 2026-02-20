import { useState } from 'react';
import { type FormEvent } from 'react';
import './EmailForm.css';

export function EmailForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            if (res.ok) {
                setStatus('success');
            } else if (res.status === 409) {
                setStatus('duplicate');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="d5-success">
                <div className="d5-success-head">✓ Registered</div>
                <div className="d5-success-body">
                    {email} added to the early access list. We'll be in touch at launch.
                </div>
            </div>
        );
    }

    if (status === 'duplicate') {
        return (
            <div className="d5-success">
                <div className="d5-success-head">Already in</div>
                <div className="d5-success-body">
                    {email} is already on the list. We'll reach out at launch.
                </div>
            </div>
        );
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="d5-form">
                    <input
                        className="d5-input"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        disabled={status === 'loading'}
                        required
                    />
                    <button className="d5-submit-btn" type="submit" disabled={status === 'loading'}>
                        {status === 'loading' ? '...' : 'Join Waitlist'}
                    </button>
                </div>
            </form>
            {status === 'error' && (
                <div className="d5-form-sub" style={{ color: '#E31B00' }}>
                    Something went wrong — please try again.
                </div>
            )}
            {status !== 'error' && (
                <div className="d5-form-sub">No account · No spam · Files deleted after 24h · $9 per pack</div>
            )}
        </>
    );
}
