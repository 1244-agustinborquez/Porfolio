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
            <SmallTitle icon={briefcase} title={"My Awesome Story"} />
          </div>
          <div className="resume-content">
            <ResumeItem
              year={"May 2021 - Present"}
              title={"Tutor of Back-End"}
              subTitle={"CoderHouse"}
              text={
                "Responsible of support teacher within class. Answer questions of students via Slack. In charge of review code challenges of students and grade them. Lead students during their learning process along the course. "
              }
            />
            <ResumeItem
              year={"March 2020  -  November 2020"}
              title={"Web Developer"}
              subTitle={"Freelance"}
              text={
                "I implemented websites and landing pages for new clients. I built websites with responsive design. Key Achievements: I implemented new responsive, mobile-first approach which increased mobile traffic by 20% "
              }
            />
          </div>
          <div className="small-title u-small-title-margin">
            <SmallTitle icon={school} title={"Education"} />
          </div>
          <div className="resume-content ">
            <ResumeItem
              year={"May 2021 - August 2021"}
              title={"Front-End Engineer"}
              subTitle={"Codecademy"}
              // text={
              //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem. "
              // }
            />
            <ResumeItem
              year={"Dec 2020 - March 2021"}
              title={"Front-End Development"}
              subTitle={"PLATZI"}
              // text={
              //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem. "
              // }
            />
            <ResumeItem
              year={"April 2021"}
              title={"Web Responsive Design (Certificate)"}
              subTitle={"freeCodeCamp"}
              // text={
              //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem. "
              // }
            />
          </div>
        </InnerLayout>
      </ResumeStyled>
    );
  }
  export default Resume;
