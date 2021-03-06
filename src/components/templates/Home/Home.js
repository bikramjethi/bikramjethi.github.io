import React from "react";
import StyledHome from "./Home.style";
import FlipCard from "../../organisms/FlipCard";

const Home = ({ className }) => (
  <StyledHome className={className}>
    {" "}
    <FlipCard className="brief" to="">
      <h1>Bikram Jethi (FrontEnd Developer)</h1>
      <p>
        A passionate Front-end Web Developer with a knack for stunning designs,
        a heart for social causes and a  never-ending zeal to learn and embrace
        new technologies aims to expand his knowledge working for a  progressive
        organization and contribute towards its growth.
      </p>
    </FlipCard>
    <FlipCard className="resume" to="/resume">
      {" "}
      Interactive resume
    </FlipCard>
    <FlipCard className="contact" to="/contact">
      {" "}
      Contact Info
    </FlipCard>
    <FlipCard className="intro" to="/intro">
      {" "}
      Complete Intro
    </FlipCard>
    <FlipCard className="projects" to="/projects">
      {" "}
      Projects Done
    </FlipCard>
  </StyledHome>
);

export default Home;
