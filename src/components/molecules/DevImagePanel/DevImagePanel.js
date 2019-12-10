import React from "react";
import StyledDevImagePanel from "./DevImagePanel.style";
import introImage from "../../../assets/images/introImage.png";
import SocialMediaSection from "../SocialMediaSection/SocialMediaSection";

const DevImagePanel = ({ className, color }) => {
  return (
    <StyledDevImagePanel className={className} color={color}>
      <div className="layer" />
      <div className="dev-profile">
        <h1>Bikram Jethi</h1>
        <p>Developer</p>
        <SocialMediaSection />
      </div>
      <img src={introImage} alt="intro" />
    </StyledDevImagePanel>
  );
};

export default DevImagePanel;
