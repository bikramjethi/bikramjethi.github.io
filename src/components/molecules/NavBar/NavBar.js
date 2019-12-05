import React from "react";
import StyledNavBar from "./NavBar.style";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledNavBar>
      {" "}
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="intro">
          <li>Intro</li>
        </Link>
        <Link to="resume">
          <li>Resume</li>
        </Link>
        <Link to="projects">
          <li>Projects</li>
        </Link>
        <Link to="contact">
          <li>Contact</li>
        </Link>
      </ul>
    </StyledNavBar>
  );
};

export default NavBar;
