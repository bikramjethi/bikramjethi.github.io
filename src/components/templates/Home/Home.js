import React from "react";
import StyledHome from "./Home.style";

import { Link } from "react-router-dom";

const Home = ({ className }) => (
  <StyledHome className={className}>
    {" "}
    <Link className="brief" to="">
      <h1>Bikram Jethi (FrontEnd Developer)</h1>
      <p>
        A passionate Front-end Web Developer with a knack for stunning designs,
        a heart for social causes and a  never-ending zeal to learn and embrace
        new technologies aims to expand his knowledge working for a  progressive
        organization and contribute towards its growth.
      </p>
    </Link>
    <Link className="resume" to="/resume">
      {" "}
      Interactive resume
    </Link>
    <Link className="contact" to="/contact">
      {" "}
      Contact Info
    </Link>
    <Link className="intro" to="/intro">
      {" "}
      Complete Intro
    </Link>
    <Link className="projects" to="/projects">
      {" "}
      Projects Done
    </Link>
  </StyledHome>
);

export default Home;
