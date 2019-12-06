import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
  position: relative;

  &:hover {
    .card-wrapper {
      transform: rotateY(180deg);
    }
  }

  .card-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 2s;
  }

  .card-wrapper:hover {
  }

  .card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    color: #333;
  }

  .card-front {
  }

  .card-back {
    transform: rotateY(180deg);
  }
`;
