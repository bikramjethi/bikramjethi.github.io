import styled from "styled-components";

export default styled.div`
  min-height: 100vh;
  background: #453f86;
  display: flex;

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  header {
    min-width: 80%;
    background: #393737;
  }

  @media screen and (min-width: 768px) {
    header {
      min-width: 200px;
    }
  }

  @media screen and (min-width: 1024px) {
    header {
      min-width: 250px;
    }
  }
`;
