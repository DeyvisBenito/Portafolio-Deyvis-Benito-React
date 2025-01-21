import React from "react";
import { Presentacion } from "../components/portafolioComponents/Presentacion";
import { HerramientasImg } from "../components/portafolioComponents/HerramientasImg";
import { DescripcionPersonal } from "../components/portafolioComponents/DescripcionPersonal";
import { Habilidades } from "../components/portafolioComponents/Habilidades";
import { TarjetaProyecto } from "../components/TarjetaProyecto";

export const PortafolioPage = () => {
  return (
    <>
      <Presentacion />
      <HerramientasImg />

      <DescripcionPersonal />
      <Habilidades />

      <div className="text-center" style={{ paddingTop: "4rem" }}>
        <h1>Algunos de mis trabajos</h1>
        <p>Aqui puedes ver algunos de mis trabajos</p>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center mb-5">
          <TarjetaProyecto cantidad={3}/>
        </div>
      </div>
    </>
  );
};
