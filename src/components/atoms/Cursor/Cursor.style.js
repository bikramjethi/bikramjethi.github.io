import styled from "styled-components";

export default styled.div.attrs(props => ({
  style: {
    top: props.pageY,
    left: props.pageX
  }
}))`
  width: 30px;
  height: 30px;
  border: 3px solid ${props => props.color};
  border-radius: 50%;
  position: absolute;
  pointer-events: none !important;
  animation: cursorAnim 0.5s infinite alternate;
  z-index: 2;

  ::before {
    content: "";
    width: 30px;
    height: 30px;
    border: 8px solid grey;
    position: absolute;
    top: -11px;
    left: -11px;
    border-radius: 50%;
    opacity: 0.5;
    animation: cursorAnim2 0.5s infinite alternate;
  }

  ::after {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    background: ${props => props.color};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes cursorAnim {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.7);
    }
  }

  @keyframes cursorAnim2{
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.4);
    }
  }

  &.click-animation {
    animation: clickAnim 1s forwards;
  }

  @keyframes clickAnim {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(2.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;
