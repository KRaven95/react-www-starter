import { Outlet } from "react-router";

import { paths } from "./paths";

import Main from "./Main/Main";
import Dashboard from "./Dashboard/Dashboard";

import "@scss/utils.scss";
import "@scss/base.scss";
import "@scss/lib.scss";
import "@scss/variables.scss";
import "@scss/mixins.scss";
import "@scss/grid.scss";
import "@scss/responsive.scss";

const App = () => {
  return <Outlet />;
};

export default {
  path: paths.main,
  element: <App />,
  children: [Main, Dashboard]
};
