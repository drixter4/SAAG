import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function CarDetailComponent() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    fetch(`https://bestune.codeglider.com.mx/api/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);

        if (data.colors?.length) {
          setSelectedColor(data.colors[0]);
        }
      })
      .catch((err) => console.error("Error loading car", err));
  }, [id]);

  if (!car) return <p className="text-center py-5">Cargando...</p>;

  return (
    <>
      {/* ================= HERO ================= */}
      <section>
        <img
          src={car.banner_image}
          alt={car.name}
          style={{
            width: "100%",
            height: "80vh",
            objectFit: "cover",
          }}
        />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="pt-60px pb-60px">
        <div className="container">
          <div className="row align-items-start">
            {/* ===== LEFT: GALLERY ===== */}
            <div className="col-lg-6 mb-40px">
              <Swiper spaceBetween={20}>
                {car.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt=""
                      style={{
                        width: "100%",
                        height: "420px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* ===== RIGHT: INFO ===== */}
            <div className="col-lg-6">
              <h2 className="fw-600 mb-10px">{car.name}</h2>

              <p className="mb-25px text-muted">
                Conoce nuestro sedán B70. Conduce con mayor seguridad.
              </p>

              {/* TECHNICAL SHEETS */}
              <h6 className="fw-600 mb-10px">Fichas técnicas</h6>
              <ul className="mb-30px">
                {car.technical_sheets.map((sheet) => (
                  <li key={sheet.id}>
                    <a href={sheet.url} target="_blank" rel="noreferrer">
                      Modelo {sheet.year}
                    </a>
                  </li>
                ))}
              </ul>

              {/* FEATURES */}
              <div className="row">
                {car.features.map((feature) => (
                  <div key={feature.id} className="col-md-6 mb-20px">
                    <div
                      style={{
                        border: "1px solid #e5e5e5",
                        padding: "20px",
                        borderRadius: "10px",
                        height: "100%",
                      }}
                    >
                      {feature.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== INTERIORES =================== */}
      {car.colors.length > 0 && (
        <section className="pt-80px pb-80px bg-very-light-gray">
          <div className="container">
            <div className="row align-items-start">
              {/* ===== LEFT: INTERIOR IMAGES ===== */}
              <div className="col-lg-6 mb-40px">
                {/* COLOR SELECTOR */}
                <div className="d-flex align-items-center mb-20px gap-15px">
                  {car.colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: color.hex_code,
                        border:
                          selectedColor?.id === color.id
                            ? "3px solid #000"
                            : "1px solid #ccc",
                        cursor: "pointer",
                      }}
                      title={color.name}
                    />
                  ))}
                </div>

                {/* INTERIOR GALLERY */}
                <Swiper spaceBetween={20}>
                  {selectedColor?.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt=""
                        style={{
                          width: "100%",
                          height: "420px",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* ===== RIGHT: INTERIOR FEATURES ===== */}
              <div className="col-lg-6">
                <h3 className="fw-600 mb-25px">Interiores</h3>

                <ul className="list-style-02">
                  {car.interior_features.map((feature, i) => (
                    <li key={i} className="mb-10px">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =================== SECURITY =================== */}
      {car.security_images?.length > 0 && (
        <section className="pt-80px pb-60px bg-very-light-gray">
          <div className="container">
            <h4 className="alt-font fw-600 text-center mb-40px">Seguridad</h4>

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop
              spaceBetween={30}
              slidesPerView={1}
              className="security-swiper"
            >
              {car.security_images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Seguridad ${index + 1}`}
                    className="w-100"
                    style={{
                      height: "520px",
                      objectFit: "cover",
                      borderRadius: "14px",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}

      {/* =================== DOCUMENTS =================== */}
      <section className="pb-80px">
        <div className="container">
          <div className="row justify-content-center">
            {/* Brochure */}
            {car.brochure && (
              <div className="col-md-4 mb-20px">
                <a
                  href={car.brochure}
                  target="_blank"
                  className="d-block text-center p-40px bg-white border-radius-10px box-shadow hover-box"
                >
                  <i className="bi bi-file-earmark-pdf fs-50 text-base-color mb-15px d-block"></i>
                  <h6 className="fw-600 mb-5px">Brochure</h6>
                  <span className="fs-14 text-medium-gray">
                    Descarga el folleto
                  </span>
                </a>
              </div>
            )}

            {/* Manual */}
            {car.user_manual && (
              <div className="col-md-4 mb-20px">
                <a
                  href={car.user_manual}
                  target="_blank"
                  className="d-block text-center p-40px bg-white border-radius-10px box-shadow hover-box"
                >
                  <i className="bi bi-book fs-50 text-base-color mb-15px d-block"></i>
                  <h6 className="fw-600 mb-5px">Manual de usuario</h6>
                  <span className="fs-14 text-medium-gray">
                    Conoce tu vehículo
                  </span>
                </a>
              </div>
            )}

            {/* Distribuidores */}
            {car.distributor_image && (
              <div className="col-md-4 mb-20px">
                <div className="text-center p-40px bg-white border-radius-10px box-shadow">
                  <img
                    src={car.distributor_image}
                    alt="Distribuidores"
                    style={{
                      maxHeight: "90px",
                      objectFit: "contain",
                      marginBottom: "15px",
                    }}
                  />
                  <h6 className="fw-600 mb-5px">Distribuidores</h6>
                  <span className="fs-14 text-medium-gray">
                    Encuentra tu agencia
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <br />
      </section>
    </>
  );
}
