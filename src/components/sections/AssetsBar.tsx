import { AssetTag } from '../ui/AssetTag';
import './AssetsBar.css';

const ASSETS: { name: string; dimensions: string }[] = [
    { name: "Header Capsule",   dimensions: "460 × 215" },
    { name: "Small Capsule",    dimensions: "231 × 87" },
    { name: "Main Capsule",     dimensions: "616 × 353" },
    { name: "Vertical Capsule", dimensions: "374 × 448" },
    { name: "Library Capsule",  dimensions: "600 × 900" },
    { name: "Library Hero",     dimensions: "3840 × 1240" },
    { name: "Page Background",  dimensions: "1438 × 810" },
    { name: "Community Art",    dimensions: "800 × 450" },
];

export function AssetsBar() {
    return (
        <div className="d5-assets-bar">
            {ASSETS.map(({ name, dimensions }, i) => (
                <AssetTag key={name} name={name} dimensions={dimensions} highlight={i === 0} />
            ))}
        </div>
    );
}
