import { useState } from "react"
import './css/custom.css'

import ChecklistSection from "./ServiciosBestune"
import ChecklistSectionJim from "./ServiciosJim"

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
        <section className="big-section overflow-hidden bg-gradient-top-very-light-gray">
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
                                        <h4 class="text-uppercase fw-600 text-dark-gray md-lh-60 mb-0">Servicio de mantenimiento BESTUNE
                                        </h4>
                                        <p className="text-dark fs-18">
                                            En BESTUNE nos especializamos en brindar excelentes servicios Postventa, para garantizar que tu BESTUNE se mantenga en óptimas condiciones en todo momento.
                                        </p>
                                        <a href="#" class="btn btn-dark-gray mt-4 btn-large btn-rounded d-table d-lg-inline-block lg-mb-15px md-mx-auto">Conoce nuestro plan de mantenimiento por kilometraje</a>

                                        <p className="mt-3 mb-0 fs-12">
                                            *Bestune México se reserva el derecho de realizar modificaciones en la información presentada sin previo aviso.
                                        </p>
                                    </div>
                                    <div class="col-xxl-6 col-xl-6 col-lg-6 ">
                                        <ChecklistSection />
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : (
                        <section class="big-section ps-4 pe-4 sm-ps-0 sm-pe-0 pt-0">
                            <div class="container-fluid">
                                <div class="row align-items-center justify-content-center flex-column-reverse flex-md-row">
                                    <div class="col-xl-6 col-lg-6 md-mb-50px sm-mb-30px">
                                        <ChecklistSectionJim />
                                    </div>
                                    <div class="col-xl-6 col-lg-6 md-mb-50px sm-mb-30px p-5">
                                        <h4 class="text-uppercase fw-600 text-dark-gray md-lh-60 mb-0">Servicio de mantenimiento JIM
                                        </h4>
                                        <p className="text-dark fs-18">
                                            Confía en nosotros para seguir el programa de mantenimiento y reserva tu cita. Permítenos encargarnos de todo. </p>
                                        <a href="#" class="btn btn-dark-red bg-red mt-4 btn-large btn-rounded d-table d-lg-inline-block lg-mb-15px md-mx-auto">Conoce nuestro plan de mantenimiento por kilometraje</a>

                                        <p className="mt-3 mb-0 fs-12">*JIM se reserva el derecho de realizar modificaciones en la información presentada sin previo aviso
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