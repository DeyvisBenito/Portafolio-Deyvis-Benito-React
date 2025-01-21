import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ToggleNavBar } from "./ToggleNavBar";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-2 ps-3">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand fw-semibold">
            Portafolio
          </Link>
          <ToggleNavBar />
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to='/proyectos' className="nav-link" aria-current="page">
                Proyectos
              </NavLink>
              <NavLink to='/contactar' className="nav-link">
                Contactar
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <hr className="mt-0"/>
    </>
  );
};
