import { ReactNode } from "react";
import { AlertStylized } from "./styles";

export interface IAlertProps {
  children: ReactNode;
  typeOfAlert?: "error" | "success" | "warning";
}

export function Alert({ children, ...props }: IAlertProps) {
  return <AlertStylized {...props}>{children}</AlertStylized>;
}
