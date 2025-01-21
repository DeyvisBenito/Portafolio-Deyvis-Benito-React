import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PortafolioPage } from "./pages/PortafolioPage";
import { ProyectosPage } from "./pages/ProyectosPage";
import { ContactarPage } from "./pages/ContactarPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/custom.css'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<PortafolioPage />}/>
            <Route path="/proyectos" element={<ProyectosPage />}/>
            <Route path="/contactar" element={<ContactarPage />}/>
            <Route path="/*" element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
