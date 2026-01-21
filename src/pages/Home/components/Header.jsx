import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/custom.css";

export default function Header() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;


    console.log("URL", API_URL)
    fetch(`${API_URL}/banners`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setBanners(data.data);
        } else {
          console.error("API returned error:", data);
        }
      })
      .catch((err) => console.error("Error fetching banners:", err));
  }, []);

  // Solo para debug si quieres ver los banners cargados
  useEffect(() => {
    console.log("Banners cargados:", banners);
  }, [banners]);

  return (
    <section className="section-dark p-0 bg-dark-gray">
      {banners.length > 0 ? (
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="banner-size"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div
                className="cover-background position-absolute top-0 start-0 banner-size"
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_API_URL.replace(
                    "/api",
                    "/storage"
                  )}/${banner.image_path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
              </div>
               <div className="opacity-light bg-gradient-sherpa-blue-black"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p style={{ textAlign: "center", padding: "2rem", color: "#fff" }}>No hay banners disponibles</p>
      )}
    </section>
  );
}
