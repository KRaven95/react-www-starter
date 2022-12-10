import React from "react";
import { IChildren } from "@components/interfaces/IChildren";
import "./Stack.scss";

export interface IStack {
  rowGap?: number;
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-around" | "space-between" | "space-evenly";
  alignItems?: "flex-start" | "center" | "flex-end";
  className?: string;
}

const Stack = ({
  rowGap = 0,
  children,
  justifyContent = "flex-start",
  alignItems = "flex-start",
  className = ""
}: IStack & IChildren) => {
  return (
    <div
      className={`stack${className ? ` ${className}` : ""}`}
      style={{
        rowGap: `${rowGap}px`,
        justifyContent,
        alignItems
      }}
    >
      {children}
    </div>
  );
};

export default Stack;
