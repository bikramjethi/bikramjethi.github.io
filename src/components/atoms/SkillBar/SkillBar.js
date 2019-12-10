import React, { useState, useEffect } from "react";
import StyledSkillBar from "./SkillBar.style";

const SkillBar = ({ className, color, value, skill }) => {
  const [skillValue, setSkillValue] = useState(0);
  const updateSkillValue = () => {
    if (skillValue < value) {
      setTimeout(setSkillValue(skillValue + 1), 200);
    }
  };
  useEffect(() => {
    // console.log("useEffect called");
    updateSkillValue();
    console.log('called useeffect');
  }, [skillValue, updateSkillValue]);
  return (
    <StyledSkillBar className={className} color={color} value={skillValue}>
      <span className="skill">{skill}</span>
      <span className="skill-value">{skillValue}%</span>
    </StyledSkillBar>
  );
};

export default SkillBar;
