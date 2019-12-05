import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StyledApp from "./App.style";
import Button from "./components/atoms/Button";
import NavBar from "./components/molecules/NavBar/NavBar";

import Home from "./components/templates/Home";
import Intro from "./components/templates/Intro";
import Contact from "./components/templates/Contact";
import Resume from "./components/templates/Resume";
import Projects from "./components/templates/Projects";

function App() {
  return (
    <StyledApp>
      <Router>
        <header id="header">
          <NavBar />
          <div class="content">
            <div class="inner">
              <h1>Bikram Jethi (FronEnd Developer)</h1>
              <p>
                A passionate Front-end Web Developer with a knack for stunning
                designs, a heart for social causes and a  never-ending zeal to
                learn and embrace new technologies aims to expand his knowledge
                working for a  progressive organization and contribute towards
                its growth.
              </p>
            </div>
          </div>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/intro" component={Intro} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;
