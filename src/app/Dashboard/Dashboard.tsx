import { paths } from "../paths";

import "./Dashboard.scss";

const Dashboard = () => {
  return <div className="dashboard">Dashboard</div>;
};

export default {
  path: paths.dashboard,
  element: <Dashboard />,
  children: []
};
