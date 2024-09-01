import React from "react";
import "../NotFound/NotFound.css";
import notFound from "../../icons/404.svg";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="bodyNotFound">
      <img className="imgNotFound" src={notFound} alt="pagina de error" />
      <p className="parrafoNotFound">
        Parece que estas perdid@ <br /> te ayudo a volver 👇🏻
      </p>
      <Link to="/" className="btnNotFound">
        Volvé al Home
      </Link>
    </div>
  );
};
