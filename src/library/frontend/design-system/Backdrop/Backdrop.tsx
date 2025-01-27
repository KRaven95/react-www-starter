import { BaseProps } from "@library/frontend/interfaces/BaseProps";

import "./Backdrop.scss";

interface IBackdrop extends BaseProps {
  open: boolean;
  byPass: boolean;
}

const Backdrop = ({ children, open, byPass, ...props }: IBackdrop) => {
  const { className, onClick, ...rest } = props;
  const backdropClass = open ? "open" : null;

  if (byPass) return <>{children}</>;

  return (
    <div className={`backdrop-wrapper ${backdropClass} ${className}`} {...rest}>
      <div className="backdrop" onClick={onClick}></div>
      {children}
    </div>
  );
};

export default Backdrop;
