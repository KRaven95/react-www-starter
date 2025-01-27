import { BaseProps } from "@library/frontend/interfaces/BaseProps";
import useTimeout from "@library/frontend/hooks/useTimeout";

import "./Remover.scss";

interface Props extends BaseProps {
  timing: number;
  callback(): void;
}

const Remover = ({ children, timing, callback }: Props) => {
  useTimeout(callback, 2 * timing);
  const timingS = timing / 1000;

  return (
    <div className="remover" style={{ [`--timing` as any]: `${timingS}s` }}>
      <div className="to-remove">{children}</div>
    </div>
  );
};

export default Remover;
