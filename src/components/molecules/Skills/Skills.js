import React from "react";
import StyledSkills from "./Skills.style";
import SkillBar from "../../atoms/SkillBar/SkillBar";

const Skills = ({ skills }) => (
  <StyledSkills>
    {skills &&
      skills.map(skillItem => {
        const { color, value, skill } = skillItem;
        return <SkillBar color={color} value={value} skill={skill}></SkillBar>;
      })}
  </StyledSkills>
);

export default Skills;
