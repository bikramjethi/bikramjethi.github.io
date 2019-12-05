import React from "react";
import StyledIntro from "./Intro.style";
import Paragraph from "../../atoms/Paragraph";

const Intro = () => {
  return (
    <StyledIntro className="two-panel">
      <div className="left-div">Division 1</div>
      <div className="right-div">
        <h1>About Me</h1>
        <p>
          24 years <Paragraph>/</Paragraph> Developer <Paragraph>/</Paragraph>{" "}
          Footballer
        </p>
        <Paragraph>
          Bikram JethiBikram JethiBikram JethiBikram JethiBikram JethiBikram
          JethiBikram JethiBikram JethiBikram JethiBikram JethiBikram
          JethiBikram JethiBikram JethiBikram JethiBikram JethiBikram
          JethiBikram JethiBikram JethiBikram JethiBikram JethiBikram
          JethiBikram JethiBikram JethiBikram Jethi
        </Paragraph>
      </div>
    </StyledIntro>
  );
};

export default Intro;
