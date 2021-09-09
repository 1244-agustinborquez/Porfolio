import React from "react";
import "./Home.css";
// import Typical from "react-typical";
// import Particle from "../../components/particles/Particle";
function Home() {
  return (
    <div className="home">
      <div className="main-home">
        <div className="content-home">
          <h2 className="text-home">Hola!👋 Mi Nombres es Guillermo</h2>
          <h3 className="text-home">
            {" "}
            Y Soy Full Stack Developer 🚀
            {/* <Typical
                    loop={Infinity}
                    wrapper='b'
                    steps={[
                        ' Full Stack Developer',
                        1000,
                        ' Creativo',
                        1000,
                        ' '
                    ]}
                /> */}
          </h3>
          <p>
            Este es mi Porfolio Web una manera mas sencilla e interactiva de poder ver mi experiencia, formacion y trabajos 
            a partir de este momento sientete libre de recorrer el porfolio como mas prefieras no hay un orden en especifico 😁
            puedes ir directo a mi trabajo 😎 y despues a mis redes de contactos, o si deseas conocer mas de mi puedes ir a about 🧐 
            Y no te olvides de la seccion "My Resume" donde encontras las tecnologias que domino y mi expreiencia laboral y academica.
          </p>
        </div>
        <div className="image-home">
          <img
            src="/fotoperfil2.jpg"
            alt="Image No Found"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
