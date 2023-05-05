import React from "react";
import "./Grid.scss";

interface GridColProps {
  children: React.ReactNode;
  className: string;
}

const GridCol = ({ children, className }: GridColProps) => {
  const classes = `rt-col ${className}`;
  return <div className={classes}>{children}</div>;
};

export default GridCol;
