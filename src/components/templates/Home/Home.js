import React from "react";
import StyledHome from "./Home.style";

const Home = ({ className }) => (
  <StyledHome className={className}>
    {" "}
    <div className="brief">
      <h1>Bikram Jethi (FrontEnd Developer)</h1>
      <p>
        A passionate Front-end Web Developer with a knack for stunning designs,
        a heart for social causes and a  never-ending zeal to learn and embrace
        new technologies aims to expand his knowledge working for a  progressive
        organization and contribute towards its growth.
      </p>
    </div>
    <div className="intro"> Complete Intro</div>
    <div className="resume"> Interactive resume</div>
    <div className="projects"> Projects Done</div>
    <div className="contact"> Contact Info</div>
  </StyledHome>
);

export default Home;
