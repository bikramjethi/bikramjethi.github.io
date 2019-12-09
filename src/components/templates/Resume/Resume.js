import React from "react";
import StyledResume from "./Resume.style";
import BasicInfo from "../../molecules/BasicInfo/BasicInfo";

const Resume = () => (
  <StyledResume className="right-div" pageType="resume">
    <BasicInfo heading="Resume" pageType="resume"></BasicInfo>
  </StyledResume>
);

export default Resume;
