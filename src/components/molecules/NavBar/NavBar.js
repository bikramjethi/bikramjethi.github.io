import React from "react";
import StyledNavBar from "./NavBar.style";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledNavBar>
      {" "}
      <ul>
        <li>Intro</li>
        <li>Resume</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </StyledNavBar>
  );
};

export default NavBar;
