export default function Map() {

    return (
        <section>
            <div className="container">
                <div className="row justify-content-center mb-3">
                    <div className="col-xl-5 col-lg-6 text-center">
                        <h2 className="text-dark-gray fw-600 ls-minus-2px">
                            Nuestra ubicación.
                        </h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.537146234106!2d-103.346446!3d20.673610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b04124a1c3b7%3A0x1c1b5f3c72e4a0!2sGuadalajara%2C%20Jalisco%2C%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1698500000000!5m2!1ses!2smx"
                            width="100%"
                            height="550"
                            style={{border: 0}}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}