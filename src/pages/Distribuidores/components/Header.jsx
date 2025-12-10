export default function Header() {
  return (
    <section className="p-0 bg-dark-gray">
      <div
        className="swiper lg-no-parallax media-screen md-h-600px sm-h-500px swiper-light-pagination ipad-top-space-margin "
        data-slider-options='{"slidesPerView":1,"loop":true,"parallax":true,"speed":1200,"autoplay":{"delay":4000,"disableOnInteraction":false},"pagination":{"el":".swiper-pagination-bullets","clickable":true},"navigation":{"nextEl":".slider-one-slide-next-1","prevEl":".slider-one-slide-prev-1"},"keyboard":{"enabled":true,"onlyInViewport":true},"effect":"slide"}'
      >
        <div className="swiper-wrapper">

          <div className="swiper-slide overflow-hidden">
            <div
              className="cover-background3 position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundImage: "url('/images/SAAG/Distribuidores-SAAG-1.jpg')" }}
              data-swiper-parallax="1000"
            >
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  background: "rgba(0, 0, 0, 0.4)",
                }}
              >
                <div className="container h-100" data-swiper-parallax="-300">
                  <div className="row align-items-center justify-content-center h-100 text-center">
                    <div className="col-xl-7 col-lg-9 col-md-10 position-relative text-white">



                      <span
                        className="opacity-7 fs-80 xs-fs-60 alt-font fw-700 text-shadow-extra-large ls-minus-2px mb-45px sm-mb-30px xs-mb-20px d-inline-block swiper-parallax-fancy-text"
                        data-fancy-text='{"effect":"rotate","string":["Distribuidores SAAG"]}'
                      ></span>


                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
