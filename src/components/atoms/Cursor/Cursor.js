import React, { Component } from "react";
import StyledCursor from "./Cursor.style";

class Cursor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageX: 0,
      pageY: 0,
      clickAnim: false
    };
  }

  componentDidMount() {
    document.addEventListener("mousemove", e => {
      this.setState({ pageX: `${e.pageX - 15}px`, pageY: `${e.pageY - 15}px` });
    });
    document.addEventListener("click", e => {
      this.setState({ clickAnim: true }, () => {
        setTimeout(this.removeClickAnimation, 800);
      });
    });
  }

  removeClickAnimation = () => {
    this.setState({ clickAnim: false });
  };

  render() {
    const { color, className } = this.props;
    const { pageX, pageY, clickAnim } = this.state;
    return (
      <StyledCursor
        pageX={pageX}
        pageY={pageY}
        color={color}
        className={`${className} ${clickAnim ? "click-animation" : ""}`}
      />
    );
  }
}

export default Cursor;
