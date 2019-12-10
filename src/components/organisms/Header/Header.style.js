import styled from "styled-components";

export default styled.header`
  position: fixed;
  height: 100%;
  z-index: 1;
  max-width: 80%;
  padding: 10px 20px;
  background: ${props => props.background};
  color: ${props => props.color};
  transition: all 2s;

  .cross-icon {
    width: 30px;
    cursor: pointer;
  }
`;
