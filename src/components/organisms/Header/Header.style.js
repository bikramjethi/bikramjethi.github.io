import styled from "styled-components";

export default styled.header`
  position: relative;

  min-width: 80%;
  background: #bcd3c2;

  .cross-icon {
    position: absolute;
    right: 10px;
    top: 2px;
  }

  @media screen and (min-width: 768px) {
    min-width: 200px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 250px;
  }
`;
