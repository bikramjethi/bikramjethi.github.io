import React, { Component } from "react";
import StyledCursor from "./Cursor.style";

class Cursor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageX: false,
      pageY: false
    };
  }
  componentDidMount() {
    document.addEventListener("mousemove", e => {
      this.setState({ pageX: e.pageX - 15, pageY: e.pageY - 15 });
    });
  }

  render() {
    const { color, background } = this.props;
    const { pageX, pageY } = this.state;
    return (
      <StyledCursor
        pageX={pageX}
        pageY={pageY}
        color={color}
        background={background}
      />
    );
  }
}

export default Cursor;
