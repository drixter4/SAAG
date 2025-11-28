export default function Footer() {

    return (
        <>
            <footer className="bg-dark-gray pb-30px">
                <div className="container">
                    <div className="row mb-5 xs-mb-30px">
                        <div className="col-xl-5 col-md-7 sm-mb-30px order-2 order-xl-1">
                            <h3 className="text-white fw-600 mb-30px ls-minus-2px">
                                Hotel Perla y Olivo
                            </h3>
                            <div className="row">
                                <div className="col-xxl-5 col-sm-6 sm-mb-20px">
                                    <span className="fs-18 fw-500 text-white d-block">Contactanos</span>
                                    <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                                </div>
                                <div className="col-xxl-5 col-sm-6">
                                    <span className="fs-18 fw-500 text-white d-block"
                                    >Llamanos</span>
                                    <a href="tel:1800222000">1 800 222 000</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6 order-3 order-md-2">
                            <span className="fs-18 fw-500 d-block text-white mb-5px"
                            >Informacion </span>
                            <ul>
                                <li><a href="demo-green-energy-about.html">Nosotros</a></li>
                                <li>
                                    <a href="demo-green-energy-services.html">Habitaciones</a>
                                </li>
                                <li>
                                    <a href="demo-green-energy-project.html">Amenidades</a>
                                </li>
                                <li><a href="demo-green-energy-blog.html">Contacto</a></li>
                                <li><a href="demo-green-energy-blog.html">Reserva ahora</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-6 order-3 order-md-3">
                            <span className="fs-18 fw-500 d-block text-white mb-5px">Habitaciones</span>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">Hab example</a>
                                </li>
                                <li>
                                    <a href="http://www.twitter.com" target="_blank">Hab example</a>
                                </li>
                                <li>
                                    <a href="http://www.dribbble.com" target="_blank">Hab example</a>
                                </li>
                                <li>
                                    <a href="http://www.instagram.com" target="_blank">Hab example</a>
                                </li>
                                <li>
                                    <a href="http://www.linkedin.com" target="_blank">Hab example</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 order-1 order-xl-4 lg-mb-30px">
                            <a href="demo-green-energy.html" className="footer-logo"
                            ><img
                                    src="images/CODE.png"
                                    data-at2x="images/CODE.png"
                                    alt=""
                                /></a>
                        </div>
                    </div>
                    <div
                        className="row g-0 border-top border-color-transparent-white-light"
                    ></div>
                </div>
            </footer>

            <div className="scroll-progress d-none d-xxl-block">
                <a href="#" className="scroll-top" aria-label="scroll">
                    <span className="scroll-text">Scroll</span><span className="scroll-line"><span className="scroll-point"></span></span>
                </a>
            </div>
        </>
    );
}