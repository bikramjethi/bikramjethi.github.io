import React from "react";
import StyledResume from "./Resume.style";
import BasicInfo from "../../molecules/BasicInfo/BasicInfo";

const Resume = () => (
  <StyledResume className="right-div">
    <BasicInfo heading="Resume"></BasicInfo>
  </StyledResume>
);

export default Resume;
