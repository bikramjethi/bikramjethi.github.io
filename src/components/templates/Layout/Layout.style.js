import styled from "styled-components";
import { colorConfig } from "./Layout.config";

export default styled.div`
  display: flex;
  min-height: 100vh;
  background: ${props => props.background};
  color: ${props => props.color};

  a {
    color: ${props => props.color};
  }
  .main-layout {
    width: 100%;
    .cursor {
      display: none;
    }
    :hover {
      .cursor {
        display: block;
      }
    }
  }

  .two-panel {
    display: flex;
    width: 100%;
  }

  .left-div,
  .right-div {
    transition: all 2s;
  }

  .right-div {
    padding: 10px 10px 0;
  }

  @media screen and (min-width: 768px) {
    .left-div,
    .right-div {
      width: 50%;
    }
    .right-div {
      padding: 40px 40px 0;
    }
  }
`;
