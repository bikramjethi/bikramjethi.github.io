import styled from "styled-components";

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
  }

  .left-div,
  .right-div {
    display: inline-block;
    transition: all 2s;
  }

  .left-div {
    position: fixed;
    height: 100vh;
    z-index: 2;
  }

  .right-div {
    padding: 10px 2px 0 5px;
    z-index: 1;
    margin-left: 70px;
  }

  @media screen and (min-width: 768px) {
    .main-layout {
      display: flex;
      margin-left: 140px;
    }
    .left-div {
      width: 40%;
    }
    .right-div {
      padding: 40px 10px 0;
      margin-left: 0;
      padding-left: 51%;
    }
  }

  @media screen and (min-width: 1024px) {
    .right-div {
      padding-left: 48%;
    }
  }
`;
