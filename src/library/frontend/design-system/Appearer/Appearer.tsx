import { BaseProps } from "@library/frontend/interfaces/BaseProps";
import useTimeout from "@library/frontend/hooks/useTimeout";

import "./Appearer.scss";

interface Props extends BaseProps {
  timingMs: number;
  callback(): void;
}

const Appearer = ({ children, timingMs, callback }: Props) => {
  useTimeout(callback, timingMs);
  const timingS = timingMs / 1000;

  return (
    <div className="appearer" style={{ [`--timing` as any]: `${timingS}s` }}>
      {children}
    </div>
  );
};

export default Appearer;
