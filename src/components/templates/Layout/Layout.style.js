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

  .left-div,
  .right-div {
    transition: all 2s;
  }

  .left-div {
    position: fixed;
    height: 100%;
  }

  .right-div {
    padding: 10px 2px 0 5px;
    z-index: 1;
    margin-left: 70px;
  }

  @media screen and (min-width: 768px) {
    .left-div,
    .right-div {
      width: 50%;
    }
    .right-div {
      padding: 40px 40px 0;
      float: right;
      margin-left: 0;
    }
  }
`;
