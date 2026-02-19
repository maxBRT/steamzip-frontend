import { HeroBlock } from './HeroBlock';
import './LeftPanel.css';

export function LeftPanel() {
    return (
        <div className="d5-left">
            <HeroBlock />
            <div className="d5-left-bottom">
                <p className="d5-tagline">
                    Steam requires 8 images with exact pixel dimensions. Upload your art once and get every asset, perfectly cropped, in 60 seconds.
                </p>
            </div>
        </div>
    );
}
