import React from "react";
import { TarjetaProyecto } from "../components/TarjetaProyecto";

export const ProyectosPage = () => {
  return (
    <>
      <div className="container justify-content-center text-center">
        <h1>Mis proyectos</h1>
        <p>Aqui encontrarás más de los proyectos en los que he trabajado.</p>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center mb-5">
          <TarjetaProyecto />
        </div>
      </div>
    </>
  );
};
