import React from "react";
import HomeStyled from "./StyledContact";
import Particle from "../../components/particles/Particle";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Email from "@material-ui/icons/Email";
function Contact() {
  return (
    <HomeStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h2>Hola Como Estas ? </h2>
        <h1>
          <span>Si te gusto mi trabajo 😁</span>
        </h1>
        <p>Puedes Contactarme en </p>
        <div className="icons">
          <a href="https://github.com/1244-agustinborquez" className="icon i-github" target="_blank">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/guillermo-borquez/"
            className="icon i-linkedin"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:agustinborquez1999@hotmail.com" className="icon i-twitter" target="_blank">
            <Email />
          </a>
        </div>
      </div>
    </HomeStyled>
  );
}

export default Contact;
