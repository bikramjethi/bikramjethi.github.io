import React from "react";
import StyledHome from "./Home.style";

const Home = () => (
  <StyledHome className="right-div">
    {" "}
    <div className="brief wrap-home">
      <h1>Bikram Jethi (FrontEnd Developer)</h1>
      <p>
        A passionate Front-end Web Developer with a knack for stunning designs,
        a heart for social causes and a  never-ending zeal to learn and embrace
        new technologies aims to expand his knowledge working for a  progressive
        organization and contribute towards its growth.
      </p>
    </div>
    <div className="intro wrap-home"> Complete Intro</div>
    <div className="resume wrap-home"> Interactive resume</div>
    <div className="projects wrap-home"> Projects Done</div>
    <div className="contact wrap-home"> Contact Info</div>
  </StyledHome>
);

export default Home;
