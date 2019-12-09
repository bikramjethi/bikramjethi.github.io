import styled from "styled-components";

export default styled.div`
  position: relative;
  img {
    height: 100%;
  }

  .layer {
    background-color: ${props => props.color};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
  }
`;
