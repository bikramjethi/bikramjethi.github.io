import styled from "styled-components";
import img from "./assets/images/appBackground.jpeg";

export default styled.div`
  min-height: 100vh;
  background: url(${img});
  color: #fff;
  
  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
