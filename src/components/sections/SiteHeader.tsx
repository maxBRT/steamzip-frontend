import { Logo } from '../ui/Logo';
import './SiteHeader.css';

export function SiteHeader() {
    return (
        <header className="d5-header">
            <Logo />
            <div className="d5-header-mid">Steam Store Asset Generator — Coming Soon</div>
            <div className="d5-header-badge">S<span>Z</span></div>
        </header>
    );
}
