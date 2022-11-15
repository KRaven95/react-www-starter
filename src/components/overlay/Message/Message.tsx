import React from "react";
import { IChildren } from "@components/interfaces/IChildren";
import "./Message.scss";

const Message = ({ children }: IChildren) => {
  return <div className="message">{children}</div>;
};

export default Message;
