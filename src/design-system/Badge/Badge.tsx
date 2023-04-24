import React from "react";
import "./Badge.scss";

interface IBadge {}

const Badge = React.forwardRef(({}: IBadge, ref: any) => {
  return <div className="badge ds-badge" ref={ref}></div>;
});

export default Badge;
