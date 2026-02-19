import { type ReactNode } from 'react';
import { FeatureCard } from '../ui/FeatureCard';
import './FeaturesGrid.css';

const FEATURES: { num: string; title: string; desc: ReactNode }[] = [
    { num: "01", title: "Upload Master Art", desc: <><strong>3840×2160</strong> One file powers every size and ratio.</> },
    { num: "02", title: "Set Focal Point", desc: <>Pin the subject. Every crop stays <strong>perfectly composed</strong>.</> },
    { num: "03", title: "Download Pack", desc: <>One 9$ payment <strong>instant ZIP</strong>. No subscription BS.</> },
    { num: "Free", title: "Preview First", desc: <>The <strong>Header Capsule</strong> is always free. Try it before you buy.</> },
];

export function FeaturesGrid() {
    return (
        <div className="d5-right-top">
            {FEATURES.map(({ num, title, desc }) => (
                <FeatureCard key={num} num={num} title={title} desc={desc} />
            ))}
        </div>
    );
}
