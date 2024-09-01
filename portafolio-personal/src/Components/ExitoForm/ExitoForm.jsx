import React from "react";
import "../ExitoForm/ExitoForm.css";
import ok from "../../icons/ok.svg";

export const ExitoForm = () => {
  return (
    <div className="ExitoForm">
      <div className="violet">
        <p className="aprobado">Formulario aprobado</p>
      </div>
      <div className="white">
        <img className="ok" src={ok} alt="form enviado" />
        <p className="exitoEnvio">
          Tu formulario fue enviado con exito, <br /> excelente!{" "}
        </p>
        <p className="gracias">Gracias! 🎉</p>
      </div>
    </div>
  );
};
