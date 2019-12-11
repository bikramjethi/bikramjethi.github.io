import React, { useState, useEffect } from "react";
import StyledSkillBar from "./SkillBar.style";

const SkillBar = ({ className, color, value, skill }) => {
  const [skillValue, setSkillValue] = useState(0);
  useEffect(() => {
    console.log("useEffect called");
    let timer;
    if (skillValue + 3 <= value) {
      timer = setTimeout(() => {
        setSkillValue(skillValue + 3);
      }, 30);
    } else {
      setSkillValue(value);
    }
    return () => clearTimeout(timer);
  }, [skillValue, value]);
  return (
    <StyledSkillBar className={className} color={color} value={skillValue}>
      <span className="skill">{skill}</span>
      <span className="skill-value">{skillValue}%</span>
    </StyledSkillBar>
  );
};

export default SkillBar;
