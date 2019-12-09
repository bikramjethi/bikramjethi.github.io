import React from "react";
import StyledProjects from "./Projects.style";
import BasicInfo from "../../molecules/BasicInfo/BasicInfo";

const Projects = () => (
  <StyledProjects className="right-div" pageType="projects">
    <BasicInfo heading="projects" pageType="projects"></BasicInfo>
  </StyledProjects>
);

export default Projects;
