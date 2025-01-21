import React from "react";

export const Habilidades = () => {
  return (
    <div id="habilidades">
      <div className="row justify-content-md-center align-content-center text-center">
        <div className="col-12 col-sm-6 col-md-3 bg-white redondeo">
          <i className="bi-hdd-rack-fill"></i>
          <h3>Back-End</h3>
          <p>
            Trabajo en el desarrollo de las funcionalidades de las aplicaciones
            ASP.NET y NodeJs
          </p>

          <p className="text-primary cabecera">Stack:</p>
          
            <ul>
              <li>ASP.Net Core</li>
              <li>NodeJS</li>
              <li>SQL Server o MySql</li>
            </ul>
          

          <p className="text-primary cabecera">Experiencia:</p>

          <ul>
            <li>ASP.NET Core</li>
            <li>Entity Framework</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Blazor</li>
            <li>SQLServer/MySql</li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-3 bg-white redondeo">
          <i className="bi-code-slash"></i>
          <h3>Front-End</h3>
          <p>
            Puedo crear Front-Ends robustos que cumplen con los requerimientos
            principales.
          </p>

          <p className="text-primary cabecera">Stack:</p>
          
            <ul>
              <li>Blazor</li>
              <li>Bootstrap</li>
              <li>React básico</li>
            </ul>
          

          <p className="text-primary cabecera">Experiencia:</p>
          <ul>
            <li>Bootstrap</li>
            <li>React</li>
            <li>MUI</li>
            <li>MarkDown</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
