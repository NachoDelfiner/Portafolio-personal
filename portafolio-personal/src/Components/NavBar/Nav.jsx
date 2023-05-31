import React from "react";
import "../NavBar/Nav.css";

export const Nav = () => {
  return (
    <div className="navBar">
      <div>
        <img
          className="logotype"
          src="./img/logotipo.png"
          alt="Logo personal"
        />
      </div>
      <div className="btns">
        <button className="btn">Sobre Mi</button>
        <button className="btn">Tecnologias</button>
        <button className="btn">Proyectos</button>
        <button className="btn2">Contactame</button>
      </div>
    </div>
  );
};
