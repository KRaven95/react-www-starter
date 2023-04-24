import { IChildren } from "src/interfaces/IChildren";

import "./Alert.scss";

const Alert = ({ children }: IChildren) => {
  return <div className="alert ds-alert">{children}</div>;
};

export default Alert;
