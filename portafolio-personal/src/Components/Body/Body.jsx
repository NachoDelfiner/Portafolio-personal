import React, { useState, useRef } from "react";
import { Nav } from "../NavBar/Nav";
import { ContactForm } from "../ContactForm/ContactForm";
import "../Body/Body.css";
import linkedin from "../../icons/linkedin.svg";
import github from "../../icons/github.svg";
import mail from "../../icons/mail.svg";
import phone from "../../icons/phone.svg";

export const Body = () => {
  const background1 = useRef(null);
  const tecnologias = useRef(null);
  const proyectos = useRef(null);
  const hagamoslo = useRef(null);

  const ScrollToBackground1 = () => {
    background1.current.scrollIntoView({ behavior: "smooth" });
  };

  const ScrollToTecnologias = () => {
    tecnologias.current.scrollIntoView({ behavior: "smooth" });
  };

  const ScrollToProyectos = () => {
    proyectos.current.scrollIntoView({ behavior: "smooth" });
  };
  const ScrollToHagamoslo = () => {
    hagamoslo.current.scrollIntoView({ behavior: "smooth" });
  };

  const [mostrarForm, setMostrarForm] = useState(false);

  const handleMostrarForm = () => {
    setMostrarForm(true);
  };

  const handleCerrarForm = () => {
    setMostrarForm(false);
  };

  return (
    <>
      <div className="body">
        <header className="bodyPage">
          <Nav
            ScrollToBackground1={ScrollToBackground1}
            ScrollToTecnologias={ScrollToTecnologias}
            ScrollToProyectos={ScrollToProyectos}
            ScrollToHagamoslo={ScrollToHagamoslo}
          />
          <h1 className="title">Desarrollador Web Full Stack</h1>
          <p>Desarrollo paginas web, amo lo que hago</p>
          <div className="profileImg"></div>
          <div className="stup">
            <img src="./img/stup.png" alt="imagen decorativa de un Stup" />
          </div>
        </header>
        <main className="main">
          <div id="background1" ref={background1} className="background">
            <div className="presentacion">
              <p className="introPresentacion">
                Hola soy Ignacio, me dicen Nacho. Encantado de conocerte.
              </p>
              <p className="textoPresentacion">
                Me considero un apasionado de la tecnología, con excelente
                interrelación personal y en constante búsqueda de nuevos
                aprendizajes y desafios. Siempre orientado a trabajar con
                metodologías ágiles, aplico Scrum para mejorar la productividad
                y calidad de los resultados. Como programador mi objetivo es
                obtener mi primera experiencia laboral en el mundo TI buscando
                la oportunidad de posicionarme en el sector y continuar mi
                desarrollo. Mi objetivo es aplicar y ampliar mis conocimientos
                técnicos, adquirir experiencia práctica en proyectos reales y
                colaborar en un entorno de trabajo estimulante.
              </p>
            </div>
          </div>
          <div id="tecnologias" ref={tecnologias} className="tecnologias">
            <div className="tarjetaTec1">
              <img
                className="front"
                src="./img/front.png"
                alt="Imagen ilustrativa Front End"
              />
              <h2>Front-End</h2>
              <p>
                Valoro la estructura de contenido simple, los patrones de diseño
                limpios y las interacciones bien pensadas.
              </p>
              <span>
                <strong>Tecnologias</strong>
              </span>
              <ul>
                <li>
                  <img
                    className="tecIcon"
                    src="iconos/html.png"
                    alt="logo html"
                  />{" "}
                  HTML 5
                </li>
                <li>
                  <img
                    className="tecIcon"
                    src="iconos/css.png"
                    alt="css icon"
                  />{" "}
                  CSS 3
                </li>
                <li>
                  <img className="tecIcon" src="iconos/js.png" alt="js icon" />{" "}
                  JavaScript
                </li>
                <li>
                  <img
                    className="tecIcon"
                    src="iconos/react.png"
                    alt="react icon"
                  />{" "}
                  React
                </li>
              </ul>
              <span>Herramientas</span>
              <ul>
                <li>
                  <img
                    className="tecIcon"
                    src="iconos/git.png"
                    alt="git icon"
                  />{" "}
                  Git
                </li>
                <li>
                  <img
                    className="tecIcon"
                    src="iconos/github2.png"
                    alt="gitHub icon"
                  />{" "}
                  GitHub
                </li>
                <li>
                  <img
                    className="tecIcon"
                    src="iconos/bootstrap.jpg"
                    alt="bootstrap icon"
                  />{" "}
                  Bootstrap
                </li>
                <li>
                  <img
                    className="tecIcon"
                    src="iconos/netlify.png"
                    alt="netlify icon"
                  />{" "}
                  Netlify
                </li>
              </ul>
            </div>
            <div className="tarjetaTec2">
              <img
                className="front"
                src="./img/back.png"
                alt="Imagen ilustrativa Front End"
              />
              <h2>Bases de datos</h2>
              <p>
                Las bases de datos son cruciales en mis proyectos por su
                capacidad de gestionar datos de forma eficiente y segura,
                optimizando consultas y garantizando la integridad de la
                información.
              </p>
              <span>
                <strong>Tecnologias</strong>
              </span>
              <ul>
                <li>
                  <img
                    className="tecIcon"
                    src="iconos/sql.png"
                    alt="sql icon"
                  />{" "}
                  SQL
                </li>
                <li>
                  <img
                    className="tecIcon"
                    src="iconos/postgresql.png"
                    alt="postgre icon"
                  />{" "}
                  PostgreSQL
                </li>
              </ul>
            </div>
            <div className="tarjetaTec1">
              <img
                className="front"
                src="./img/BD.png"
                alt="Imagen ilustrativa Front End"
              />
              <h2>Back-End</h2>
              <p>
                Es crucial en las páginas web, gestionar datos, lógicas y
                asegurar interacciones fluidas entre usuarios y servidores
                siempre que sea necesario.
              </p>
              <span>
                <strong>Tecnologias</strong>
              </span>
              <ul>
                <li>
                  <img
                    className="tecIcon tecIcon2"
                    src="iconos/node.jpeg"
                    alt="node icon"
                  />
                  Node.js
                </li>
              </ul>
              <span>
                <strong>Herramientas</strong>
              </span>
              <ul>
                <li>
                  <img
                    className="tecIcon"
                    src="iconos/postman.png"
                    alt="postman icon"
                  />{" "}
                  Postman
                </li>
              </ul>
            </div>
          </div>
          <div id="proyectos" ref={proyectos} className="proyectos">
            <h2>Trabajos recientes</h2>
            <p>Aquí hay algunos proyectos en los que he trabajado</p>
          </div>
          <div className="galeriaProyectos">
            <div className="pokedext">
              <a href="https://pokedex-proyecto.netlify.app/" target="_blank">
                <img src="./img/pokedex2.png" alt="Portada Pokedex" />
              </a>
            </div>
            <div className="automotora">
              <a href="https://autovip-proyecto.netlify.app/" target="_blank">
                <img src="./img/autoVip.png" alt="Portada AUTOVIP" />
              </a>
            </div>
            <div className="reproductor">
              <a href="#" target="_blank">
                <img src="./img/audn.png" alt="Portada audn" />
              </a>
            </div>
          </div>
          <div className="testimonios">
            <h3>Testimonios</h3>
            <span>Algunas personas con las que he trabajado</span>
            <div className="imgTestimonios">
              <img src="./img/perfil-Fran.png" alt="" />
            </div>
            <p>
              "Quedé contento con el entusiasmo que él dió en el bootcamp.
              <br />
              ¡Con su pasión y entrega, superó obstáculos y demostró habilidades
              excepcionales!"
            </p>
            <h4>Francisco Recalde</h4>
            <span>Profesor - Bootcamp Full Stack Web Developer</span>
          </div>
        </main>

        <footer>
          {mostrarForm && <ContactForm cerrarForm={handleCerrarForm} />}
          <div id="hagamoslo" ref={hagamoslo} className="hagamoslo">
            <h2>Iniciar un proyecto</h2>
            <p>
              ¿Interesad@ en trabajar juntos? <br /> Deberiamos agendar una
              reunion. <br /> Yo invito el cafe.
            </p>
            <button className="btnHagamoslo" onClick={handleMostrarForm}>
              🤘🏻 Hagámoslo
            </button>
          </div>
          <div className="background2">
            <a href="#nav">
              <img
                className="logotype2"
                src="./img/logotipo2.png"
                alt="Logo personal"
              />
            </a>

            <p>
              Viviendo, aprendiendo y subiendo de nivel <br /> un día a la vez.
            </p>
            <div className="redes">
              <div className="redSocial">
                <a
                  href="https://www.linkedin.com/in/ignacio-delfiner/"
                  target="_blank"
                >
                  <img
                    className="linkedin"
                    src={linkedin}
                    alt="Icono de Likedin"
                  />
                </a>
              </div>
              <div className="redSocial">
                <a href="https://github.com/NachoDelfiner" target="_blank">
                  <img className="gitHub" src={github} alt="Logo de GitHub" />
                </a>
              </div>
              <div className="redSocial">
                <a href="mailto:delfinerignacio@gmail.com" target="_blank">
                  <img className="mail" src={mail} alt="Logo de Mail" />
                </a>
              </div>
              <div className="redSocial">
                <a href="tel:+59898801456">
                  <img className="phone" src={phone} alt="Logo de telefono" />
                </a>
              </div>
            </div>
            <p>Hecho a mano por mi ✌🏻</p>
          </div>
        </footer>
      </div>
    </>
  );
};
