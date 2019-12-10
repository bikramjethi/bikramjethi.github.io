import React from "react";
import StyledSkillBar from "./SkillBar.style";

const SkillBar = ({ className, color, value, skill }) => (
  <StyledSkillBar className={className} color={color} value={value}>
    <span className="skill">{skill}</span>
    <span className="skill-value">{value}</span>
  </StyledSkillBar>
);

export default SkillBar;
