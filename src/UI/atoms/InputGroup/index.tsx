import { ReactNode } from "react";
import { InputGroupStylized } from "./styles";

interface IInputGroupProps {
  children: ReactNode;
}

export function InputGroup({ children }: IInputGroupProps) {
  return <InputGroupStylized>{children}</InputGroupStylized>;
}
