import styled from "styled-components";

export default styled.div`
  min-height: 100vh;
  background: #453f86;
  display: flex;

  ol,
  ul {
    list-style: none;
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  button {
    color: transparent;
  }

  .header-menu {
    align-self: flex-start;
  }

  .header-menu-icon {
    width: 30px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
