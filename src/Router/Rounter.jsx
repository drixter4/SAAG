import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import { Contact } from "../pages/Contact/Contact";
import Garantia from "../pages/Garantia/Garantia";
import Mantenimiento from "../pages/Mantenimiento/Mantenimiento";
import ScrollToTop from "../components/ScrollTop/ScrollTop";
import Seguro from "../pages/Seguro/Seguro";
import Distribuidores from "../pages/Distribuidores/Seguro";
import Linea800 from "../pages/Linea800/Linea800";
import Accesorios from "../pages/Accesorios/Accesories";
import CarsGrid from "../pages/CarsGrid/CarsGrid";
import CarDetail from "../pages/CarDetail/CarDetail";

// import { Contact } from "../pages/Contact";

export default function AppRouter() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/garantia" element={<Garantia />} />
        <Route path="/mantenimiento" element={<Mantenimiento />} />
        <Route path="/distribuidores" element={<Distribuidores />} />
        <Route path="/seguro" element={<Seguro />} />
        <Route path="/asistencia" element={<Linea800 />} />
        
        

        <Route path="/seguro" element={<Seguro />} />
        <Route path="/distribuidores" element={<Distribuidores />} />

        <Route path="/accesorios" element={<Accesorios />} />
        <Route path="/autos/:brand" element={<CarsGrid />} />

        <Route path="/autos/:brand/:id" element={<CarDetail />} />

      </Routes>
    </>
  );
}
