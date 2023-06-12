import React from "react";
import "../NavBar/Nav.css";

export const Nav = ({
  ScrollToBackground1,
  ScrollToTecnologias,
  ScrollToProyectos,
  ScrollToHagamoslo,
}) => {
  return (
    <nav id="nav" className="navBar">
      <div>
        <img
          className="logotype"
          src="./img/logotipo.png"
          alt="Logo personal"
        />
      </div>
      <div className="btns">
        <button
          className="btn"
          onClick={() => {
            ScrollToBackground1();
          }}
        >
          Sobre Mi
        </button>
        <button className="btn" onClick={ScrollToTecnologias}>
          Tecnologías
        </button>
        <button className="btn" onClick={ScrollToProyectos}>
          Proyectos
        </button>
        <button className="btn2 btnHover" onClick={ScrollToHagamoslo}>
          Contáctame
        </button>
      </div>
    </nav>
  );
};
