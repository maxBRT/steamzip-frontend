import './AssetTag.css';

type Props = { name: string; highlight?: boolean };

export function AssetTag({ name, highlight }: Props) {
    return (
        <div className={`d5-asset-tag${highlight ? ' red' : ''}`}>{name}</div>
    );
}
