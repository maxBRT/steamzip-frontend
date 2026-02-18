import { AssetTag } from '../ui/AssetTag';
import './AssetsBar.css';

const ASSETS = [
    "Header Capsule",
    "Small Capsule",
    "Main Capsule",
    "Vertical Capsule",
    "Library Capsule",
    "Library Hero",
    "Page Background",
    "Community Art",
];

export function AssetsBar() {
    return (
        <div className="d5-assets-bar">
            {ASSETS.map((name, i) => (
                <AssetTag key={name} name={name} highlight={i === 0} />
            ))}
        </div>
    );
}
