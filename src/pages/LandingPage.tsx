import { SiteHeader } from '../components/sections/SiteHeader';
import { LeftPanel } from '../components/sections/LeftPanel';
import { RightPanel } from '../components/sections/RightPanel';
import { SiteFooter } from '../components/sections/SiteFooter';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div className="d5">
            <SiteHeader />
            <div className="d5-main">
                <LeftPanel />
                <RightPanel />
                <SiteFooter />
            </div>
        </div>
    );
}
