import React from "react";
import "../NavBar/Nav.css";

export const Nav = () => {
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
        <button className="btn">
          <a href="#background1">Sobre Mi</a>
        </button>
        <button className="btn">
          <a href="#tecnologias">Tecnologias</a>
        </button>
        <button className="btn">
          <a href="#proyectos">Proyectos</a>
        </button>
        <button className="btn2 btnHover">
          <a className="btnHover" href="#hagamoslo">
            Contactame
          </a>
        </button>
      </div>
    </nav>
  );
};
