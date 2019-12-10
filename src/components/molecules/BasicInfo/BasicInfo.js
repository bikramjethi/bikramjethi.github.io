import React from "react";
import StyledBasicInfo from "./BasicInfo.style";
import { bulletConfig } from "./BasicInfo.config";
import Separator from "../../atoms/Separator";

const BasicInfo = ({ heading, children, pageType }) => {
  const pointConfig = bulletConfig[pageType] || {};
  const pointsHtml = Object.keys(pointConfig).map(key => (
    <p>
      {pointConfig[key]}
    </p>
  ));
  return (
    <StyledBasicInfo>
      <h1>{heading}</h1>
      <div className="intro-info">{pointsHtml}</div>
      {children}
      <Separator />
    </StyledBasicInfo>
  );
};

export default BasicInfo;
