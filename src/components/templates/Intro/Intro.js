import React from "react";
import StyledIntro from "./Intro.style";
import Paragraph from "../../atoms/Paragraph";
import Separator from "../../atoms/Separator";

const Intro = () => {
  return (
    <StyledIntro className="right-div">
      <h1>About Me</h1>
      <p className="intro-info">
        24 years <Paragraph>/</Paragraph> Developer <Paragraph>/</Paragraph>{" "}
        Footballer
      </p>
      <Paragraph className="intro-text">
        Prolific full stack web developer with an eye for stunning designs, a
        passion for metrics and beating former "best-yets".
      </Paragraph>

      <Separator />
    </StyledIntro>
  );
};

export default Intro;
