import React from 'react'
import SkillsStyled from './StyledSkills'
import {InnerLayout} from '../../Styles/Layout'
import Title from "../title/Title";
import ProgressBar from '../progressBar/ProgressBar'

function Skills() {
    return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"HTML5"} width={"90%"} text={"90%"} />
          <ProgressBar title={"CSS3"} width={"90%"} text={"90%"} />
          <ProgressBar title={"JavaScript"} width={"85%"} text={"85%"} />
          <ProgressBar title={"React.JS"} width={"80%"} text={"80%"} />
          <ProgressBar title={"Node.JS"} width={"85%"} text={"85%"} />
          <ProgressBar title={"REDUX"} width={"75%"} text={"75%"} />
          <ProgressBar title={"TypeScript"} width={"60%"} text={"60%"} />
          <ProgressBar title={"PostgreSQL"} width={"75%"} text={"75%"} />
          <ProgressBar title={"MongoDB"} width={"75%"} text={"75%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
    )
}

export default Skills
