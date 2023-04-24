import React from "react";

import "./Group.scss";

export interface IGroup {
  colGap?: number;
  rowGap?: number;
  gap?: React.CSSProperties["gap"];
  grid?: false;
  fullSize?: boolean;
  fullWidth?: boolean;
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  className?: string;
  children: React.ReactNode;
}

const Group = React.forwardRef(
  (
    {
      rowGap,
      colGap,
      gap,
      fullSize = false,
      fullWidth = false,
      children,
      justifyContent = "flex-start",
      alignItems = "center",
      className = ""
    }: IGroup,
    ref: any
  ) => {
    const classes = `group${className ? ` ${className}` : ""}${fullSize ? " full-size" : ""}${
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

export default Group;
