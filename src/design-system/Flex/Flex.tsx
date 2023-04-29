import React, { ReactNode } from "react";

type FlexProps = {
  orientation: "row" | "col";
  children: ReactNode;
  className?: string;
  gap?: string | number;
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  fullSize?: "width" | "height" | "both";
  fullWidth?: boolean;
};

const Flex = ({
  orientation,
  children,
  className,
  gap,
  justifyContent,
  alignItems,
  fullSize,
  fullWidth
}: FlexProps) => {
  const flexDirection = orientation === "row" ? "row" : "column";
  const gapStyle = orientation === "col" ? { columnGap: gap } : { rowGap: gap };
  const style = {
    display: "flex",
    flexDirection,
    justifyContent,
    alignItems,
    width: fullWidth ? "100%" : fullSize === "width" || fullSize === "both" ? "100%" : "max-content",
    height: fullSize === "height" || fullSize === "both" ? "100%" : "max-content",
    ...gapStyle
  };
  return (
    <div className={className} style={style as React.CSSProperties}>
      {children}
    </div>
  );
};

export default Flex;
