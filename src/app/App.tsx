import { Outlet } from "react-router";

import { paths } from "./frontend/routing/paths";

import "@scss/root.scss";
import "@scss/grid.scss";
import "@scss/utils.scss";
import "@scss/responsive.scss";
import "@scss/typography.scss";
import "@scss/layers.scss";
import "@scss/design-system.scss";
import "@scss/reset.scss";

const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default {
  path: paths.app,
  element: <App />,
  children: []
};
