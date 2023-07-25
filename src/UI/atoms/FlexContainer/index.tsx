import { ReactNode } from "react";
import { FlexContainerStylized } from "./styles";

export interface IFlexContainerProps {
  children: ReactNode;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
  w?: string;
  p?: string;
  height?: string;
  margin?: string;
  maxWidth?: string;
  minWidth?: string;
}

export function Container({ children, ...props }: IFlexContainerProps) {
  return <FlexContainerStylized {...props}>{children}</FlexContainerStylized>;
}
