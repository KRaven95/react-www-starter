import { IChildren } from "@components/interfaces/IChildren";
import React from "react";
import "./Content.scss";

const Content = ({ children }: IChildren) => {
  return <main className="content">{children}</main>;
};

export default Content;
