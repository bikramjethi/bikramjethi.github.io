import React from "react";
import StyledNavBar from "./NavBar.style";
import { Link } from "react-router-dom";

import homeSvg from "../../../assets/svgs/home.svg";
import introSvg from "../../../assets/svgs/intro.svg";
import projectsSvg from "../../../assets/svgs/projects.svg";
import contactSvg from "../../../assets/svgs/contact.svg";
import resumeSvg from "../../../assets/svgs/resume.svg";

const NavBar = () => {
  return (
    <StyledNavBar>
      {" "}
      <ul>
        <Link to="/">
          <li>
            {" "}
            <img src={homeSvg} alt="homeSvg" />
          </li>
        </Link>
        <Link to="intro">
          <li>
            <img src={introSvg} alt="introSvg" />
          </li>
        </Link>
        <Link to="resume">
          <li>
            <img src={resumeSvg} alt="resumeSvg" />
          </li>
        </Link>
        <Link to="projects">
          <li>
            <img src={projectsSvg} alt="projectsSvg" />
          </li>
        </Link>
        <Link to="contact">
          <li>
            <img src={contactSvg} alt="contactSvg" />
          </li>
        </Link>
      </ul>
    </StyledNavBar>
  );
};

export default NavBar;
