import { paths } from "@data/paths";
import React from "react";
import { Navigate } from "react-router-dom";
import "./Development.scss";

const Development = () => {
  if (process.env.REACT_APP_STAGE === "prod") return <Navigate to={paths.main} />;

  return <></>;
};

export default Development;
