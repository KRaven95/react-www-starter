import React from "react";
import { Debug } from "src/debug/Debug";
import "./Main.scss";

const Main = () => {
  Debug.log("debug");
  return <h1 className="main">Main page</h1>;
};

export default Main;
