import styled from "styled-components";

export default styled.div`
  min-height: 100vh;
  background: #453f86;

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .header-menu {
    width: 30px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
