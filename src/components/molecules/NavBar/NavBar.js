import React from "react";
import StyledNavBar from "./NavBar.style";
import { Link } from "react-router-dom";

import homeSvg from "../../../assets/svgs/home.svg";
import introSvg from "../../../assets/svgs/intro.svg";
import projectsSvg from "../../../assets/svgs/projects.svg";
import contactSvg from "../../../assets/svgs/contact.svg";
import resumeSvg from "../../../assets/svgs/resume.svg";

const NavBar = ({ background }) => {
  return (
    <StyledNavBar background={background}>
      {" "}
      <ul>
        <Link to="/">
          <li className="nav-link">
            {" "}
            <img src={homeSvg} alt="homeSvg" />
            <span className="tool-tip">Back to the base</span>
          </li>
        </Link>
        <Link to="intro">
          <li className="nav-link">
            <img src={introSvg} alt="introSvg" />
            <span className="tool-tip">Know more about me</span>
          </li>
        </Link>
        <Link to="resume">
          <li className="nav-link">
            <img src={resumeSvg} alt="resumeSvg" />
            <span className="tool-tip"> Have a look at my Resume</span>
          </li>
        </Link>
        <Link to="projects">
          <li className="nav-link">
            <img src={projectsSvg} alt="projectsSvg" />
            <span className="tool-tip"> Projects I have been a part of</span>
          </li>
        </Link>
        <Link to="contact">
          <li className="nav-link">
            <img src={contactSvg} alt="contactSvg" />
            <span className="tool-tip">Let's get in touch</span>
          </li>
        </Link>
      </ul>
    </StyledNavBar>
  );
};

export default NavBar;
