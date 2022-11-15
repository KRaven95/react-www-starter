import React from "react";
import { IChildren } from "@components/interfaces/IChildren";
import "./Modal.scss";

const Modal = ({ children }: IChildren) => {
  return <div className="modal">{children}</div>;
};

export default Modal;
