import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PortafolioPage } from "./pages/PortafolioPage";
import { ProyectosPage } from "./pages/ProyectosPage";
import { ContactarPage } from "./pages/ContactarPage";
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
