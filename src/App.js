import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StyledApp from "./App.style";
import "./App.css";

import Home from "components/templates/Home";
import Intro from "components/templates/Intro";
import Contact from "components/templates/Contact";
import Resume from "components/templates/Resume";
import Projects from "components/templates/Projects";

import Layout from "./components/templates/Layout";

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Router>
          <Switch>
            <Layout>
              <Route path="/" exact component={Home} />
              <Route path="/intro" component={Intro} />
              <Route path="/resume" component={Resume} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </Layout>
          </Switch>
        </Router>
      </StyledApp>
    );
  }
}

export default App;
