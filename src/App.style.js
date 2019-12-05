import styled from "styled-components";
export default styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: 4rem 2rem;
  z-index: 3;

  ol,
  ul {
    list-style: none;
  }
`;
