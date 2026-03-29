import './css/ChecklistSection.css'

export default function ChecklistSection() {
    const leftItems = [
        "Motor.",
        "Sistema de refrigeración.",
        "Sistema de combustible.",
        "Sistema de encendido.",
    ];

    const rightItems = [
        "Sistema eléctrico.",
        "Chasis y carrocería.",
        "Transmisión.",
        "Sistema de aire acondicionado.",
    ];

    const renderItems = (items) =>
        items.map((item, i) => (
            <div className="check-item" key={i}>
                <div className="check-icon">
                    <i className="bi bi-check"></i>
                </div>
                <p>{item}</p>
            </div>
        ));

    return (
        <section className="check-section">
            <div className="check-column">
                {renderItems(leftItems)}
            </div>

            <div className="check-column">
                {renderItems(rightItems)}
            </div>
        </section>
    );
}
