import './css/ChecklistSection.css'

export default function ChecklistSectionJim() {
    const leftItems = [
        "Sistema de frenado.",
        "Filtro de aire.",
        "Batería.",
        "Anticongelante.",
    ];

    const rightItems = [
        "Presión de llantas",
        "Nivel de aceite.",
        "Faros.",
        "Frenos.",
    ];

    const renderItems = (items) =>
        items.map((item, i) => (
            <div className="check-item" key={i}>
                <div className="check-icon2">
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
