import React from "react";
import { Contactos } from "../components/contactarComponents/Contactos";
import { FormCorreo } from "../components/contactarComponents/FormCorreo";

export const ContactarPage = () => {
  return (
    <>
      <div className="container justify-content-center text-center">
        <h2>Hola, ¿Te gustaria contactarme? 😉</h2>
      </div>
      <div className="container mt-2">
        <h4>Aquí te dejo mi contacto:</h4>
        <div className="ms-5">
          <Contactos />
        </div>
        <br />
        <h4>¡Escribeme un correo! Estoy a tus servicios.</h4>
        <FormCorreo />
      </div>
    </>
  );
};
