import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav/Navbar";
import Header from "./components/Header";
import HeroBestune from "./components/HeroBestune";
import Services from "./components/Services";
import Types from "./components/Types";

export default function Seguro() {
    return(
            <>
                <Navbar />
                <Header />
                <Types />
                <Services />
                <section>
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-10 text-dark" style={{ lineHeight: '19px' }}>
    
                            <div class=" fs-14" >
                                <p class="mb-0 mt-0">
                                    *El precio aquí establecido corresponde a precios de lista en Moneda Nacional de los Estados Unidos Mexicanos sujeto a cambio sin previo aviso.
                                </p>
                                <p class="mb-0 mt-0">
                                    *Las características pueden variar según la versión disponible.
                                </p>
                                <p class="mb-0 mt-0">
                                    *Las imágenes mostradas son usadas únicamente como referencia, los accesorios son elementos adicionales. Algunas versiones, colores o equipamientos pueden variar. Para mayor información sobre versiones, equipamiento, colores, especificaciones y disponibilidad del producto, se recomienda acudir a su Distribuidor Autorizado dentro de la República Mexicana.
                                </p>
                                <p class="mb-0 mt-0">
                                    *El equipamiento puede cambiar de acuerdo con las versiones del vehículo. Para conocer la disponibilidad de nuestros productos, versiones, modelos y equipamientos, así como obtener mayor información, se recomienda acudir a su distribuidor autorizado dentro de la República Mexicana.
                                </p>
                                <p class="mb-0">
                                    Este es el sitio oficial de SAAG AUTOMOTIVE, S.A. de C.V. Algunas versiones y equipamientos son opcionales, por lo que los costos de los vehículos aquí ofertados pueden variar y podrían tener un costo extra. Para conocer la disponibilidad de los productos y obtener mayor información se recomienda acudir a su Distribuidor autorizado dentro de la República Mexicana.
                                </p>
                            </div>
    
                        </div>
                    </div>
    
                </section>
                <Footer contact={false} />
            </>
    );
}