import React from "react";

const services = [
    {
        id: 1,
        title: "Garantía",
        badge: "Garantía oficial",
        description:
            "Garantía oficial SAAG con cobertura en componentes esenciales, diagnósticos certificados y uso exclusivo de refacciones originales. Pensada para mantener tu vehículo protegido y operando como nuevo.",
        image: "https://placehold.co/768x768",
        icon: "line-icon-Shield",
        ruta: "/garantia"
    },

    {
      id: 2,
      title: "Mantenimiento",
      badge: "Servicio técnico",
      description:
        "Mantenimiento preventivo y correctivo realizado por técnicos certificados, revisiones completas del sistema y ajustes necesarios para asegurar el rendimiento y prolongar la vida útil del vehículo.",
      image: "https://placehold.co/768x768",
      icon: "line-icon-Gears",
      ruta: "/mantenimiento"
    },
  
];



export default function Services() {
    return (
        <section
            className="cover-background overflow-hidden"
            style={{ backgroundImage: "url('images/demo-decor-store-footer-bg.jpg')" }}
        >

            <div className="container">
                <div className="row">
                    <div className="col-md-12 last-paragraph-no-margin">
                        <h2 className="text-white fw-600 ls-minus-1px mb-20px text-center">Nuestros servicios</h2>
                        <h6 class="text-white-50 w-100 sm-w-100 text-center mb-3">Descubre los beneficios que ofrecen nuestros servicios.</h6>

                    </div>
                    <div className="col tab-style-01">

                        {/* TABS */}
                        <ul className="nav nav-tabs justify-content-center border-0 text-center fs-18 alt-font fw-600 mb-3">
                            {services.map((service, index) => (
                                <li className="nav-item" key={service.id}>
                                    <a
                                        className={`nav-link ${index === 0 ? "active" : ""}`}
                                        data-bs-toggle="tab"
                                        href={`#tab_${service.id}`}
                                    >
                                        {service.title.split(" ")[0]}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* CONTENT */}
                        <div className="tab-content">
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                                    id={`tab_${service.id}`}
                                >
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-md-6 text-center">
                                            <a href={service.ruta}>
                                                <img
                                                
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="img-fluid"
                                                    style={{ width: "100%", maxWidth: "400px", aspectRatio: "1 / 1", objectFit: "cover", cursor: 'pointer'}}
                                                />
                                            </a>
                                        </div>

                                        <div className="col-lg-5 offset-lg-1 col-md-6 text-center text-md-start mt-5 mt-md-2">
                                            <div className="mb-3">
                                                <i
                                                    className={`${service.icon} text-danger`}
                                                    style={{ fontSize: "40px" }}
                                                ></i>
                                            </div>
                                            <h3 className=" fw-700 text-white">{service.title}</h3>
                                            <p className="text-white">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
