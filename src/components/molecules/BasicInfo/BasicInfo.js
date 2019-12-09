import React from "react";
import StyledBasicInfo from "./BasicInfo.style";
import { bulletConfig } from "./BasicInfo.config";
import Separator from "../../atoms/Separator";
import Para from "../../atoms/Paragraph";

const BasicInfo = ({ heading, children, pageType }) => {
  const pointConfig = bulletConfig[pageType] || {};
  const { point1, point2, point3 } = pointConfig || {};
  return (
    <StyledBasicInfo>
      <h1>{heading}</h1>
      <p className="intro-info">
        {point1} <Para>/</Para> {point2} <Para>/</Para> {point3}
      </p>
      {children}
      <Separator />
    </StyledBasicInfo>
  );
};

export default BasicInfo;
