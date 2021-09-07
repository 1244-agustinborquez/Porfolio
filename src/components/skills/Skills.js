import React from "react";
import SkillsStyled from "./StyledSkills";
//import SkillsDiv from './StyledSkills'
import { InnerLayout } from "../../Styles/Layout";
import Title from "../title/Title";
// import ProgressBar from '../progressBar/ProgressBar'

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiRedux, SiSass,SiPostgresql,SiMongodb } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      {/* // <SkillsStyled>
    //   <Title title={"My Skills"} span={"my skills"} />
    //   <InnerLayout>
    //     <div className="skills">
    //       <ProgressBar title={"HTML5"} width={"90%"} text={"90%"} />
    //       <ProgressBar title={"CSS3"} width={"90%"} text={"90%"} />
    //       <ProgressBar title={"JavaScript"} width={"85%"} text={"85%"} />
    //       <ProgressBar title={"React.JS"} width={"80%"} text={"80%"} />
    //       <ProgressBar title={"Node.JS"} width={"85%"} text={"85%"} />
    //       <ProgressBar title={"REDUX"} width={"75%"} text={"75%"} />
    //       <ProgressBar title={"TypeScript"} width={"60%"} text={"60%"} />
    //       <ProgressBar title={"PostgreSQL"} width={"75%"} text={"75%"} />
    //       <ProgressBar title={"MongoDB"} width={"75%"} text={"75%"} />
    //     </div>
    //   </InnerLayout>
    // </SkillsStyled> */}
      <InnerLayout>
        <div
          id="carouselExampleInterval"
          class="carousel slide m-auto wid"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner ">
            <div class="carousel-item active " data-bs-interval="3000">
              <div className="row">
                <div className="col-md-4">
                  <div className="single-box">
                    <div className="img-area">
                      <div className="box-icon">
                        <AiIcons.AiFillHtml5 className="icon" color="#FF8409" />
                      </div>
                      <h3>HTML</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-box">
                    <div className="img-area">
                      <div className="box-icon">
                        <FaIcons.FaCss3Alt className="icon" color="#1E90FF" />
                      </div>
                      <h3>CSS</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-box">
                    <div className="img-area">
                      <div className="box-icone">
                        <BsFillBootstrapFill className="icon" color="#6B338C" />
                        <SiSass className="icon" color="#FE62EA" />
                      </div>
                      <h3>Bootstrap - Sass</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <div className="row">
              <div className="col-md-4">
                  <div className="single-box">
                    <div className="img-area">
                      <div className="box-icon">
                        <IoLogoJavascript className="icon" color="#FFC63F" />
                      </div>
                      <h3>JavaScript</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-box">
                    <div className="img-area">
                      <div className="box-icone">
                        <FaIcons.FaReact className="icon" color="#5A87BC" />
                        <SiRedux className="icon" color="#320022" />
                      </div>
                      <h3>Rract.JS - Redux</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-box">
                    <div className="img-area">
                      <div className="box-icone">
                        <FaIcons.FaNodeJs className="icon" color="#0D5141" />
                        <FaIcons.FaNodeJs className="icon" color="#72AB89" />
                      </div>
                      <h3>Node.Js - Express</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <div className="row">
              <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area">
                        <div className="box-icon">
                          <SiPostgresql className="icon" color="#7A82DA" />
                        </div>
                        <h3>PostgreSQL</h3>
                      </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area">
                        <div className="box-icon">
                          <SiMongodb className="icon" color="#2C814F" />
                        </div>
                        <h3>MongoDB</h3>
                      </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-box">
                      <div className="img-area">
                        <div className="box-icon">
                          <BiGitBranch className="icon" color="#FF983D" />
                        </div>
                        <h3>Git</h3>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

export default Skills;
