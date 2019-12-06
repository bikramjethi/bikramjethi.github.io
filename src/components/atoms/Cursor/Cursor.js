import React, { Component } from "react";
import StyledCursor from "./Cursor.style";

class Cursor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageX: 0,
      pageY: 0
    };
  }

  componentDidMount() {
    document.addEventListener("mousemove", e => {
      this.setState({ pageX: `${e.pageX - 15}px`, pageY: `${e.pageY - 15}px` });
    });
  }

  render() {
    const { color, className } = this.props;
    const { pageX, pageY } = this.state;
    return (
      <StyledCursor
        pageX={pageX}
        pageY={pageY}
        color={color}
        className={className}
      />
    );
  }
}

export default Cursor;
