import React from "react";

import "./Stack.scss";

export interface IStack {
  rowGap?: number;
  colGap?: number;
  gap?: React.CSSProperties["gap"];
  fullSize?: boolean;
  fullWidth?: boolean;
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  className?: string;
  children: React.ReactNode;
}

const Stack = React.forwardRef(
  (
    {
      rowGap,
      colGap,
      gap,
      fullSize = false,
      fullWidth = false,
      children,
      justifyContent = "flex-start",
      alignItems = "flex-start",
      className = ""
    }: IStack,
    ref: any
  ) => {
    const classes = `stack${className ? ` ${className}` : ""}${fullSize ? " full-size" : ""}${
      fullWidth ? " full-width" : ""
    }`;
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
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default Stack;
