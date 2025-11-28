import { useState } from "react"
import './css/custom.css'

export default function Brands() {
    const [Brand, setBrand] = useState('BESTUNE')
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [showContent, setShowContent] = useState(true)
    const [animationDirection, setAnimationDirection] = useState('right')

    const handleBrandChange = (newBrand, direction = 'right') => {
        if (newBrand !== Brand && !isTransitioning) {
            setIsTransitioning(true)
            setShowContent(false)
            setAnimationDirection(direction)

            setTimeout(() => {
                setBrand(newBrand)
                setTimeout(() => {
                    setShowContent(true)
                    setIsTransitioning(false)
                }, 50)
            }, 300)
        }
    }

    return (
        <section className="big-section overflow-hidden bg-gradient-top-very-light-gray">
            <div className="container">
                <div className="row align-items-center mb-6">
                    <div className="col-md-12 last-paragraph-no-margin">
                        <h2 className="text-dark-gray fw-600 ls-minus-1px mb-20px text-center">SAAG AUTOMOTIVE</h2>
                        <h6 class="w-100 sm-w-100 text-center mb-3">Encuentra la marca ideal para ti.</h6>

                    </div>
                    <div className="col-md-4 last-paragraph-no-margin"></div>
                    <div className="col-md-2 last-paragraph-no-margin text-dark text-center">
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                handleBrandChange('BESTUNE', 'left')
                            }}
                            className={`btn btn-large d-table d-lg-inline-block lg-mb-15px md-mx-auto button-size ${Brand === 'BESTUNE' ? 'btn-black active' : 'btn-transparent-light-gray'
                                }`}
                        >
                            BESTUNE
                        </button>
                    </div>
                    <div className="col-md-2 last-paragraph-no-margin text-dark text-center">
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                handleBrandChange('JIM', 'right')
                            }}
                            className={`btn btn-large d-table d-lg-inline-block lg-mb-15px md-mx-auto button-size ${Brand === 'JIM' ? 'btn-black active' : 'btn-transparent-light-gray'
                                }`}
                        >
                            JIM
                        </button>
                    </div>
                    <div className="col-md-4 last-paragraph-no-margin"></div>
                </div>

                <div className={`brand-content ${showContent ? 'visible' : 'hidden'} ${animationDirection}`}>
                    {Brand === 'BESTUNE' ? (
                        <div className="row align-items-center">
                            <div className="col-12 position-relative" data-anime='{ "el": "childs", "translateX": [100, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 200, "easing": "easeOutQuad" }'>
                                <div className="outside-box-right-30">
                                    <div className="swiper image-gallery-style-05" data-slider-options='{ "slidesPerView": 1, "spaceBetween": 25, "loop": true, "pagination": { "el": ".slider-three-slide-pagination", "clickable": true, "dynamicBullets": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "992": { "slidesPerView": 4 }, "768": { "slidesPerView": 3 }, "320": { "slidesPerView": 2 } }, "effect": "slide" }' data-gallery-box="true">
                                        <div className="swiper-wrapper">
                                            {[...Array(8)].map((_, index) => (
                                                <div key={index} className="swiper-slide transition-inner-all">
                                                    <div className="gallery-box">
                                                        <a href="https://placehold.co/600x745" data-group="lightbox-group-gallery-item-5" title="Lightbox gallery image title">
                                                            <div className="position-relative bg-dark-gray border-radius-6px overflow-hidden">
                                                                <img src="https://placehold.co/600x745" alt="" />
                                                                <div className="d-flex flex-column align-items-center justify-content-center position-absolute top-0px left-0px w-100 h-100 gallery-hover move-bottom-top">
                                                                    <p className="model-car mb-3 fs-5 fw-bold">
                                                                        {'Nombre'}
                                                                    </p>
                                                                    <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                                                                        <div className="d-flex align-items-center gap-2 text-white cursor-pointer">
                                                                            <i className="feather icon-feather-info"></i>
                                                                            <p className="mb-0 text-decoration-underline">Conoce más</p>
                                                                        </div>
                                                                        <div className="d-flex align-items-center gap-2 text-white cursor-pointer">
                                                                            <i className="feather icon-feather-file-text"></i>
                                                                            <p className="mb-0 text-decoration-underline">Cotiza ahora</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="row align-items-center">
                            <div className="col-12 position-relative" data-anime='{ "el": "childs", "translateX": [100, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 200, "easing": "easeOutQuad" }'>
                                <div className="outside-box-right-30">
                                    <div className="swiper image-gallery-style-05" data-slider-options='{ "slidesPerView": 1, "spaceBetween": 25, "loop": true, "pagination": { "el": ".slider-three-slide-pagination", "clickable": true, "dynamicBullets": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "992": { "slidesPerView": 4 }, "768": { "slidesPerView": 3 }, "320": { "slidesPerView": 2 } }, "effect": "slide" }' data-gallery-box="true">
                                        <div className="swiper-wrapper">
                                            {[...Array(8)].map((_, index) => (
                                                <div key={index} className="swiper-slide transition-inner-all">
                                                    <div className="gallery-box">
                                                        <a href="https://placehold.co/600x745" data-group="lightbox-group-gallery-item-5" title="Lightbox gallery image title">
                                                            <div className="position-relative bg-dark-gray border-radius-6px overflow-hidden">
                                                                <img src="https://placehold.co/600x745" alt="" />
                                                                <div className="d-flex flex-column align-items-center justify-content-center position-absolute top-0px left-0px w-100 h-100 gallery-hover move-bottom-top">
                                                                    <p className="model-car mb-3 fs-5 fw-bold">
                                                                        {'Nombre'}
                                                                    </p>
                                                                    <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                                                                        <div className="d-flex align-items-center gap-2 text-white cursor-pointer">
                                                                            <i className="feather icon-feather-info"></i>
                                                                            <p className="mb-0 text-decoration-underline">Conoce más</p>
                                                                        </div>
                                                                        <div className="d-flex align-items-center gap-2 text-white cursor-pointer">
                                                                            <i className="feather icon-feather-file-text"></i>
                                                                            <p className="mb-0 text-decoration-underline">Cotiza ahora</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>


        </section>
    )
}