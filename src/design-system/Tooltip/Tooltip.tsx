import React from "react";
import "./Tooltip.scss";

type TooltipProps = {
  children: React.ReactNode;
  tooltipInset: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
};

const Tooltip = ({ children, tooltipInset, position = "top" }: TooltipProps) => {
  const [show, setShow] = React.useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return (
    <div className="ds-tooltip-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {show && <div className={`ds-tooltip ds-tooltip-${position}`}>{tooltipInset}</div>}
      <div className="ds-tooltip-children">{children}</div>
    </div>
  );
};

export default Tooltip;
