import styled from "styled-components";

export default styled.div`
  h1 {
    color: white;
    margin-bottom: 15px;
  }

  .intro-info {
    margin-bottom: 15px;
    p {
      display: inline-block;
      ::after {
        content: "\u00A0/\u00A0";
        color: #5e5e5f;
      }
      :last-child {
        ::after {
          display: none;
        }
      }
    }
  }
`;
