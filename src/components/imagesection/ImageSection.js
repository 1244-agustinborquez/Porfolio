import React from "react";
import ImageSectionStyled from "./StyledImgSection";
import resume from '../../asset/images/ImgHeader.jpg';
import PrimaryButton from '../primaryButtom/PrimaryButtom';

function ImageSection() {
    return (
<ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="resume" />
      </div>
      <div className="right-content">
        <div className="sub-title">
          <h4>
            Hi! My name is <span>Guillermo Agusín Borquez</span>
          </h4>
        </div>
        <p className="paragraph">
        ¿Quien soy? 👀<br/>
            tengo 21 Años soy Desarrollador Full Stack orientado al Back-End, Comence en este despues de dejar dos años de cursada de una carrera totalmente diferente, se podria decir que llegue por casualidad buscando una salida y me encontre con lo que de verdad me gusta y apaciona, estoy preparado y con muchas ganas de seguir en esto realizando proyectos y creciendo tanto personal como tecnicamente .
        </p>
        <p className="paragraph">
        ¿Por qué yo ? 🤔 <br/>
        todos los miembros de esta comunidad tenemos excelentes habilidades técnicas, sin embargo conmigo obtendrás un desarrollador curioso con gran capacidad de resolución de problemas y sobre todo un desarrollador siempre dispuesto a enseñar y aprender de los demás.
        </p>
        <p className="paragraph">
        Mi historial 😁<br/>
          Mi experiencia Laboral, Realice proyectos de forma Freelance, en este momento me encuentro en una Aplicacion de Servicios, me encuentro trabajando con un equipo, bajo la modalidad Scrum, tambien comencé mi experiencia como Tutor del Curso de Back-End en Coderhouse.
          Mi experiencia académica, desde el año 2020 que comencé con la tecnicatura en Programación en la UTNfrt, y ahora este año 2021 que comencé el Bootcampt Full Stack en Soy Henry donde me encuentro Actualmente y no tan solo pulí mis capacidades técnicas, si no también sociales como desarrollador.
        </p>
        <a href="https://drive.google.com/file/d/1T6M0jKy83mg4uGEl9pvsbwLLp3rWXZxM/view" target="_blank">
        <PrimaryButton title={"Download Cv"} />
        </a>
      </div>
    </ImageSectionStyled>
    )
}

export default ImageSection
