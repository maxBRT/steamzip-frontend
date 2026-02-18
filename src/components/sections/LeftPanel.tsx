import { HeroBlock } from './HeroBlock';
import './LeftPanel.css';

export function LeftPanel() {
    return (
        <div className="d5-left">
            <HeroBlock />
            <div className="d5-left-bottom">
                <p className="d5-tagline">
                    One high-resolution image. A complete, launch-ready suite of Steam Store assets generated in sixty seconds.
                </p>
            </div>
        </div>
    );
}
