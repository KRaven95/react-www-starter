import { IChildren } from "@components/interfaces/IChildren";
import React from "react";
import "./Content.scss";

const Content = ({ children }: IChildren) => {
  return <div className="content">{children}</div>;
};

export default Content;
