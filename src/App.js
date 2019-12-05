import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StyledApp from "./App.style";
import "./App.css";
import Button from "./components/atoms/Button";

import Home from "./components/templates/Home";
import Intro from "./components/templates/Intro";
import Contact from "./components/templates/Contact";
import Resume from "./components/templates/Resume";
import Projects from "./components/templates/Projects";
import { checkViewPort } from "./utils";
import Header from "./components/organisms/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileView: false,
      displayHeader: false
    };
  }
  componentDidMount() {
    this.setState({ isMobileView: checkViewPort() });
    window && window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window && window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    //  eslint-disable-next-line
    const isMobileView = checkViewPort();
    this.setState({ isMobileView });
  };

  render() {
    const { isMobileView, displayHeader } = this.state;
    return (
      <StyledApp>
        <Router>
          {!displayHeader && isMobileView && (
            <button onClick={() => this.setState({ displayHeader: true })}>
              Display header
            </button>
          )}
          {(!isMobileView || displayHeader) && (
            <Header
              isMobileView={isMobileView}
              closeHeader={() => this.setState({ displayHeader: false })}
            />
          )}
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
}

export default App;
