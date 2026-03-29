import { useState } from "react"
import './css/custom.css'

export default function Types() {
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
        <section className=" overflow-hidden bg-gradient-top-very-light-gray">
            <div className="">
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

                        <section class="big-section ps-4 pe-4 sm-ps-0 sm-pe-0 pt-0">
                            <div class="container-fluid">
                                <div class="row align-items-center justify-content-center">
                                    <div class="col-xxl-6 col-xl-6 col-lg-6 ">
                                        <p className="text-dark fs-18">
                                            En BESTUNE nos especializamos en brindar excelentes servicios Postventa, para garantizar que tu BESTUNE se mantenga en óptimas condiciones en todo momento.
                                        </p>
                                        <h4 class="text-uppercase fw-600 text-dark-gray md-lh-60 mb-0">Garantía por 7 años / 150 mil km.
                                        </h4>
                                        <a href="#" class="btn btn-dark-gray mt-4 btn-large btn-rounded d-table d-lg-inline-block lg-mb-15px md-mx-auto">Encuentra tu distribuidor más cercano</a>

                                        <p className="mt-3 mb-0 fs-12">*Bestune México se reserva el derecho de realizar modificaciones en la información presentada sin previo aviso.</p>
                                        <p className="mt-0 fs-12">*Para mayor información, consultar términos y condiciones estipulados en la póliza de garantía.</p>
                                    </div>
                                    <div class="col-xxl-6 col-xl-6 col-lg-6 ">
                                        <img class="w-100" src="/images/SAAG/Multimedia-4.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : (
                        <section class="big-section ps-4 pe-4 sm-ps-0 sm-pe-0 pt-0">
                            <div class="container-fluid">
                                <div class="row align-items-center justify-content-center flex-column-reverse flex-md-row">
                                    <div class="col-xl-6 col-lg-6 md-mb-50px sm-mb-30px">
                                        <img class="w-100" src="/images/SAAG/Multimedia-5.jpg" alt="" />
                                    </div>
                                    <div class="col-xl-6 col-lg-6 md-mb-50px sm-mb-30px p-5">
                                        <p className="text-dark fs-18">
                                            En JIM nos especializamos en brindar excelentes servicios Postventa, para garantizar que tu JIM se mantenga en óptimas condiciones en todo momento.                                        </p>
                                        <h4 class="text-uppercase fw-600 text-dark-gray md-lh-60 mb-0">Garantía por 5 años / 100 mil km.
                                        </h4>
                                        <a href="#" class="btn btn-dark-red bg-red mt-4 btn-large btn-rounded d-table d-lg-inline-block lg-mb-15px md-mx-auto">Encuentra tu distribuidor más cercano</a>

                                        <p className="mt-3 mb-0 fs-12">*JIM México se reserva el derecho de realizar modificaciones en la información presentada sin previo aviso.
                                        </p>
                                        <p className="mt-0 fs-12">*Imágenes de referencia: los accesorios son elementos adicionales.
                                        </p>

                                    </div>

                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </div>


        </section>
    )
}