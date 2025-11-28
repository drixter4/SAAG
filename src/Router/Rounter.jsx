import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

// import { Contact } from "../pages/Contact";

export default function AppRouter() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
  );
};
