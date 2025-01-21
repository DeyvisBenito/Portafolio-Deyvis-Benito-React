import React from "react";

export const Contactos = () => {
  return (
    <>
      <h5 className="ms-5">
        <strong>Correo Electrónico:</strong> deyvisbenito@gmail.com 📧 
      </h5>
      <h5 className="ms-5">
        <strong>Teléfono:</strong> +502 46172036 📲
      </h5>
      <h5 className="ms-5">
        <strong>GitHub:</strong>{" "}
        <a
          href="https://github.com/DeyvisBenito"
          className="githubLink"
          target="_blank"
          rel="nofollow noreferrer"
        >
          Deyvis Benito <i className="bi bi-github"></i>
        </a>
      </h5>
      <h5 className="ms-5">
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/deyvis-sa%C3%BAl-benito-medrano-00225a255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="nofollow noreferrer"
          className="linkedinLink"
        >
          Deyvis Saul Benito Medrano <i className="bi bi-linkedin"></i>
        </a>
      </h5>
    </>
  );
};
