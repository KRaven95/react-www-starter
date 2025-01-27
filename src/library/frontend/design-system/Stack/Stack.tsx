import React from "react";
import { BaseProps } from "@library/frontend/interfaces/BaseProps";

import "./Stack.scss";

export interface IStack extends BaseProps {
  children: React.ReactNode;
  colGap?: number;
  rowGap?: number;
  fullSize?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  testId?: string;
}

const Stack = React.forwardRef(
  (
    {
      rowGap = 0,
      colGap = 0,
      fullSize = false,
      fullWidth = false,
      fullHeight = false,
      children,
      justifyContent = "flex-start",
      alignItems = "flex-start",
      testId = "",
      ...rest
    }: IStack,
    ref: any
  ) => {
    const classes = `stack${rest.className ? ` ${rest.className}` : ""}${fullSize ? " full-size" : ""}${
      fullWidth ? " full-width" : ""
    }${fullHeight ? " full-height" : ""}`;

    const isGap = !!rowGap || !!colGap;

    return (
      <div
        {...rest}
        ref={ref}
        className={`${classes}`}
        data-testid={testId}
        style={{
          gap: isGap ? `${rowGap}px ${colGap}px` : undefined,
          justifyContent,
          alignItems,
          display: "flex",
          // flexDirection: "column",
          ...rest.style
        }}
      >
        {children}
      </div>
    );
  }
);

export default Stack;
