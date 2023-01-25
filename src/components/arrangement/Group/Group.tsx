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
  rowGap = 0,
  colGap = 0,
  gap = 0,
  grid = false,
  fullSize = false,
  children,
  justifyContent = "flex-start",
  alignItems = "center",
  className = ""
}: IGroup) => {
  const classes = `group${className ? ` ${className}` : ""}${fullSize ? " full-size" : ""}${grid ? " grid" : ""}`;
  return (
    <div
      className={classes}
      style={{
        columnGap: `${colGap}px`,
        rowGap: `${rowGap}px`,
        gap: `${gap}px`,
        justifyContent,
        alignItems
      }}
    >
      {children}
    </div>
  );
};

export default Group;
