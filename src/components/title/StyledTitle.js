import styled from "styled-components";
const TitleStyled = styled.div`
  position: relative;
  h2 {
    color: #f7f7f7;
    font-size: 3.1rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.7rem;
    text-shadow: 5px 5px 2px #555555;
    @media screen and (max-width: 496px) {
      font-size: 2.8rem;
    }
    @media screen and (max-width: 370px) {
      font-size: 2rem;
    }
    /* &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 7.4rem;
      height: 0.33rem;
      background-color: #29F3C3;
      border-radius: 15px;
      left: 0;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 3.5rem;
      height: 0.33rem;
      background-color: #29F3C3;
      border-radius: 15px;
      left: 0;
    } */
    /* span {
      font-weight: 900;
      color: rgba(0, 0, 0, 0.44);
      font-size: 5rem;
      position: absolute;
      left: 0;
      top: 30%;
      z-index: -1;
      
      @media screen and (max-width: 620px) {
        font-size: 4rem;
      }
      @media screen and (max-width: 496px) {
        font-size: 3rem;
      }
      @media screen and (max-width: 370px) {
        font-size: 2rem;
      }
    } */
  }
`;

export default TitleStyled;