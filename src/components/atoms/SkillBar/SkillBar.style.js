import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 10px;
  position: relative;
  background: #fff;
  border-radius: 5px;

  ::after {
    content: "";
    display: inline-block;
    position: absolute;
    height: 10px;
    background: ${props => props.color};
    width: ${props => props.value}%;
    border-radius: 5px;
  }

  .skill,
  .skill-value {
    position: absolute;
    top: -20px;
  }

  .skill-value {
    right: 0;
  }
`;
