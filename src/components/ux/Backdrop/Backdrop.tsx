import React from "react";
import { IChildren } from "@components/interfaces/IChildren";
import "./Backdrop.scss";

interface IBackdrop {
  open: boolean;
  onClick: () => void;
}

const Backdrop = ({ children, open, onClick }: IBackdrop & IChildren) => {
  const backdropClass = open ? "open" : null;

  return (
    <div className={`backdrop-wrapper ${backdropClass}`}>
      <div className="backdrop" onClick={onClick}></div>
      {children}
    </div>
  );
};

export default Backdrop;
