import { ReactNode } from "react";
import { LabelStylized } from "./styles";

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export function Label({ children, ...props }: ILabelProps) {
  return <LabelStylized {...props}>{children}</LabelStylized>;
}
