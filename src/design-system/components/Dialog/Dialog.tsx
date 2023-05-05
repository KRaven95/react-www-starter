import { IChildren } from "@components/interfaces/IChildren";
import React from "react";
import "./Dialog.scss";

const Dialog = ({ children }: IChildren) => {
  return <div className="dialog">{children}</div>;
};

export default Dialog;
