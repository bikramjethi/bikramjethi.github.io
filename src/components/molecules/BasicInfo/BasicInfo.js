import React from "react";
import StyledBasicInfo from "./BasicInfo.style";
import Separator from "../../atoms/Separator";
import Paragraph from "../../atoms/Paragraph";

const BasicInfo = ({ heading, children }) => (
  <StyledBasicInfo>
    <h1>{heading}</h1>
    <p className="intro-info">
      24 years <Paragraph>/</Paragraph> Developer <Paragraph>/</Paragraph>{" "}
      Footballer
    </p>
    {children}
    <Separator />
  </StyledBasicInfo>
);

export default BasicInfo;
