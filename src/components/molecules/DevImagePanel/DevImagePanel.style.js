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

  .dev-profile {
    position: absolute;
    text-align: center;
    width: 100%;
    top: 60%;
    p {
      margin-bottom: 10px;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  h1 {
    color: #fff;
    font-size: 3.5rem;
    margin-bottom: 10px;
  }
`;
