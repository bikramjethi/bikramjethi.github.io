import React from "react";
import StyledIntro from "./Intro.style";
import Paragraph from "../../atoms/Paragraph";
import BasicInfo from "../../molecules/BasicInfo/BasicInfo";

const Intro = () => {
  return (
    <StyledIntro className="right-div">
      <BasicInfo heading="about me">
        <Paragraph className="intro-text">
          Prolific full stack web developer with an eye for stunning designs, a
          passion for metrics and beating former "best-yets".
        </Paragraph>
      </BasicInfo>
    </StyledIntro>
  );
};

export default Intro;
