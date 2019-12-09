import styled from "styled-components";
export default styled.nav`
  .nav-link {
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  a {
    padding: 10px 0;
    border-radius: 5px;
    color: #fff;
  }

  img {
    width: 30px;
  }

  .tool-tip {
    position: absolute;
    display: inline-block;
    overflow: hidden;
    z-index: 1;
    color: #000;
    padding: 5px;
    background: ${props => props.background};
    border-radius: 0 5px 5px 0;
    left: 100%;
    visibility: hidden;
    max-height: 28px;
  }

  .nav-link:hover {
    .tool-tip {
      animation: navLinkAnim 0.6s forwards;
      visibility: visible;
    }
  }

  @keyframes navLinkAnim {
    0% {
      width: 20px;
    }
    100% {
      width: 250px;
    }
  }
`;
