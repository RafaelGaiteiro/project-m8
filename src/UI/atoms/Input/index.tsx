import React from "react";
import { InputStylized } from "./styles";
import { forwardRef } from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return <InputStylized {...props} ref={ref} />;
});
