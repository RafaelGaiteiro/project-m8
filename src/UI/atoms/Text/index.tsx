import { ReactNode } from "react";
import { TextStylized } from "./styles";

export interface ITextProps {
  children: ReactNode;
  size?: "small" | "medium" | "large" | string;
  weight?: "normal" | "bold" | string;
  color?: string;
}

export function Text({ children, ...props }: ITextProps) {
  return <TextStylized {...props}>{children}</TextStylized>;
}
