import { BaseProps } from "@library/frontend/interfaces/BaseProps";
import { classNames } from "@library/functions/utils";

import "./Expandable.scss";

const expandableStates = ["expanded", "collapsed"] as const;
type ExpandableStates = (typeof expandableStates)[number];

interface Props extends BaseProps {
  timingMs: number;
  state: ExpandableStates;
}

const Expandable = ({ children, timingMs, state }: Props) => {
  const timingS = timingMs / 1000;

  return (
    <div className={classNames("expandable", state)} style={{ [`--timing-expandable` as any]: `${timingS}s` }}>
      {children}
    </div>
  );
};

export default Expandable;
