import styled from "styled-components";
import { colorConfig } from "./Layout.config";

export default styled.div`
  display: flex;
  min-height: 100vh;
  background: ${props => props.background};
  color: ${props => props.color};

  .two-panel {
    display: flex;
  }

  .left-div,
  .right-div {
    width: 50%;
    transition: all 2s;
  }

  .left-div:hover,
  .right-div:hover {
    width: 120%;
  }
`;
