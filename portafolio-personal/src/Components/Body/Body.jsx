import React from "react";
import { Nav } from "../NavBar/Nav";
import "../Body/Body.css";

export const Body = () => {
  return (
    <>
      <div className="body">
        <header className="bodyPage">
          <Nav />
          <h1 className="title">Desarrollador Web Full Stack</h1>
          <p>Desarrollo paginas web, amo lo que hago</p>
          <div className="profileImg"></div>
          <div>
            <img src="./img/stup.png" alt="imagen decorativa de un Stup" />
          </div>
        </header>
        <main>
          <div className="background">
            <div className="presentacion">
              <p>Hola soy Ignacio, me dicen Nacho. Encantado de conocerte.</p>
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

          {/* Stack de tecnologias */}

          <div className="tecnologias">
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
                <li className="html">HTML 5</li>
                <li className="css">CSS 3</li>
                <li className="javascript">Java Script</li>
                <li className="react">React</li>
              </ul>
              <span>Herramientas</span>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Bootstrap</li>
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
                <li>SQL</li>
                <li>PostgreSQL</li>
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
                asegurar interacciones fluidas entre usuarios y servidores.
              </p>
              <span>
                <strong>Tecnologias</strong>
              </span>
              <ul>
                <li>Node.js</li>
              </ul>
              <span>
                <strong>Herramientas</strong>
              </span>
              <ul>
                <li>Postman</li>
              </ul>
            </div>
          </div>
          {/* Proyectos */}
          <div className="galeriaProyectos">
            <div className="pokedext"></div>
            <div className="automotora"></div>
            <div className="reproductor"></div>
          </div>
        </main>
      </div>
    </>
  );
};
