import styled from "styled-components";

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 80%;
    padding: 10px;
    img {
      width: 100%;
      border: 5px solid #29F3C3;
      object-fit: cover;
      filter: grayscale(0.55);
      box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    }
    &:hover {
      opacity: 0.8;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 1.8rem;
      padding: 0 1.5rem;
      color: #fff;
      span {
        font-size: 1.8rem;
      }
    }
    .paragraph {
      padding: 1.5rem 1.5rem;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`;
export default ImageSectionStyled;