import { ReactNode } from "react";
import { BoxStylized } from "./styles";

export interface IBoxProps {
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
  h?: string;
  w?: string;
  p?: string;
  margin?: string;
  maxwidth?: string;
  minwidth?: string;
  overflow?: boolean;
}

export function Box({ children, ...props }: IBoxProps) {
  return <BoxStylized {...props}>{children}</BoxStylized>;
}
