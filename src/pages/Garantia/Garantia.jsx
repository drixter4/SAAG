import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Types from "./components/Types";
import LegalText from "../../components/LegalText/LegalText";

export default function Garantia() {
    return (
        <>
            <Navbar />
            <Header />
            <Types />
            <Services />
            <section>
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-10">
                            <LegalText />
                        </div>
                    </div>

            </section>
            <Footer contact={false} />

        </>
    );
}