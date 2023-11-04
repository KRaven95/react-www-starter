import React from "react";
import { IChildren } from "src/interfaces/IChildren";
import "./Backdrop.scss";

interface IBackdrop {
  open: boolean;
  onClick?: () => void;
}

const Backdrop = ({ children, open, onClick }: IBackdrop & IChildren) => {
  // const backdropClass = open ? "open" : null;

  return (
    <>
      {open ? (
        <div className={`backdrop-wrapper open`}>
          <div className="backdrop" onClick={onClick}></div>
          {children}
        </div>
      ) : null}
    </>
  );
};

export default Backdrop;
