export default function Section1() {
    const callNumber = () => {
        window.location.href = "tel:8000570137";
    };

    return (
        <section className="position-relative overflow-hidden">

            {/* Título con animación suave hacia arriba */}
            <div
                className="content800 text-center text-dark"
                data-anime='{
                    "el": "childs",
                    "translateY": [30,0],
                    "opacity": [0,1],
                    "duration": 800,
                    "delay": 0,
                    "staggervalue": 200,
                    "easing": "easeOutQuad"
                }'
            >
                <h3>Asistencia vial</h3>

                <div className="d-flex align-items-center justify-content-center mt-3">
                    <div
                        className="d-flex align-items-center gap-3"
                        onClick={callNumber}
                        style={{ cursor: "pointer" }}
                    >
                        <div
                            className="rounded-circle bg-white d-flex align-items-center justify-content-center shadow-lg"
                            style={{ width: "55px", height: "55px" }}
                        >
                            <i className="bi bi-telephone text-red fs-30"></i>
                        </div>
                        <div>
                            <p className="m-0 text-dark">ATC SAAG</p>
                            <p className="m-0 text-dark fs-12">800 057 0137</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">

                <div
                    className="row align-items-center"
                    data-anime='{
                        "el": "childs",
                        "translateY": [40,0],
                        "opacity": [0,1],
                        "duration": 900,
                        "delay": 0,
                        "staggervalue": 250,
                        "easing": "easeOutQuad"
                    }'
                >

                    {/* Imagen izquierda con parallax suave */}
                    <div className="col-lg-6 mb-4 mb-lg-0 text-center">
                        <div
                           
                        >
                            <div className="">
                                <div className="">
                                    <div className=" text-center">
                                        <img
                                            src="/images/SAAG/linea-800-SAAG-QR.png"
                                            alt="Atención SAAG"
                                            className="w-100 border-radius-10px shadow-lg"
                                            data-atropos-offset="8"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-start mt-3">
                            <p className="fw-700 text-dark fs-16 mb-5px">VIGENCIA</p>
                            <p className="text-black fs-14 w-90">
                                *4 eventos en combinación durante los 5 años de vigencia del programa a partir de la fecha de venta de la unidad.
                            </p>
                        </div>
                    </div>

                    {/* Columna derecha */}
                    <div className="col-lg-6 ps-4">

                        {/* ITEM 1 */}
                        <div className="d-flex align-items-start mb-15 ms-10">
                            <img
                                src="/images/SAAG/Bateria.png"
                                alt="Paso de corriente"
                                className="rounded-circle shadow-lg"
                                style={{ width: "65px", height: "65px", objectFit: "cover" }}
                            />
                            <div className="ms-3">
                                <p className="fw-700 text-dark fs-20 m-0">Paso de corriente</p>
                            </div>
                        </div>

                        {/* ITEM 2 */}
                        <div className="d-flex align-items-start mb-15 ms-10">
                            <img
                                src="/images/SAAG/Grua.png"
                                alt="Servicios de grúa"
                                className="rounded-circle shadow-lg"
                                style={{ width: "65px", height: "65px", objectFit: "cover" }}
                            />
                            <div className="ms-3">
                                <p className="fw-700 text-dark fs-20 m-0">Servicios de grúa</p>
                                <p className="text-black fs-14 m-0">Hasta 200 kilómetros.</p>
                            </div>
                        </div>

                        {/* ITEM 3 */}
                        <div className="d-flex align-items-start mb-15 ms-10">
                            <img
                                src="/images/SAAG/Llanta.png"
                                alt="Cambio de llanta"
                                className="rounded-circle shadow-lg"
                                style={{ width: "65px", height: "65px", objectFit: "cover" }}
                            />
                            <div className="ms-3">
                                <p className="fw-700 text-dark fs-20 m-0">Cambio de llanta</p>
                                <p className="text-black fs-14 m-0">Usando la refacción de su vehículo.</p>
                            </div>
                        </div>

                        {/* ITEM 4 */}
                        <div className="d-flex align-items-start mb-15 ms-10">
                            <img
                                src="/images/SAAG/gas-1.png"
                                alt="Abasto de combustible"
                                className="rounded-circle shadow-lg"
                                style={{ width: "65px", height: "65px", objectFit: "cover" }}
                            />
                            <div className="ms-3">
                                <p className="fw-700 text-dark fs-20 m-0">Abasto de combustible</p>
                                <p className="text-black fs-14 m-0">
                                    Hasta 10 litros a cargo del cliente.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
