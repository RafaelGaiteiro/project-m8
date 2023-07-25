import { styled } from "styled-components";

export const ButtonStylized = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 18px;
  border-radius: 4px;
  background-color: #468b97;
  color: #f5f5f5;
  transition: 0.4s;
  cursor: pointer;
  margin: 4px;

  &&:hover {
    background-color: #1d5b79;
  }

  &&:active {
    background-color: #f5f5f5;
    color: #4a5568;
  }
`;
