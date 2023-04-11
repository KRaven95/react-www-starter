import React, { HTMLInputTypeAttribute } from "react";
import "./Input.scss";

interface IInput {
  label?: string;
  value: string;
  onChange(value: string): void;
  error?: string;
  placeholder?: string;
  type?: "text" | "email" | "number" | "password" | "search" | "tel" | "url";
}

const Input = ({ label = "", onChange, value, error = "", placeholder = "", type = "search" }: IInput) => {
  const id = React.useId();
  return (
    <div className="input">
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={error && "danger-border"}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder={placeholder}
        type={type}
      />
      {error && <p className="s2 error danger-color">{error}</p>}
    </div>
  );
};

export default Input;
