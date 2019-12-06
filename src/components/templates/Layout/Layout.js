import React, { Component } from "react";
import Header from "../../organisms/Header";
import { checkViewPort } from "../../../utils";
import StyledLayout from "./Layout.style";
import { pathNameConfig, imagePanelConfig, colorConfig } from "./Layout.config";
import DevImagePanel from "../../molecules/DevImagePanel";
import Cursor from "../../atoms/Cursor";

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
    const background = colorConfig[mode].background;
    const color = colorConfig[mode].color;
    const imagePanel = imagePanelConfig[mode];
    return (
      <StyledLayout color={color} background={background}>
        {" "}
        <Header
          isMobileView={isMobileView}
          displayHeader={displayHeader}
          background={color}
          color={background}
          openHeader={() => this.setState({ displayHeader: true })}
          closeHeader={() => this.setState({ displayHeader: false })}
        />
        <div className={`${imagePanel ? "two-panel" : ""} main-layout`}>
          <Cursor color={color} className="cursor" />
          {imagePanel && <DevImagePanel className="left-div" />}
          {children}
        </div>
      </StyledLayout>
    );
  }
}

export default Layout;
