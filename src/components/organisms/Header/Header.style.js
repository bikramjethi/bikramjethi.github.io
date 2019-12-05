import styled from "styled-components";

export default styled.header`
  position: relative;
  height: 100vh;
  max-width: 80%;
  padding: 10px 20px;
  background:${props => props.background};
  color:${props => props.color};

  .cross-icon {
    width: 30px;
    cursor: pointer;
  }
`;
