import React from "react";
import { BaseProps } from "@library/frontend/interfaces/BaseProps";

interface Props extends BaseProps {
  width?: number;
  height?: number;
  className: string;
}

const Divider = ({ width, height, ...props }: Props) => {
  const dividerStyle: React.CSSProperties = {
    height: height || "1px",
    width: width || "100%"
  };

  return <div style={dividerStyle} {...props} />;
};

export default Divider;
