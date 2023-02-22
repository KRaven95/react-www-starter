import React from "react";
import { APP_STAGE } from "@config/config";
import { paths } from "src/resources/paths";
import { Navigate } from "react-router-dom";

const Development = () => {
  if (APP_STAGE === "prod") return <Navigate to={paths.main.path} />;

  return <></>;
};

export default Development;
