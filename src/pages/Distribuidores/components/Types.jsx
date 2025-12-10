import { useState } from "react"
import './css/custom.css'

import ChecklistSectionJim from "./ServiciosJim"
import HeroBestune from "./HeroBestune"
import Beneficios from "./Beneficios"

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
        <div className="mt-5 overflow-hidden bg-gradient-top-very-light-gray">
            <div className="">
                <div className="row align-items-center ">
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
                        <>
                        <HeroBestune Brand={'Bestune'}/>
                        <Beneficios Brand={'Bestune'}/>
                        </>
                    ) : (
                        <>
                        <HeroBestune  Brand={'Jim'}/>
                        <Beneficios Brand={'Jim'}/>
                        </>
                    )}
                </div>
            </div>


        </div>
    )
}