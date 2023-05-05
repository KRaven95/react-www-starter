import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type Props = {
  as?: "input" | "textarea"; // Specify which element to use
  className?: string; // Optional class name
} & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input: FC<Props> = ({ as = "input", className = "", ...restProps }) => {
  // Determine which element to render based on the "as" prop
  const TextField = as === "textarea" ? "textarea" : "input";

  // Combine the provided className with the base className
  const combinedClassName = `ds-input ${className}`;

  // Return the appropriate element with the provided props
  return <TextField className={combinedClassName} {...restProps} />;
};

export default Input;
