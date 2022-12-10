import { paths } from "@data/paths";
import React from "react";
import { Navigate } from "react-router-dom";

const Development = () => {
  const appStage = process.env.REACT_APP_STAGE;
  if (appStage === "prod") return <Navigate to={paths.main} />;

  return <></>;
};

export default Development;
