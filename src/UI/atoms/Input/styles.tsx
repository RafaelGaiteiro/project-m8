import { styled } from "styled-components";

export const InputStylized = styled.input`
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 16px;
  background-color: #f5f5f5;
  box-shadow: 0 0 0 4px transparent;
  border-radius: 6px;
  border: none;
  outline: none;
  padding: 12px 18px;
  transition: 0.4s;
  width: 100%;

  &&:hover {
    box-shadow: 0 0 0 4px #468b97;
  }

  &&:focus {
    box-shadow: 0 0 0 4px skyblue;
  }
`;
