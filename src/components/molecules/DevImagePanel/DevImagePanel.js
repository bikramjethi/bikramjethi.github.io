import React from "react";
import StyledDevImagePanel from "./DevImagePanel.style";
import introImage from "../../../assets/images/introImage.png";

const DevImagePanel = ({ className, color }) => {
  return (
    <StyledDevImagePanel className={className} color={color}>
      <div className="layer" />
      <img src={introImage} alt="intro" />
    </StyledDevImagePanel>
  );
};

export default DevImagePanel;
