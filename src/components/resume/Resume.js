import React from "react";
import { InnerLayout } from "../../Styles/Layout";
import Title from "../title/Title";
import SmallTitle from "../smalTitle/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../resumeItem/ResumeItem";
import ResumeStyled from './StyledResume';

function Resume() {
    const briefcase = <BusinessCenterIcon />;
    const school = <SchoolIcon />;
    return (
      <ResumeStyled>
        <Title title={"Resume"} span={"resume"} />
        <InnerLayout>
          <div className="small-title">
            <SmallTitle icon={briefcase} title={"Work Experience"} />
          </div>
          <div className="resume-content">
          <ResumeItem
              year={"Agos 2021 - Sep 2021"}
              title={"Proyecto App de Servicios"}
              subTitle={"Freelance"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta ratione. Pariatur quas accusantium adipisci.accusantium adipisci.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta ratione. Pariatur quas accusantium adipisci.accusantium adipisci. "
              }
            />
            <ResumeItem
              year={"Ago 2021 - Actualidad"}
              title={"Tutor del Curso de  Back-End"}
              subTitle={"CoderHouse"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta ratione. Pariatur quas accusantium adipisci.accusantium adipisci.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta ratione. Pariatur quas accusantium adipisci.accusantium adipisci. "
              }
            />
            <ResumeItem
              year={"jun 2021  -  Actualidad"}
              title={"Asistente de enseñanza Full-Stack"}
              subTitle={"Bootcamp Soy Henry"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta ratione. Pariatur quas accusantium adipisci.accusantium adipisci. "
              }
            />
          </div>
          <div className="small-title u-small-title-margin">
            <SmallTitle icon={school} title={"Education"} />
          </div>
          <div className="resume-content ">
            <ResumeItem
              year={"Jun 2021 - sep 2021"}
              title={"Full-Stack Developer"}
              subTitle={"Bootcamp Soy Henry"}
              // text={
              //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem. "
              // }
            />
            <ResumeItem
              year={"Abr 2020 - Actualidad"}
              title={"Tecnicatura en Programación"}
              subTitle={"UTN frt"}
              // text={
              //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem. "
              // }
            />
            {/* <ResumeItem
              year={"April 2021"}
              title={"Lorem ipsum dolor ipsum dolor"}
              subTitle={"fLorem ipsum"}
              // text={
              //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem. "
              // }
            /> */}
          </div>
        </InnerLayout>
      </ResumeStyled>
    );
  }
  export default Resume;
