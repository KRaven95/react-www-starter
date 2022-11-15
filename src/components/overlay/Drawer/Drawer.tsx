import { IChildren } from "@components/interfaces/IChildren";
import React from "react";
import "./Drawer.scss";

const Drawer = ({ children }: IChildren) => {
  return <div className="drawer">{children}</div>;
};

export default Drawer;
