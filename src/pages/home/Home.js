import React from "react";
import "./Home.css";
import Typical from "react-typical";
import Particle from "../../components/particles/Particle";
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
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </div>
        <div className="image-home">
          <img
            src="/ImgHeader.jpg"
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
