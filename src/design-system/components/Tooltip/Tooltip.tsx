import React from "react";

type TooltipProps = {
  children: React.ReactNode;
  tooltipInset?: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
};

const Tooltip = ({ children, tooltipInset, position = "top", className }: TooltipProps) => {
  const [show, setShow] = React.useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return (
    <div className={`ds-tooltip-wrapper ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {show && tooltipInset && (
        <div className={`ds-tooltip ds-tooltip-${position}`}>
          {tooltipInset}
          <div className="ds-tooltip-triangle" />
        </div>
      )}
      <div className="ds-tooltip-children">{children}</div>
    </div>
  );
};

export default Tooltip;
