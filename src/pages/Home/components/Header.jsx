import './css/custom.css'
export default function Header() {
  return (
    <section className="section-dark p-0 bg-dark-gray">
      <div
        className="swiper lg-no-parallax banner-size ipad-top-space-margin swiper-light-pagination"
        data-slider-options='{ "slidesPerView": 1, "loop": true, "parallax": true, "speed": 1000, "pagination": { "el": ".swiper-pagination-bullets", "clickable": true }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 4000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
      >
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide overflow-hidden">
            <div
              className="cover-background position-absolute top-0 start-0 banner-size"
              data-swiper-parallax="500"
              style={{ backgroundImage: "url('https://placehold.co/1921x938')" }}
            >
              <div className="opacity-light bg-gradient-sherpa-blue-black"></div>

            </div>
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide overflow-hidden">
            <div
              className="cover-background position-absolute top-0 start-0 banner-size"
              data-swiper-parallax="500"
              style={{ backgroundImage: "url('https://placehold.co/1921x938')" }}
            >
              <div className="opacity-light bg-gradient-sherpa-blue-black"></div>

            </div> 
          </div>

          {/* Slide 3 */}
          <div className="swiper-slide overflow-hidden">
            <div
              className="cover-background position-absolute top-0 start-0 banner-size"
              data-swiper-parallax="500"
              style={{ backgroundImage: "url('https://placehold.co/1921x938')" }}
            >
              <div className="opacity-light bg-gradient-sherpa-blue-black"></div>

            </div>
          </div>
        </div>

        {/* Pagination and Navigation */}
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>

        {/* <div className="slider-one-slide-prev-1 icon-extra-large text-white swiper-button-prev slider-navigation-style-06 d-none d-sm-inline-block">
          <i className="line-icon-Arrow-OutLeft"></i>
        </div>
        <div className="slider-one-slide-next-1 icon-extra-large text-white swiper-button-next slider-navigation-style-06 d-none d-sm-inline-block">
          <i className="line-icon-Arrow-OutRight"></i>
        </div> */}
      </div>
    </section>
  );
}