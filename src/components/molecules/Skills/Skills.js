import React from "react";
import StyledSkills from "./Skills.style";
import SkillBar from "components/atoms/SkillBar/SkillBar";

const Skills = ({ heading, skills, color }) => (
  <StyledSkills>
    {heading && <h1 className="skill-heading">{heading}</h1>}
    {skills &&
      skills.map(skillItem => {
        const { value, skill } = skillItem;
        return (
          <SkillBar
            color={color}
            value={value}
            skill={skill}
            key={skill}
            className="skill-bar"
          />
        );
      })}
  </StyledSkills>
);

export default Skills;
