import React, { useState } from "react";
import './custom.css'
export default function HeroLinea() {
    const [showQR, setShowQR] = useState(false);

    const openWhatsApp = () => {
        window.open("https://wa.me/5215623938489", "_blank");
    };

    const callNumber = () => {
        window.location.href = "tel:8000570137";
    };

    const sendEmail = () => {
        window.location.href = "mailto:soporteservicio@saag.mx";
    };

    const openQR = () => setShowQR(true);
    const closeQR = () => setShowQR(false);

    return (
        <>
            <section className="bg-sliding-line2 position-relative pb-3">
                <div className=" container-fluid overlap-section mb-4">
                    <div className="row position-relative">
                        <div
                            className="col swiper swiper-width-auto text-center pb-30px sm-pb-0px"
                            data-slider-options='{ "slidesPerView": "auto", "spaceBetween":50, "speed": 8000, "loop": true, "autoplay": { "delay":0, "disableOnInteraction": false, "reverseDirection": true }, "allowTouchMove": false, "effect": "slide" }'
                        >
                            <div className="swiper-wrapper marquee-slide">
                                <div className="swiper-slide">
                                    <div className="fs-150 xl-fs-120 sm-fs-80 text-black fw-600 ls-minus-5px sm-ls-minus-4px word-break-normal">
                                        Ventas y servicio.
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="fs-150 xl-fs-120 sm-fs-80 text-black fw-600 ls-minus-5px sm-ls-minus-4px word-break-normal">
                                        Refacciones.
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="fs-150 xl-fs-120 sm-fs-80 text-black fw-600 ls-minus-5px sm-ls-minus-4px word-break-normal">
                                        Diagnósticos.
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="fs-150 xl-fs-120 sm-fs-80 text-black fw-600 ls-minus-5px sm-ls-minus-4px word-break-normal">
                                        interface.
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="fs-150 xl-fs-120 sm-fs-80 text-black fw-600 ls-minus-5px sm-ls-minus-4px word-break-normal">
                                        Soporte técnico.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="expertise" className="container overflow-y-hidden ">
                    <div className="row align-items-end flex-column-reverse flex-lg-row">
                        <div className="col-lg-7 position-relative overflow-hidden">
                            <div className="outside-box-bottom-2 outside-box-left-5">
                                <div className="atropos" data-atropos>
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner text-center overflow-visible">
                                                <img
                                                    data-atropos-offset="5"
                                                    className="position-relative w-70"
                                                    src="/images/SAAG/AtencionClientes-linea-800-SAAG.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-5 mb-6 mt-3 md-mb-0"
                            data-anime='{
                                "el": "childs",
                                "translateY": [30, 0],
                                "opacity": [0,1],
                                "duration": 600,
                                "delay": 0,
                                "staggervalue": 300,
                                "easing": "easeOutQuad"
                            }'
                        >
                         

                            <p className="fw-600 fs-30 text-white mb-20px ls-minus-1px">
                                Atención inmediata
                            </p>
                            <p className="fw-600 fs-50 text-white mb-20px ls-minus-1px">
                                LINEA 800 SAAG.
                            </p>
                            <p className="w-90 text-white xl-w-100">
                                Para SAAG, es fundamental ofrecer apoyo, servicio y atención en
                                todas las etapas. Por lo qué, tendrás a tu disposición la línea
                                800 para recibir asistencia en áreas como Ventas, Servicio y
                                Refacciones.
                            </p>

                            <div className="progress-bar-style-01">
                                <div className="row mb-3">
                                    <div
                                        className="col-6 d-flex align-items-center gap-3"
                                        onClick={openWhatsApp}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div
                                            className="rounded-circle bg-white d-flex align-items-center justify-content-center"
                                            style={{ width: "55px", height: "55px" }}
                                        >
                                            <i className="bi bi-whatsapp text-red fs-30"></i>
                                        </div>
                                        <div>
                                            <p className="m-0 text-white">WhatsApp</p>
                                            <p className="m-0 text-white fs-12">
                                                +52 1 56 2393 8489
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="col-6 d-flex align-items-center gap-3"
                                        onClick={callNumber}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div
                                            className="rounded-circle bg-white d-flex align-items-center justify-content-center"
                                            style={{ width: "55px", height: "55px" }}
                                        >
                                            <i className="bi bi-telephone text-red fs-30"></i>
                                        </div>
                                        <div>
                                            <p className="m-0 text-white">ATC SAAG</p>
                                            <p className="m-0 text-white fs-12">800 057 0137</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div
                                        className="col-6 d-flex align-items-center gap-3"
                                        onClick={sendEmail}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div
                                            className="rounded-circle bg-white d-flex align-items-center justify-content-center"
                                            style={{ width: "55px", height: "55px" }}
                                        >
                                            <i className="bi bi-envelope text-red fs-30"></i>
                                        </div>
                                        <div>
                                            <p className="m-0 text-white">Email</p>
                                            <p className="m-0 text-white fs-12">
                                                soporteservicio@saag.mx
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-6 d-flex align-items-center gap-3"
                                        onClick={openQR}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <div
                                            className="rounded-circle bg-white d-flex align-items-center justify-content-center"
                                            style={{ width: "55px", height: "55px" }}
                                        >
                                            <i className="bi bi-qr-code-scan text-red fs-30"></i>
                                        </div>
                                        <div>
                                            <p className="m-0 text-white">QR</p>
                                            <p className="m-0 text-white fs-12">
                                                Ver
                                            </p>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {showQR && (
                <div
                    onClick={closeQR}
                    className="position-fixed top-0 start-0 w-100 h-100"
                    style={{
                        background: "rgba(0,0,0,0.7)",
                        backdropFilter: "blur(3px)",
                        zIndex: 9999,
                        cursor: "pointer"
                    }}
                >
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <img
                            src="/images/SAAG/QR-linea-800.jpg"
                            alt=""
                            style={{
                                width: "350px",
                                height: "350px",
                                objectFit: "contain",
                                borderRadius: "10px",
                                background: "white",
                                padding: "10px"
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
