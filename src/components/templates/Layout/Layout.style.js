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
    display: inline-block;
    transition: all 2s;
  }

  .left-div {
    position: fixed;
    height: 100vh;
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
      padding: 40px 40px 0;
      z-index: 3;
      margin-left: 0;
      height: 200vh;
      padding-left: 47%;
    }
  }
`;
