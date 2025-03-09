import { css, keyframes, styled } from "styled-components";

const enter = keyframes`
  from {opacity: 0;}
  to {opacity: 100%;}
`;

const leave = keyframes`
  from {opacity: 100%;}
  to {opacity: 0;}
`;

export const MenuModal = styled.div<{ $toggle: boolean }>`
display: flex;
flex-direction: column;
  position: absolute;
  //z-index: 1;
  top: 57px;
  right: 20px;
  width: 150px;
  height: auto;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 20px;
  background-color: #242424;

  animation: ${({ $toggle }) =>
    $toggle
      ? css`
          ${enter} 0.1s linear forwards
        `
      : css`
          ${leave} 0.1s linear forwards
        `};
`;
