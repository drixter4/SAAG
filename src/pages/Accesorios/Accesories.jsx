import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import './accesorios.css'
import Loader from "../../components/Loader/Loader";
import Grid from "./components/Grid";


export default function Accesorios() {
  return (
    <>
      <Loader/>
      <Navbar />
      <Grid/>
      <Footer />
    </>
  );
}