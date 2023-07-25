import { styled } from "styled-components";

export const LabelStylized = styled.label`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  user-select: none;
  color: ${({ theme }) => theme.colors.white};
`;
