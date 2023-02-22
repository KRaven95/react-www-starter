import React from "react";
import "./Group.scss";

type JustifyContent = "flex-start" | "center" | "flex-end" | "space-around" | "space-between" | "space-evenly";
type AlignItems = "flex-start" | "center" | "flex-end";

export interface IGroup {
  colGap?: number;
  rowGap?: number;
  gap?: number;
  grid?: false;
  fullSize?: boolean;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  className?: string;
  children: React.ReactNode;
}

const Group = ({
  rowGap,
  colGap,
  gap,
  fullSize = false,
  children,
  justifyContent = "flex-start",
  alignItems = "center",
  className = ""
}: IGroup) => {
  const classes = `group${className ? ` ${className}` : ""}${fullSize ? " full-size" : ""}`;
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

export default Group;
