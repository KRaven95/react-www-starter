import React from "react";
import "./Grid.scss";

interface GridProps {
  size?: "xl" | "xxl";
  rowGap: number;
  children: React.ReactNode;
  className?: string;
}

const Grid = ({ children, size = "xl", rowGap, className }: GridProps) => {
  const classes = `rt-container-${size}${className ? ` ${className}` : ""}`;
  return (
    <div className={classes}>
      <div className="rt-grid" style={{ rowGap: `${rowGap}px` }}>
        {children}
      </div>
    </div>
  );
};

export default Grid;
