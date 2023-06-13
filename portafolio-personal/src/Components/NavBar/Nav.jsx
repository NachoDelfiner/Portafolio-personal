import React from "react";
import "../NavBar/Nav.css";
import burger from "../../icons/burger.svg";
import { useState } from "react";

export const Nav = ({
  ScrollToBackground1,
  ScrollToTecnologias,
  ScrollToProyectos,
  ScrollToHagamoslo,
}) => {
  const [burgerVisible, setBurgerVisible] = useState(false);

  const handleBurger = () => {
    setBurgerVisible(!burgerVisible);
  };

  const closeBtns = () => {
    setBurgerVisible(false);
  };

  return (
    <nav id="nav" className="navBar">
      <div>
        <img
          className="logotype"
          src="./img/logotipo.png"
          alt="Logo personal"
        />
      </div>
      <div className="desplegable">
        <button className="btn-burger" onClick={handleBurger}>
          <img className="img-burger" src={burger} alt="boton hamburguesa" />
        </button>
        <div className={`btns ${burgerVisible ? "active" : ""}`}>
          <button
            className="btn"
            onClick={() => {
              ScrollToBackground1();
              closeBtns();
            }}
          >
            Sobre Mi
          </button>
          <button
            className="btn"
            onClick={() => {
              ScrollToTecnologias();
              closeBtns();
            }}
          >
            Tecnologías
          </button>
          <button
            className="btn"
            onClick={() => {
              ScrollToProyectos();
              closeBtns();
            }}
          >
            Proyectos
          </button>
          <button
            className="btn2"
            onClick={() => {
              ScrollToHagamoslo();
              closeBtns();
            }}
          >
            Contactame
          </button>
        </div>
      </div>
    </nav>
  );
};
