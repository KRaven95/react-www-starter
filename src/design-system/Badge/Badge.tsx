import { ReactNode } from "react";

import "./Badge.scss";

type BadgeProps = {
  number: number;
  children: ReactNode;
};

const Badge = ({ number, children }: BadgeProps) => {
  return (
    <div className="ds-badge-container">
      {children}
      <div className="ds-badge">{number}</div>
    </div>
  );
};

export default Badge;
