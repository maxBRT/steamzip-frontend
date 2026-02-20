import { EmailForm } from '../ui/EmailForm';
import './WaitlistSection.css';

export function WaitlistSection() {
    return (
        <div className="d5-signup">
            <div className="d5-signup-header">
                <div className="d5-signup-heading">
                    Join the<br /><span>Waitlist</span>
                </div>
                <div className="d5-signup-note">
                    EARLY ACCESS<br />
                    MEMBERS GET <span>50% OFF</span>
                </div>
            </div>
            <EmailForm />
        </div>
    );
}
