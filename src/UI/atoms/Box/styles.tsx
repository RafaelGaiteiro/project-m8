import { styled } from "styled-components";
import { IBoxProps } from ".";

export const BoxStylized = styled.div<IBoxProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ gap }) => gap};
  width: ${({ w }) => (w ? w : "100%")};
  height: ${({ h }) => (h ? h : "100%")};
  padding: ${({ p }) => p};
  margin: ${({ margin }) => margin};
  max-width: ${({ maxwidth }) => maxwidth};
  min-width: ${({ minwidth }) => minwidth};
  background-color: ${({ theme }) => theme.colors.tertiary};
  overflow: ${({ overflow }) => (overflow === true ? "auto" : "hidden")};
`;
