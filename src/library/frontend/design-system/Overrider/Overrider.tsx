import { ReactNode } from "react";
import { BaseProps } from "@library/frontend/interfaces/BaseProps";

import useTimeout from "@library/frontend/hooks/useTimeout";

import "./Overrider.scss";

interface Props extends BaseProps {
  durationMs: number;
  callback(): void;
  overrideWith: ReactNode;
}

const Overrider = ({ children, durationMs, callback, overrideWith }: Props) => {
  useTimeout(callback, durationMs);
  const durationS = durationMs / 1000;

  return (
    <div className="overrider">
      {children}
      <div className="override-with" style={{ [`--override-timing` as any]: `${durationS}s` }}>
        {overrideWith}
      </div>
    </div>
  );
};

export default Overrider;
