import styled from "styled-components";
const SkillsStyled = styled.section`
  .wid {
    width: 60%;
    @media screen and (max-width: 850px) {
      width: 75%;
    }
  }
  .img-area h3 {
    color: #29F3C3;
    text-align: center;
  }
  .carousel-indicators{
    left: 0;
    top: auto;
    bottom: -70px;
  }
  .carousel-indicators button{
    background-color: #29F3C3;
  }
  .box-icon {
    font-size: 2rem;
    text-align: center;
  }
  .icon{
    font-size: 150px;
  }

`;


export default SkillsStyled