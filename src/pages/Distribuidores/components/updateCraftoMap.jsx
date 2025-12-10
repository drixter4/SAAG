import React, { useState } from "react";
import { distribuidores } from "./data/distribuidores";

export default function MapaDistribuidores() {
  const [selected, setSelected] = useState("La Paz, Baja California Sur");
  const data = distribuidores[selected];

  // URL dinámica con marcador
  const mapSrc = `https://maps.google.com/maps?q=${data.lat},${data.lng}&z=15&output=embed`;

  return (
    <section className="pt-0 mt-5">
      <div className="container">

        {/* Selector */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-6 text-center">
            <h3 className="fw-600 text-dark-gray mb-3">Distribuidores SAAG Automotive</h3>

            <select
              className="form-select border-radius-10px fs-18"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {Object.keys(distribuidores).map((key) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Mapa dinámico con marcador */}
        <div className="row g-0 justify-content-center">
          <div className="col-12">
            <div className="map h-500px lg-h-600px sm-h-450px" style={{ position: "relative" }}>
              <iframe
                key={mapSrc}               // fuerza reload al cambiar sede
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-10  p-4 border-radius-10px shadow">

            {/* TÍTULO: nombre de la sucursal */}
            <h4 className="fw-600 text-dark-gray mb-3">{selected}</h4>

            {/* DIRECCIÓN PRINCIPAL */}
            {data.direccion && (
              <div className="d-flex align-items-start">
                <i className="bi bi-geo-alt-fill me-3 fs-20 text-dark"></i>
                <p className="m-0 fs-18 text-dark">{data.direccion}</p>
              </div>
            )}

            
            {data.web && (
              <div className="d-flex align-items-start">
                <i className="bi bi-geo-alt-fill me-3 fs-20 text-dark"></i>
                <a href={data.web} className="m-0 fs-18 text-dark">{data.web}</a>
              </div>
            )}
            {/* TELÉFONO */}
            {data.telefono && (
              <div className="d-flex align-items-start">
                <i className="bi bi-telephone-fill me-3 fs-20 text-dark"></i>
                <p className="m-0 fs-18 text-dark">{data.telefono}</p>
              </div>
            )}

            {/* WHATSAPP */}
            {data.whatsapp && (
              <div className="d-flex align-items-start">
                <i className="bi bi-whatsapp me-3 fs-20 text-dark"></i>
                <p className="m-0 fs-18 text-dark">{data.whatsapp}</p>
              </div>
            )}

            {/* HORARIO */}
            {data.horario && (
              <div className="d-flex align-items-start">
                <i className="bi bi-clock-fill me-3 fs-20 text-dark"></i>
                <p className="m-0 fs-18 text-dark">{data.horario}</p>
              </div>
            )}

            {/* EMAIL */}
            {data.email && (
              <div className="d-flex align-items-start">
                <i className="bi bi-envelope-fill me-3 fs-20 text-dark"></i>
                <p className="m-0 fs-18 text-dark">{data.email}</p>
              </div>
            )}

            {/* REDES SOCIALES */}
            {(data.fb || data.ig || data.tiktok || data.fb_jim || data.ig_jim || data.tiktok_jim) && (
              <div className="d-flex align-items-center mt-3">

                {/* Ícono general */}

                {/* Contenedor de iconos */}
                <div className="d-flex gap-3">

                  {/* ===== REDES NORMALES ===== */}
                  {data.fb && (
                    <div
                      className="d-flex align-items-center px-2 py-1 border-radius-5px bg-light text-dark"
                      style={{ cursor: "pointer" }}
                      onClick={() => window.open(data.fb, "_blank")}
                    >
                      <i className="bi bi-facebook fs-20"></i>
                      
                    </div>
                  )}

                  {data.ig && (
                    <div
                      className="d-flex align-items-center py-1 border-radius-5px bg-light text-dark"
                      style={{ cursor: "pointer" }}
                      onClick={() => window.open(data.ig, "_blank")}
                    >
                      <i className="bi bi-instagram fs-20"></i>
                      
                    </div>
                  )}

                  {data.tiktok && (
                    <div
                      className="d-flex align-items-center py-1 border-radius-5px bg-light text-dark"
                      style={{ cursor: "pointer" }}
                      onClick={() => window.open(data.tiktok, "_blank")}
                    >
                      <i className="bi bi-tiktok fs-20"></i>
                      
                    </div>
                  )}
          
                  {/* ===== REDES JIM ===== */}
                  {data.fb_jim && (
                    <div
                      className="d-flex align-items-center py-1 border-radius-5px text-red"
                      style={{ cursor: "pointer" }}
                      onClick={() => window.open(data.fb_jim, "_blank")}
                    >
                      <i className="bi bi-facebook fs-20 "></i>
                      
                    </div>
                  )}

                  {data.ig_jim && (
                    <div
                      className="d-flex align-items-center py-1 border-radius-5px bg-dark-red text-red"
                      style={{ cursor: "pointer" }}
                      onClick={() => window.open(data.ig_jim, "_blank")}
                    >
                      <i className="bi bi-instagram fs-20 "></i>
                      
                    </div>
                  )}

                  {data.tiktok_jim && (
                    <div
                      className="d-flex align-items-center py-1 border-radius-5px bg-dark-red text-white"
                      style={{ cursor: "pointer" }}
                      onClick={() => window.open(data.tiktok_jim, "_blank")}
                    >
                      <i className="bi bi-tiktok fs-20 text-white"></i>
                      
                    </div>
                  )}

                </div>
              </div>
            )}


          </div>
        </div>


      </div>
    </section>
  );
}
