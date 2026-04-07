import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav/Navbar";
import Header from "./components/Header";
import HeroLinea from "./components/HeroLinea";
import Section1 from "./components/Section1";
import LegalText from "../../components/LegalText/LegalText";

export default function Linea800() {
    return (
        < >
            <Navbar />
            <Header />
            <Section1 />
            <HeroLinea />
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10">
                            <LegalText />
                        </div>
                    </div>
                </div>
            </section>
            <Footer contact={false} />
        </>
    );
}