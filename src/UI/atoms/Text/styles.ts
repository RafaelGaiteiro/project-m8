import { styled } from "styled-components";
import { ITextProps } from ".";

export const TextStylized = styled.p<ITextProps>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ theme }) => theme.colors.white};
`;
