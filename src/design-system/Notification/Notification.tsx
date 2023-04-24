import React from "react";
import { IChildren } from "@components/interfaces/IChildren";
import "./Notification.scss";

const Notification = ({ children }: IChildren) => {
  return <div className="notification">{children}</div>;
};

export default Notification;
