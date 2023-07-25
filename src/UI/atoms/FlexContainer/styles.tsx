import { styled } from "styled-components";
import { IFlexContainerProps } from ".";

export const FlexContainerStylized = styled.div<IFlexContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ gap }) => gap};
  width: ${({ w }) => (w ? w : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  padding: ${({ p }) => p};
  margin: ${({ margin }) => margin};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  background-color: ${({theme}) => theme.colors.secondary};

  justify-content: center;
  align-items: center;
`;
