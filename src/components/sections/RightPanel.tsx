import { FeaturesGrid } from './FeaturesGrid';
import { AssetsBar } from './AssetsBar';
import { WaitlistSection } from './WaitlistSection';
import './RightPanel.css';

export function RightPanel() {
    return (
        <div className="d5-right">
            <FeaturesGrid />
            <AssetsBar />
            <WaitlistSection />
        </div>
    );
}
