import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Brands = () => {
  const [Brand, setBrand] = useState("BESTUNE");
  const [cars, setCars] = useState([]);

  /* ===============================
     FETCH CARS FROM LARAVEL
  =============================== */
  useEffect(() => {
    fetch("https://bestune.codeglider.com.mx/api/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data); // 👈 SIN eliminar duplicados
      })
      .catch((err) => console.error("Error fetching cars:", err));
  }, []);

  /* ===============================
     FILTER BY BRAND
  =============================== */
  const filteredCars = cars.filter((car) => car.brand?.toUpperCase() === Brand);

  return (
    <section className="py-5">
      <div className="container">
        {/* ===== BRAND SWITCH ===== */}
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group">
            <button
              className={`btn ${
                Brand === "BESTUNE" ? "btn-dark" : "btn-outline-dark"
              }`}
              onClick={() => setBrand("BESTUNE")}
            >
              BESTUNE
            </button>
            <button
              className={`btn ${
                Brand === "JIM" ? "btn-dark" : "btn-outline-dark"
              }`}
              onClick={() => setBrand("JIM")}
            >
              JIM
            </button>
          </div>
        </div>

        {/* ===== SWIPER ===== */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="brands-swiper"
        >
          {filteredCars.map((car) => {
            const imageToShow =
              Array.isArray(car.images) && car.images.length > 0
                ? car.images[0]
                : car.banner_image;

            return (
              <SwiperSlide key={car.id}>
                <div className="gallery-box transition-inner-all">
                  <a href={`/modelos/${car.id}`}>
                    <div className="position-relative border-radius-6px overflow-hidden car-card">
                      <img
                        src={imageToShow}
                        alt={car.name}
                        className="w-100 car-image"
                      />

                      <div className="car-overlay"></div>

                      <div className="d-flex flex-column align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 car-hover-content">
                        <p className="model-car mb-3 fs-5 fw-bold text-white">
                          {car.name}
                        </p>

                        <div className="d-flex flex-column align-items-center gap-2">
                          <div className="d-flex align-items-center gap-2 text-white">
                            <i className="feather icon-feather-info"></i>
                            <span className="text-decoration-underline">
                              Conoce más
                            </span>
                          </div>

                          {car.brochure && (
                            <a
                              href={car.brochure}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="d-flex align-items-center gap-2 text-white"
                            >
                              <i className="feather icon-feather-file-text"></i>
                              <span className="text-decoration-underline">
                                Cotiza ahora
                              </span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* ===== STYLES ===== */}
      <style>{`
        /* Swiper arrows */
        .brands-swiper .swiper-button-next,
        .brands-swiper .swiper-button-prev {
          color: #000;
        }

        /* Card hover effect */
        /* ===== CAR CARD SIZE ===== */
        .car-card {
        height: 420px;        /* más grande */
        }

        .car-image {
        width: 100%;
        height: 100%;
        object-fit: contain;    /* mantiene proporción sin deformar */
        transition: transform 0.6s ease;
        }

        /* zoom suave en hover */
        .car-card:hover .car-image {
        transform: scale(1.05);
        }

        /* overlay con opacidad */
        .car-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.35);
        opacity: 0;
        transition: opacity 0.4s ease;
        z-index: 1;
        }

        .car-card:hover .car-overlay {
        opacity: 1;
        }

        /* contenido del hover */
        .car-hover-content {
        z-index: 2;
        opacity: 0;
        transform: translateY(15px);
        transition: all 0.4s ease;
        }

        .car-card:hover .car-hover-content {
        opacity: 1;
        transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Brands;
