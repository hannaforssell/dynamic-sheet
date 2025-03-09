import styled from "styled-components";

export const MenuButton = styled.button`
  position: absolute;
  z-index: 2;
  top: -17px;
  right: 15px;
  font-size: 60px;
  border: none;
  background-color: transparent;

  //transition: all 0.3s ease-out;
  transition: rotate 2s;

  &:hover {
    color: red;
    //rotate: 360deg;
  }
`;