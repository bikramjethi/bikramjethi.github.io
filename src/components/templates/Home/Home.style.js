import styled from "styled-components";
import homePageBackground from "../../../assets/images/homePageBackground.png";

export default styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 20px;
  height: 100vh;
  background: url(${homePageBackground}) no-repeat;
  background-size: cover;
  > a {
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.3);
  }

  .brief {
    grid-column: 1/4;
    grid-row: 1/5;
  }
  .resume {
    grid-column: 4/6;
    grid-row: 1/3;
  }
  .contact {
    grid-column: 6;
    grid-row: 1/6;
  }
  .intro {
    grid-column: 1/4;
    grid-row: 5/6;
  }
  .projects {
    grid-column: 4/6;
    grid-row: 3/6;
  }
`;
