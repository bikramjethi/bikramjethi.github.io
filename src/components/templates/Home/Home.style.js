import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 20px;
  height: 100vh;
  > div {
    padding: 10px;
    border-radius: 5px;
  }

  .brief {
    background: red;
    grid-column: 1/4;
    grid-row: 1/5;
  }
  .resume {
    background: cyan;
    grid-column: 4/6;
    grid-row: 1/3;
  }
  .contact {
    background: green;
    grid-column: 6;
    grid-row: 1/6;
  }
  .intro {
    background: grey;
    grid-column: 1/4;
    grid-row: 5/6;
  }
  .projects {
    background: blue;
    grid-column: 4/6;
    grid-row: 3/6;
  }
`;
