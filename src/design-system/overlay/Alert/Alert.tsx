import React from "react";
import { IChildren } from "@components/interfaces/IChildren";
import Portal from "@components/overlay/Portal/Portal";
import "./Alert.scss";

const Alert = ({ children }: IChildren) => {
  return <div className="alert">{children}</div>;
};

export default Alert;
