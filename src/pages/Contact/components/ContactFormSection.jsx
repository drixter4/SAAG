import React from "react";
import "./ContactFormSection.css";

export default function ContactFormSection() {
  return (
    <>
      <div className="contedor">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4">
            <h2 className="text-dark fw-600 ls-minus-1px mt-50px ">Contáctanos</h2>
            <p className="text-dark">
              ¡Hola! Estamos aquí para ayudarte. Déjanos tus datos y nos pondremos en contacto contigo pronto.
            </p>
          </div>
          <div className="col-4"></div>
          <div className="col-2"></div>
        </div>
      </div>

      {/* FORM CON SUPERPOSICIÓN */}
      <section className="contact-wrapper position-relative">
        <div className="container d-flex justify-content-center">
          <div className="contact-card bg-nero-grey shadow-xl animate-fade">

            <h4 className="contact-title">
              <span className="text-base-color">Let's talk.</span> Have a project in mind?
            </h4>

            <form className="contact-form-style-03 row">

              <div className="col-md-6 form-group">
                <label>Your name*</label>
                <input type="text" placeholder="What's your good name?" />
                <span className="form-icon"><i className="bi bi-emoji-smile" /></span>
              </div>

              <div className="col-md-6 form-group">
                <label>Your email address*</label>
                <input type="email" placeholder="Enter your email address" />
                <span className="form-icon"><i className="bi bi-envelope" /></span>
              </div>

              <div className="col-md-6 form-group">
                <label>Your phone number</label>
                <input type="tel" placeholder="Enter your phone number" />
                <span className="form-icon"><i className="bi bi-telephone" /></span>
              </div>

              <div className="col-md-6 form-group">
                <label>Your subject</label>
                <input type="text" placeholder="How can we help you?" />
                <span className="form-icon"><i className="bi bi-journals" /></span>
              </div>

              <div className="col-12 form-group">
                <label>Your message</label>
                <textarea rows="4" placeholder="Describe about your project"></textarea>
                <span className="form-icon"><i className="bi bi-chat-square-dots" /></span>
              </div>

              <div className="col-12">
                <p className="contact-note">
                  We are committed to protecting your privacy. We will never collect information
                  about you without your explicit consent.
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
