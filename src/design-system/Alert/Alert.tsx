import { IChildren } from "src/interfaces/IChildren";

const Alert = ({ children }: IChildren) => {
  return <div className="ds-alert">{children}</div>;
};

export default Alert;
