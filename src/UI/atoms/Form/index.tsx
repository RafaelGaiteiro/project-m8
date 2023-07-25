import { ReactNode } from "react";
import { FormStylized } from "./styles";

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function Form({ children, ...props }: IFormProps) {
  return <FormStylized {...props}>{children}</FormStylized>;
}
