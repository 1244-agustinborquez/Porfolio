import styled from "styled-components";

export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: #000;
  padding: 0.4rem 2rem;
  font-size: 0.85rem;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin-bottom: 0.6rem;
  &:active,
  &:focus {
    background: linear-gradient(to right, #29F3C3, #0D5141);
  }
  &:hover {
    background: linear-gradient(to right, #29F3C3, #0D5141);
  }
  &:not(:last-child) {
    margin-right: 0.6rem;
  }
`;
export const ButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 2.4rem auto;
`;