import { useEffect, useState } from "react"

const API_URL = "https://bestune.codeglider.com.mx/api/cars"

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5)
}

export default function Blog() {
  const [cars, setCars] = useState([])

  /* ===============================
     FETCH + RANDOM SELECTION
  =============================== */
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const withImages = data.filter(car => car.images?.length > 0)
        const withoutImages = data.filter(car => !car.images || car.images.length === 0)

        const shuffledWithImages = shuffleArray(withImages)
        const shuffledWithoutImages = shuffleArray(withoutImages)

        const selectedCars = [
          ...shuffledWithImages,
          ...shuffledWithoutImages
        ].slice(0, 6)

        setCars(selectedCars)
      })
      .catch(err => console.error("Error fetching cars:", err))
  }, [])

  return (
    <section>
      <div className="container overlap-gap-section pb-3">

        {/* ===== TITLE ===== */}
        <div className="justify-content-center align-items-center mb-6">
          <div className="text-center">
            <h3 className="fw-600 text-dark-gray ls-minus-1px mb-0">
              Novedades
            </h3>
            <span className="fs-20 text-dark-gray fw-600">
              No te pierdas ni un solo detalle
            </span>
          </div>
        </div>

        {/* ===== GRID ===== */}
        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center">

          {cars.map(car => {
            const imageToShow =
              car.images?.length > 0
                ? car.images[0]
                : car.banner_image

            return (
              <div key={car.id} className="col mb-20px">
                <div className="services-box-style-01 hover-box">

                  <div className="position-relative box-image border-radius-6px overflow-hidden">
                    <a href={`/modelos/${car.id}`}>
                      <img
                        src={imageToShow}
                        alt={car.name}
                        className="w-100"
                        style={{
                          height: "280px",
                          objectFit: "contain",
                        //   backgroundColor: "#000"
                        }}
                      />

                      <div className="box-overlay bg-black-transparent-medium"></div>

                      <span className="d-flex justify-content-center align-items-center mx-auto icon-box absolute-middle-center z-index-1 w-65px h-65px rounded-circle border border-color-transparent-white border-1">
                        <i className="bi bi-arrow-right-short text-white icon-very-medium d-flex"></i>
                      </span>
                    </a>
                  </div>

                  <div className="p-25px last-paragraph-no-margin text-center">
                    <span className="fs-20 text-dark-gray fw-600">
                      {car.name}
                    </span>
                    <p className="lh-26">
                      {car.brand}
                    </p>
                  </div>

                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
