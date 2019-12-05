import React, { Component } from "react";
import Header from "../../organisms/Header";
import { checkViewPort } from "../../../utils";
import StyledLayout from "./Layout.style";
import { pathNameConfig, colorConfig } from "./Layout.config";

class Layout extends Component {
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
    const {
      children,
      location: { pathname }
    } = this.props;
    const { isMobileView, displayHeader } = this.state;
    const mode = pathNameConfig[pathname];

    return (
      <StyledLayout color={colorConfig[mode].color} background={colorConfig[mode].background}>
        {" "}
        <Header
          isMobileView={isMobileView}
          displayHeader={displayHeader}
          openHeader={() => this.setState({ displayHeader: true })}
          closeHeader={() => this.setState({ displayHeader: false })}
        />
        {children}
      </StyledLayout>
    );
  }
}

export default Layout;
