import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import Header from "./components/Header";
import './home.css'

import Brands from "./components/Brands";
import Loader from "../../components/Loader/Loader";
import Services from "./components/Services";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <>
      <Loader/>
      <Navbar />
      <Header />
      <Brands />
      <Services />
      <Blog/>
      <Footer />
    </>
  );
}