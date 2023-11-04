import { IChildren } from "src/interfaces/IChildren";
import React from "react";
import "./Dialog.scss";

const Dialog = ({ children }: IChildren) => {
  return <div className="dialog">{children}</div>;
};

export default Dialog;
