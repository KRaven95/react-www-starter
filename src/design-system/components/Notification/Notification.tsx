import React from "react";
import "./Notification.scss";
import { IChildren } from "src/interfaces/IChildren";

const Notification = ({ children }: IChildren) => {
  return <div className="notification">{children}</div>;
};

export default Notification;
