import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav/Navbar";
import ContactFormSection from "./components/ContactFormSection";
import Header from "./components/Header";

export const Contact = () => {
    return (
        <>
            <Navbar transparent={false} />  
            <Header />
            <ContactFormSection/>
            <Footer contact={false}/>

        </>
    );
}