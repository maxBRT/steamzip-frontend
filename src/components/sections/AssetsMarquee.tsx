import './AssetsMarquee.css';

const ASSETS = [
    { name: "Header Capsule",         dimensions: "920 × 430" },
    { name: "Small Capsule",          dimensions: "462 × 174" },
    { name: "Main Capsule",           dimensions: "1232 × 706" },
    { name: "Vertical Capsule",       dimensions: "748 × 896" },
    { name: "Screenshots",            dimensions: "1920 × 1080" },
    { name: "Page Background",        dimensions: "1438 × 810" },
    { name: "Shortcut Icon",          dimensions: "256 × 256" },
    { name: "App Icon",               dimensions: "184 × 184" },
    { name: "Library Capsule",        dimensions: "600 × 900" },
    { name: "Library Hero",           dimensions: "3840 × 1240" },
    { name: "Library Logo",           dimensions: "1280 × 720" },
    { name: "Library Header Capsule", dimensions: "920 × 430" },
    { name: "Event Cover",            dimensions: "800 × 450" },
    { name: "Event Header",           dimensions: "1920 × 622" },
];

export function AssetsMarquee() {
    const items = [...ASSETS, ...ASSETS];
    return (
        <div className="d5-marquee">
            <div className="d5-marquee-track">
                {items.map(({ name, dimensions }, i) => (
                    <span key={i} className="d5-marquee-item">
                        <span className="d5-marquee-name">{name}</span>
                        <span className="d5-marquee-dim">{dimensions}</span>
                        <span className="d5-marquee-sep">◆</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
