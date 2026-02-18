import { type ReactNode } from 'react';
import './FeatureCard.css';

type Props = { num: string; title: string; desc: ReactNode };

export function FeatureCard({ num, title, desc }: Props) {
    return (
        <div className="d5-feat">
            <span className="d5-feat-num">{num}</span>
            <div className="d5-feat-title">{title}</div>
            <div className="d5-feat-desc">{desc}</div>
        </div>
    );
}
