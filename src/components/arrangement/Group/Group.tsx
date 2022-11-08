import React from "react";
import { IChildren } from "@components/interfaces/IChildren";
import "./Group.scss";

export interface IGroup {
  colGap?: number;
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-around" | "space-between" | "space-evenly";
  alignItems?: "flex-start" | "center" | "flex-end";
  p?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  className?: string;
}

const Group = ({
  colGap = 0,
  children,
  justifyContent = "flex-start",
  alignItems = "center",
  p,
  pt,
  pb,
  pl,
  pr,
  className = ""
}: IGroup & IChildren) => {
  return (
    <div
      className={`group ${className}`}
      style={{
        columnGap: `${colGap}px`,
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

export default Group;
