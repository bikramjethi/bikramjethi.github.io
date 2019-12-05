import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StyledApp from "./App.style";
import './App.css';
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
