import React from "react";
import "./ContactFormSection.css";

export default function ContactFormSection() {
  return (
    <>
      <div className="contedor py-5">
        <div className="row justify-content-center">
          {/* ESPACIO LATERAL EN DESKTOP */}
          <div className="d-none d-lg-block col-lg-2"></div>

          {/* COLUMNA CONTACTO */}
          <div className="col-12 col-md-6 col-lg-4 mb-5 px-4 px-lg-0">
            <h3 className="text-dark fw-600 ls-minus-1px mt-4 mb-3">Contáctanos</h3>

            <p className="text-dark mb-4" style={{ lineHeight: "1.6" }}>
              Estamos aquí para ayudarte. Déjanos tus datos y nos pondremos en
              contacto contigo lo antes posible.
            </p>

            <h3 className="text-dark fw-600 ls-minus-1px mb-2 mt-3">Atención a clientes</h3>
            <p className="text-dark d-flex align-items-center mb-4">
              <i className="bi bi-telephone me-2"></i>
              (333) 255 6595
            </p>
          </div>

          {/* COLUMNA REDES */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 px-4 px-lg-0">
            <h3 className="text-dark fw-600 ls-minus-1px mb-2 mt-4">Síguenos</h3>

            <p className="text-dark mb-4" style={{ lineHeight: "1.6" }}>
              Forma parte de nuestra comunidad y mantente al día con nuestras novedades.
            </p>

            {/* SAAG */}
            <div className="elements-social social-text-style-01 mt-auto">
              <p className="text-dark">SAAG AUTOMOTIVE</p>
              <ul className="large-icon  fw-500">
                <li>
                  <a className="youtube" href="https://www.youtube.com/@SAAGMX" target="_blank">
                    <i className="bi bi-youtube text-dark align-middle"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="https://www.linkedin.com/in/saag-automotive-5895992aa/" target="_blank">
                    <i className="bi bi-linkedin text-dark align-middle"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* BESTUNE + JIM */}
            <div className="row">
              <div className="col-6 col-md-6">
                <div className="elements-social social-text-style-01 mt-auto">
                  <p className="text-dark">BESTUNE</p>
                  <ul className="large-icon  fw-500">
                    <li>
                      <a className="facebook" href="https://www.facebook.com/Bestunemx/" target="_blank">
                        <i className="bi bi-facebook  align-middle text-dark"></i>
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="https://www.instagram.com/bestunemx/" target="_blank">
                        <i className="bi bi-instagram  align-middle text-dark"></i>
                      </a>
                    </li>
                    <li>
                      <a className="tiktok" href="https://www.tiktok.com/@bestunemx" target="_blank">
                        <i className="bi bi-tiktok  align-middle text-dark"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* JIM */}
              <div className="col-6 col-md-6">
                <div className="elements-social social-text-style-01 mt-auto">
                  <p className="text-dark">JIM</p>
                  <ul className="large-icon light fw-500">
                    <li>
                      <a className="facebook" href="https://www.facebook.com/JIMoficialmx" target="_blank">
                        <i className="bi bi-facebook  align-middle text-dark"></i>
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="https://www.instagram.com/jim_oficialmx/" target="_blank">
                        <i className="bi bi-instagram  align-middle text-dark"></i>
                      </a>
                    </li>
                    <li>
                      <a className="tiktok" href="https://www.tiktok.com/@jim.oficialmx" target="_blank">
                        <i className="bi bi-tiktok  align-middle text-dark"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ESPACIO LATERAL EN DESKTOP */}
          <div className="d-none d-lg-block col-lg-2"></div>
        </div>

      </div>

      {/* FORM CON SUPERPOSICIÓN */}
      <section className="contact-wrapper position-relative">
        <div className="container d-flex justify-content-center">
          <div className="contact-card bg-nero-grey shadow-xl animate-fade">

            <h4 className="contact-title">
              Solicita tu prueba de manejo.
            </h4>

            <form className="contact-form-style-03 row">

              <div className="col-md-6 form-group">
                <label>Nombre completo*</label>
                <input type="text" placeholder="Nombre completo" />
                <span className="form-icon"><i className="bi bi-emoji-smile" /></span>
              </div>

              <div className="col-md-6 form-group">
                <label>Correo*</label>
                <input type="email" placeholder="Correo" />
                <span className="form-icon"><i className="bi bi-envelope" /></span>
              </div>

              <div className="col-md-6 form-group">
                <label>Teléfono</label>
                <input type="tel" placeholder="Teléfono" />
                <span className="form-icon"><i className="bi bi-telephone" /></span>
              </div>

              <div className="col-md-6 form-group">
                <label>Código postal
                </label>
                <input type="text" placeholder="Código postal" />
                <span className="form-icon"><i className="bi bi-journals" /></span>
              </div>
              {/* ESTADO / DISTRIBUIDOR */}
              <div className="col-12 mb-3">
                <label className="form-label">Estado</label>
                <select
                  className="form-select"
                  name="estadoDistribuidor"
                  required
                >
                  <option value="">Seleccione un estado</option>

                  <option value="Baja California Sur">Baja California Sur</option>
                  <option value="Campeche">Campeche</option>
                  <option value="Chihuahua">Chihuahua</option>
                  <option value="Ciudad de México">Ciudad de México</option>
                  <option value="Colima">Colima</option>
                  <option value="Estado de México">Estado de México</option>
                  <option value="Hidalgo">Hidalgo</option>
                  <option value="Jalisco">Jalisco</option>
                  <option value="Querétaro">Querétaro</option>
                  <option value="Quintana Roo">Quintana Roo</option>
                  <option value="Michoacán">Michoacán</option>
                  <option value="Nayarit">Nayarit</option>
                  <option value="Nuevo León">Nuevo León</option>
                  <option value="Oaxaca">Oaxaca</option>
                  <option value="Puebla">Puebla</option>
                  <option value="San Luis Potosí">San Luis Potosí</option>
                  <option value="Sinaloa">Sinaloa</option>
                  <option value="Tabasco">Tabasco</option>
                  <option value="Veracruz">Veracruz</option>
                  <option value="Yucatán">Yucatán</option>

                </select>
              </div>


              <div className="col-12 form-group">
                <label>¿En qué podemos brindarte apoyo?                </label>
                <textarea rows="4" placeholder="Nosotros aclararemos tus dudas"></textarea>
                <span className="form-icon"><i className="bi bi-chat-square-dots" /></span>
              </div>

              <div className="col-12">
                <p className="contact-note">
                  Nos comprometemos a proteger su privacidad. Nunca recopilaremos información sobre usted sin su consentimiento explícito.
                </p>

                <button type="submit" className="contact-btn text-dark fw-800">
                  SEND MESSAGE
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </>
  );
}
