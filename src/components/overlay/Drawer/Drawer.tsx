import React from "react";
import "./Drawer.scss";

interface IDrawerProps {
  closeFunction?: () => void;
}

const Drawer = ({ closeFunction }: IDrawerProps) => {
  return (
    <div className="drawer">
      <h3>Drawer</h3>
      <button onClick={closeFunction}>Close</button>
    </div>
  );
};

export default Drawer;
