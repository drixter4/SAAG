import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import './accesorios.css'
import Loader from "../../components/Loader/Loader";
import CarDetailComponent from "./components/CarDetailComponent";


export default function CarDetail() {
  return (
    <>
      <Loader/>
      <Navbar />
      <CarDetailComponent/>
      <Footer />
    </>
  );
}