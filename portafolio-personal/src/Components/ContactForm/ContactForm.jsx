import React from "react";
import { useState } from "react";
import "../ContactForm/ContactForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import cross from "../../icons/cross.svg";
import axios from "axios";

export const ContactForm = ({ cerrarForm }) => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "https://formspree.io/delfinerignacio@gmail.com",
        values
      );

      if (response.status === 200) {
        console.log("Formulario enviado correctamente");
      }
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    }

    setSubmitting(false);
  };

  const [formEnviado, setformEnviado] = useState(false);
  return (
    <div className="bodyForm">
      <button
        id="cross"
        className="cerrarForm"
        onClick={() => {
          cerrarForm();
        }}
      >
        <img className="cross" src={cross} alt="boton de cierre" />
      </button>
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
        {({ errors }) => (
          <Form>
            <div className="nombre">
              <label htmlFor="nombre">Nombre *</label>
              <Field
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Ingresa tu nombre"
                required
              />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div>
            <div className="correo">
              <label htmlFor="correo">Correo *</label>
              <Field
                type="email"
                name="correo"
                id="correo"
                placeholder="ejemplo@ejemplo.com"
                required
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              />
            </div>
            <div className="comentario">
              <label htmlFor="comentaio">Ingrese un comentario</label>

              <Field
                className="comentario-area"
                name="comentario"
                id="comentario"
                as="textarea"
                placeholder="Ingresá un comentrio . . ."
                cols="20"
                rows="10"
                maxLength={500}
              />
            </div>
            <button className="btn-form" type="submit">
              Enviar
            </button>
            {formEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};
