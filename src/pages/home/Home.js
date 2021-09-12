import React from "react";
import "./Home.css";
// import PrimaryButtom from "../../components/primaryButtom/PrimaryButtom";
// import Typical from "react-typical";
// import Particle from "../../components/particles/Particle";
function Home() {
  return (
    <div className="home">
      <div className="main-home">
        <div className="content-home">
          <h2 className="text-home">Hola!👋 Mi Nombre es Guillermo</h2>
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
          Este es mi portfolio web, una manera más sencilla e interactiva para que veas mi experiencia , formación y trabajos. A partir de este momento, puedes recorrer mi portfolio como más prefieras. Quizás te interese ir directo a Proyectos y despues pasar por mis redes de contactos o si deseas conocer más de mí diríjase a la casilla de menú en about me. No te olvides de la sección "my resume" en el cuál encontrarás las tecnologías que domino, las experiencias laborales y académica.
          </p>
          {/* <a href="https://drive.google.com/file/d/1T6M0jKy83mg4uGEl9pvsbwLLp3rWXZxM/view" target="_blank">
        <PrimaryButtom title={"Download Cv"} />
        </a>
          <a href="https://drive.google.com/file/d/1T6M0jKy83mg4uGEl9pvsbwLLp3rWXZxM/view" target="_blank">
        <PrimaryButtom title={"Download Cv"} />
        </a> */}
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
