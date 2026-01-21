import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

export default function CarsGrid() {
  const { brand } = useParams(); // bestune | jim
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://bestune.codeglider.com.mx/api/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Error loading cars", err));
  }, []);

  const filteredCars = useMemo(() => {
    return cars.filter(
      (car) => car.brand.toLowerCase() === brand.toLowerCase()
    );
  }, [cars, brand]);

  const getCarImage = (car) => {
    if (car.images && car.images.length > 0) {
      return car.images[0];
    }
    return car.banner_image;
  };

  return (
    <div>
      <Loader />
      <Navbar />
      {/* TITLE */}
      <section
        className="page-title-center-alignment cover-background top-space-padding"
        style={{ backgroundColor: "#191919ff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center page-title-extra-large">
              <h1 className="alt-font fw-700 text-red mb-10px">
                {brand.toUpperCase()}
              </h1>
              <span className="fs-18 text-medium-gray">
                Descubre nuestros modelos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="position-relative py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="col mb-40px categories-style-01 text-center"
              >
                <div className="categories-box">
                  <div className="icon-box position-relative mb-15px">
                    <img
                      src={getCarImage(car)}
                      alt={car.name}
                      style={{
                        width: "100%",
                        height: "280px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <a href={`/autos/${car.brand}/${car.id}`}>
                    <h6 className="alt-font fw-600 text-dark-gray mb-5px">
                      {car.name}
                    </h6>
                  </a>

                  <span className="fs-14 text-medium-gray">{car.brand}</span>

                  <div className="mt-15px d-flex justify-content-center gap-10px">
                    {car.brochure && (
                      <a
                        href={car.brochure}
                        target="_blank"
                        className="btn btn-small btn-outline-dark"
                      >
                        Brochure
                      </a>
                    )}

                    {car.user_manual && (
                      <a
                        href={car.user_manual}
                        target="_blank"
                        className="btn btn-small btn-outline-dark"
                      >
                        Manual
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {filteredCars.length === 0 && (
              <p className="text-center w-100 py-5">No hay autos disponibles</p>
            )}
          </div>
        </div>
        <br /> <br />
      </section>
      <Footer />
    </div>
  );
}
