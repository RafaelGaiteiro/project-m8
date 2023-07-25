import { styled } from "styled-components";
import { IAlertProps } from ".";

export const AlertStylized = styled.div<IAlertProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 20px;
  border-radius: 4px;
  background-color: ${({ typeOfAlert }) =>
    typeOfAlert
      ? (typeOfAlert === "error" && "#b31312") ||
        (typeOfAlert === "success" && "#00DFA2") ||
        (typeOfAlert === "warning" && "#F2BE22")
      : "#30A2FF"};
  width: 100%;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 500;
  color: white;
  transition: 2s;
  margin-top: 4px;
`;
