import React from "react";
import StyledDevImagePanel from "./DevImagePanel.style";
import introImage from "../../../assets/images/introImage.jpeg";

const DevImagePanel = ({ className }) => {
  return (
    <StyledDevImagePanel className={className}>
      <img src={introImage} alt="intro-image" />
    </StyledDevImagePanel>
  );
};

export default DevImagePanel;
