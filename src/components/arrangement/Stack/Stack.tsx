import React from "react";
import { IChildren } from "@components/interfaces/IChildren";
import "./Stack.scss";

export interface IStack {
  rowGap?: number;
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-around" | "space-between" | "space-evenly";
  alignItems?: "flex-start" | "center" | "flex-end";
  p?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  className?: string;
}

const Stack = ({
  rowGap = 0,
  children,
  justifyContent = "flex-start",
  alignItems = "flex-start",
  p,
  pt,
  pb,
  pl,
  pr,
  className
}: IStack & IChildren) => {
  return (
    <div
      className={`stack ${className}`}
      style={{
        rowGap: `${rowGap}px`,
        justifyContent,
        alignItems,
        padding: p,
        paddingLeft: pl,
        paddingRight: pr,
        paddingTop: pt,
        paddingBottom: pb
      }}
    >
      {children}
    </div>
  );
};

export default Stack;
