import React from "react";
import StyledResume from "./Resume.style";
import BasicInfo from "../../molecules/BasicInfo/BasicInfo";
import Paragraph from "../../atoms/Paragraph";
import Skills from "../../molecules/Skills";
import { developerSkills } from "./Resume.config";

const Resume = () => (
  <StyledResume className="right-div" pageType="resume">
    <BasicInfo heading="Resume" pageType="resume">
      <Paragraph>
        Worked as an Experience technology Associate at Publicis.Sapient for 3
        years. Currently working as FrontEnd developer at fabHotels and leading
        the TA-SBT Track.
      </Paragraph>
    </BasicInfo>

    <Skills skills={developerSkills} color="#C3073F" heading="Development Skills"/>
  </StyledResume>
);

export default Resume;
