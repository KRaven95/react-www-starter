import { BaseProps } from "@library/frontend/interfaces/BaseProps";
import React from "react";

interface Props extends BaseProps {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
  children: React.ReactNode;
}

const Corner = ({ children, left = false, bottom = false, right = false, top = false, ...rest }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: top ? "0px" : "unset",
        right: right ? "0px" : "unset",
        bottom: bottom ? "0px" : "unset",
        left: left ? "0px" : "unset",
        ...rest.style
      }}
      className={rest.className}
    >
      {children}
    </div>
  );
};

export default Corner;
