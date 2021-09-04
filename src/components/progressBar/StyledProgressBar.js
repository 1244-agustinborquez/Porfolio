import styled from "styled-components";

const ProgressBarStyled = styled.div`
  h4 {
    color: #29F3C3;
  }
  .progress-bar {
    display: flex;
    align-items: center;
    p {
      font-size: 1rem;
      padding-right: 1.1rem;
    }
    .progress {
      position: relative;
      width: 100%;
      height: 0.4rem;
      background-color: #272727;
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        background-color: #29F3C3;
      }
    }
  }
`;
export default ProgressBarStyled