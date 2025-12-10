import "./css/HeroBestune.css";


export default function Beneficios({Brand}) {
    return (
        <section className='hero-section mt-5'>
            <div className="container-hero">
                <div className="row align-items-center ">

                    <div
                        className="col-lg-6 hero-image-wrapper text-center"
                    >
                        <img
                            src="/images/SAAG/servicios-01.png"
                            alt="Bestune B70S"
                            className="hero-car "
                        />
                    </div>
                    {/* Texto */}
                    <div
                        className="col-lg-6 col-md-10 hero-text"

                    >


                        <h1 className="hero-title">
                            Beneficios
                        </h1>

                        {/* 1 */}
                        <div className="d-flex align-items-center mb-1">
                            <i className="bi bi-car-front-fill me-3 text-dark mt-1 fs-20"></i>
                            <p className="text-dark m-0 fs-20">
                                Disfruta de la tranquilidad que te brinda un servicio de seguro de autos con atención especializada
                            </p>
                        </div>

                        {/* 2 */}
                        <div className="d-flex align-items-center mb-1">
                            <i className="bi bi-car-front-fill me-3 text-dark mt-1 fs-20"></i>
                            <p className="text-dark m-0 fs-20">
                                Nuestro equipo de expertos se encargará de la reparación de tu vehículo utilizando únicamente piezas y refacciones que cumplen con nuestros estándares de calidad
                            </p>
                        </div>

                        {/* 3 */}
                        <div className="d-flex align-items-center mb-5">
                            <i className="bi bi-car-front-fill me-3 text-dark mt-1 fs-20"></i>
                            <p className="text-dark m-0 fs-20">
                                Contamos con una amplia variedad de coberturas que se ajustan a tus necesidades
                            </p>
                        </div>

                        <a href="/distribuidores" className={`btn ${Brand ==='Bestune' ? 'btn-dark' : 'btn-dark-red'} hero-button`}>
                            Contacta a tu distribuidor
                        </a>
                    </div>

                    {/* Auto */}

                </div>
            </div>
        </section>
    );
}