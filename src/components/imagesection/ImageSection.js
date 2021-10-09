import React from "react";
import ImageSectionStyled from "./StyledImgSection";
// import resume from '../../asset/images/fotoperfil1.jpg';
// import resume from '/ImgHeader.jpg';
import PrimaryButton from '../primaryButtom/PrimaryButtom';

function ImageSection() {
    return (
<ImageSectionStyled>
      <div className="left-content">
        <img src='/ImgHeader.jpg' alt="resume" />
      </div>
      <div className="right-content">
        <div className="sub-title">
          <h4>
            Hola! Me llamo Agustín Borquez
          </h4>
        </div>
        <p className="paragraph">
        ¿Quien soy? 👀<br/>
          Tengo 21 años , soy Desarrollador Full Stack orientado al Back-End. 
          Comencé en cursando la carrera en la Universidad Nacional Tecnológica en la Provincia de Tucumán.   
          Por una parte llegué a ese mundo de la programación buscando una salida laboral importante y por otro lado luego con el paso del tiempo mientras estaba inmerso en ese mundo de la tecnología llegué a la conclusión que me apasiona del cuál estoy muy preparado y con muchas ganas de seguir mi camino con firmeza y dedicación realizando proyectos y crecer tanto a nivel personal como profesionalmente.
        </p>
        <p className="paragraph">
          ¿Por qué yo ? 🤔 <br/>
          Todos los miembros de ésta comunidad tenemos excelentes habilidades técnicas, sin embargo, obtendrás un desarrollador curioso y con gran capacidad de resolución de problemas , trabajo en equipo , dispuesto a enseñar y por último aprender de los demás.
        </p>
        <p className="paragraph">
        Mi historial 😁<br/>
          Realicé proyectos de forma freelance.
          Actualmente  me encuentro desarrollando una aplicación de servicios ,  también estoy trabajando con un equipo  bajo la modalidad scrum.   Por otro lado comencé mi experiencia como tutor del curso Back-End con una empresa Argentina llamado Coder House. Y por último pulí mis capacidades técnicas y sociales como desarrollador en el Bootcamp Full Stack en Soy  Henry
        </p>
        <a href="https://drive.google.com/file/d/1ahwIT1vvTfy7NXR_Za85S4rM-5jfcpf4/view?usp=sharing" target="_blank">
        <PrimaryButton title={"Download Cv"} />
        </a>
      </div>
    </ImageSectionStyled>
    )
}

export default ImageSection
