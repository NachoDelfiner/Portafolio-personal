import React, { useState } from "react";
import { useForm } from "@formspree/react";
import "../ContactForm/ContactForm.css";
import cross from "../../icons/cross.svg";

export const ContactForm = ({ cerrarForm }) => {
  const [state, handleSubmit] = useForm("xknadrvp");
  const [valorInputNombre, setValorInputNombre] = useState("");
  const [valorInputEmail, setValorInputEmail] = useState("");
  const [msjErrorNombre, setMsjErrorNombre] = useState("");
  const [msjErrorEmail, setMsjErrorEmail] = useState("");
  const [mostrarMsjExito, setMostrarMsjExito] = useState(false);

  const handleFormSubmit = (e) => {
    // Evita el envio del formulario al apretar enviar sin antes ser evaluados los campos
    e.preventDefault();

    // Realiza la validación de los campos antes de enviar el formulario
    validacionNombre();
    validacionEmail();

    // Llama a handleSubmit() solo si no hay errores de validacion
    if (!msjErrorNombre && !msjErrorEmail) {
      handleSubmit(e);
      setMostrarMsjExito(true);
    }
  };

  // Cambia el estado del input nombre
  const handleInputNombre = (e) => {
    setValorInputNombre(e.target.value);
  };

  // Cambia el estado del input Email
  const handleInputEmail = (e) => {
    setValorInputEmail(e.target.value);
  };

  // Logica de validacion del nombre
  const validacionNombre = () => {
    if (valorInputNombre === "") {
      setMsjErrorNombre("Por favor ingresá tu nombre");
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valorInputNombre)) {
      setMsjErrorNombre("El nombre solo puede contener letras y espacios");
    } else {
      setMsjErrorNombre("");
    }
  };

  // Logica de validacion del email
  const validacionEmail = () => {
    if (valorInputEmail === "") {
      setMsjErrorEmail("Por favor ingresá tu correo");
    } else if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valorInputEmail)
    ) {
      setMsjErrorEmail(
        "El correo solo puede contener letras, numeros, puntos, guiones y guiones bajos"
      );
    } else {
      setMsjErrorEmail("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <img
        onClick={cerrarForm}
        className="cross"
        src={cross}
        alt="boton de cerrar"
      />
      <h3 className="titule-form">Pongámosnos en contacto</h3>

      <div className="datos">
        <label htmlFor="text">Nombre*</label> <br />
        <input
          id="name"
          type="text"
          name="text"
          placeholder="Escribe tu nombre"
          required
          value={valorInputNombre}
          onChange={handleInputNombre}
          onBlur={validacionNombre}
        />{" "}
        <br />
        <div className="error-input">{msjErrorNombre}</div>
      </div>

      <div className="datos">
        <label htmlFor="email">Correo*</label> <br />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="correo@correo.com"
          required
          value={valorInputEmail}
          onChange={handleInputEmail}
          onBlur={validacionEmail}
        />{" "}
        <br />
        <div className="error-input">{msjErrorEmail}</div>
      </div>

      <div className="message">
        <label htmlFor="message">Escribí un comentario</label>
        <br />
        <textarea
          style={{
            width: "100%",
            height: "150px",
            border: "1px solid white",
            borderRadius: "5px",
            padding: "10px",
          }}
          className="message-textarea"
          id="message"
          name="message"
          cols="42"
          rows="10"
          maxLength={500}
        />
      </div>

      <button className="btn-from" type="submit" disabled={state.submitting}>
        Enviar
      </button>
      {mostrarMsjExito && (
        <p className="mensaje-exito">El formulario se envio con exito! 🎉</p>
      )}
    </form>
  );
};
export const App = () => {
  return <ContactForm />;
};
