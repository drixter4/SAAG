import React, { useEffect } from "react";
import "./css/HeroBestune.css";

export default function HeroBestune({ Brand }) {


    return (
        <section className="hero-section mt-5 ">
            <div className="container-hero">
                <div className="row align-items-center ">

                    {/* Texto */}
                    <div
                        className="col-lg-6 col-md-10 hero-text"

                    >
                        {Brand == 'Bestune' &&
                            <img
                                src="/images/SAAG/BESTUNE-logo.png"
                                alt="Bestune"
                                className="hero-logo"
                            />
                        }
                        <h1 className="hero-title">
                            Seguridad para tu vehículo
                        </h1>

                        <p className="hero-description">
                            Protege tu automóvil, asegúrate de obtener la calidad que te mereces. Si estás buscando un seguro de auto, te ofrecemos varias opciones de aseguradoras con diferentes coberturas para que elijas la que mejor se adapte a tus necesidades.
                        </p>


                        <a href="/distribuidores" className={`btn ${Brand ==='Bestune' ? 'btn-dark-gray' : 'btn-dark-red'} hero-button`}>
                            Asegura tu vehículo
                        </a>

                        <p className="fs-10 m-0 mt-1">*Bestune México se reserva el derecho de realizar modificaciones en la información presentada sin previo aviso.
                        </p>
                        <p className="fs-10 m-0">*Imágenes de referencia: los accesorios son elementos adicionales.</p>
                    </div>

                    {/* Auto */}
                    <div
                        className="col-lg-6 hero-image-wrapper text-center"
                    >
                        {Brand == 'Bestune' ? 
                        <img
                            src="/images/SAAG/bestunecar2.png"
                            alt="Bestune B70S"
                            className="hero-car "
                        /> :
                        <img
                        src="/images/SAAG/RE-MAX-CLASICA-JIM.png"
                        alt="Bestune B70S"
                        className="hero-car "
                    /> 
                    }
                    </div>

                </div>
            </div>


            {/* Luz suave bajo el auto */}
        </section>
    );
}
