import React from "react";
import { useState } from "react";
import "../ContactForm/ContactForm.css";
import { Formik } from "formik";

export const ContactForm = () => {
  const [formEnviado, setformEnviado] = useState(false);
  return (
    <div className="bodyForm">
      <h3>Pongámosnos en contacto</h3>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          comentario: "",
        }}
        validate={(valores) => {
          let errores = {};
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresá tu nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          if (!valores.correo) {
            errores.correo = "Por favor ingresá tu correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "El correo solo puede contener letras, numeros, puntos, guiones y guiones bajos";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          setformEnviado(true);
          setTimeout(() => setformEnviado(false), 5000);
          console.log("formulario enviado");
        }}
      >
        {({
          handleSubmit,
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="nombre">
              <label htmlFor="nombre">Nombre *</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Ingresa tu nombre"
                required
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombre && errors.nombre && (
                <div className="error">{errors.nombre}</div>
              )}
            </div>
            <div className="correo">
              <label htmlFor="correo">Correo *</label>
              <input
                type="email"
                name="correo"
                id="correo"
                placeholder="ejemplo@ejemplo.com"
                required
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.correo && errors.correo && (
                <div className="error">{errors.correo}</div>
              )}
            </div>
            <div className="comentario">
              <label htmlFor="comentaio">Ingrese un comentario</label>
              <input
                type="text"
                name="comentario"
                id="comentario"
                value={values.comentario}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button className="btn-form" type="submit">
              Enviar
            </button>
            {formEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
};
