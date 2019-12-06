import styled from "styled-components";

export default styled.header`
  position: relative;
  max-width: 80%;
  padding: 10px 20px;
  background: ${props => props.background};
  color: ${props => props.color};

  .cursor {
    display: none;
  }
  :hover {
    .cursor {
      display: block;
    }
  }

  .cross-icon {
    width: 30px;
    cursor: pointer;
  }
`;
