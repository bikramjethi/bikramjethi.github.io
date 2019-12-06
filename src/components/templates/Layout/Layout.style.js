import styled from "styled-components";
import { colorConfig } from "./Layout.config";

export default styled.div`
  display: flex;
  min-height: 100vh;
  background: ${props => props.background};
  color: ${props => props.color};

  .two-panel {
    display: flex;
    width: 100%;
  }

  .left-div,
  .right-div {
    width: 50%;
    transition: all 2s;
  }
`;