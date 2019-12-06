import React from "react";
import StyledIntro from "./Intro.style";
import Paragraph from "../../atoms/Paragraph";
import Separator from "../../atoms/Separator";

const Intro = () => {
  return (
    <StyledIntro className="right-div">
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

        <Separator />
    </StyledIntro>
  );
};

export default Intro;
