import './AssetTag.css';

type Props = { name: string; dimensions?: string; highlight?: boolean };

export function AssetTag({ name, dimensions, highlight }: Props) {
    return (
        <div className={`d5-asset-tag${highlight ? ' red' : ''}`}>
            <span className="d5-asset-tag-name">{name}</span>
            {dimensions && <span className="d5-asset-tag-dim">{dimensions}</span>}
        </div>
    );
}
