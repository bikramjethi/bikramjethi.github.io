import React from "react";
import StyledDevImagePanel from "./DevImagePanel.style";
import introImage from "../../../assets/images/introImage.png";
import contactImage from "../../../assets/images/contact.jpeg";
import projectsImage from "../../../assets/images/projects.jpg";
import SocialMediaSection from "../SocialMediaSection/SocialMediaSection";

const imageConfig = {
  projects: projectsImage,
  intro: introImage,
  contact: contactImage,
  resume: introImage
};

const DevImagePanel = ({ className, color, mode }) => {
  return (
    <StyledDevImagePanel className={className} color={color}>
      <div className="layer" />
      <div className="dev-profile">
        <h1>Bikram Jethi</h1>
        <p>Developer</p>
        <SocialMediaSection />
      </div>
      <img src={imageConfig[mode]} alt="intro" />
    </StyledDevImagePanel>
  );
};

export default DevImagePanel;
