import React from "react";
import { IChildren } from "@components/interfaces/IChildren";
import "./Group.scss";

export interface IGroup {
  colGap?: number;
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-around" | "space-between" | "space-evenly";
  alignItems?: "flex-start" | "center" | "flex-end";
  className?: string;
}

const Group = ({
  colGap = 0,
  children,
  justifyContent = "flex-start",
  alignItems = "center",
  className = ""
}: IGroup & IChildren) => {
  return (
    <div
      className={`group${className ? ` ${className}` : ""}`}
      style={{
        columnGap: `${colGap}px`,
        justifyContent,
        alignItems
      }}
    >
      {children}
    </div>
  );
};

export default Group;
