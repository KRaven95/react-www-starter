import React from "react";
import "./Stack.scss";

type JustifyContent = "flex-start" | "center" | "flex-end" | "space-around" | "space-between" | "space-evenly";
type AlignItems = "flex-start" | "center" | "flex-end";

export interface IStack {
  rowGap?: number;
  colGap?: number;
  gap?: number;
  fullSize?: boolean;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  className?: string;
  children: React.ReactNode;
}

const Stack = ({
  rowGap,
  colGap,
  gap,
  fullSize = false,
  children,
  justifyContent = "flex-start",
  alignItems = "flex-start",
  className = ""
}: IStack) => {
  const classes = `stack${className ? ` ${className}` : ""}${fullSize ? " full-size" : ""}`;
  return (
    <div
      className={classes}
      style={{
        rowGap: rowGap ? `${rowGap}px` : undefined,
        columnGap: colGap ? `${colGap}px` : undefined,
        gap: gap ? `${gap}px` : undefined,
        justifyContent,
        alignItems
      }}
    >
      {children}
    </div>
  );
};

export default Stack;
