import React from "react";
import proyectos from "../utils/proyectos.json";

export const TarjetaProyecto = ({cantidad = proyectos.length}) => {
  return (
    <>
      {proyectos.length > 0 &&
        proyectos.slice(0, cantidad).map((proyecto, indice) => (
          <div className="col" key={indice}>
            <div className="card h-100">
              <div className="text-center">
                <img
                  src={proyecto.ImagenURL}
                  className="card-img-top fotoproyecto"
                  alt="Imagen de proyecto"
                />
              </div>
              <div className="card-body text-center justify-content-center">
                <h5 className="card-title">{proyecto.Nombre}</h5>
                <p className="card-text">{proyecto.Descripcion}</p>
              </div>
              <div className="card-footer text-center">
                <a
                  href={proyecto.UrlGithub}
                  className="btn btn-primary"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  Link GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
