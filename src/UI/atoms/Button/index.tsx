import { ReactNode } from "react";
import { ButtonStylized } from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...props }: IButtonProps) {
  return <ButtonStylized {...props}>{children}</ButtonStylized>;
}
