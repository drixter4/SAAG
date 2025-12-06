import React, { useEffect, useState } from "react";
import "./loader.css";

export default function Loader() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Duración del loader: 1.5s
    const t1 = setTimeout(() => {
      setFadeOut(true);
      const t2 = setTimeout(() => setHide(true), 700);
      return () => clearTimeout(t2);
    }, 1500);

    return () => clearTimeout(t1);
  }, []);

  if (hide) return null;

  return (
    <section className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="overlay"></div>

      <img
        src="/images/SAAG/SAAG-LOGO-blanco.png"
        alt="Cargando..."
        className="loader-logo"
      />
      <marquee
        scrollamount={window.innerWidth < 768 ? 10 : 28}
        className="cars"
      >
        <img src="/images/SAAG/car.png" alt="Carro animado" className="car-img" />
      </marquee>

    </section>
  );
}
