import { CSSProperties, ReactNode, useEffect } from "react";

import { TChildren } from "@library/frontend/interfaces/IChildren";
import useBoolean from "@library/frontend/hooks/useBoolean";
import useAnimationStage from "@library/frontend/hooks/useAnimationStage";
import { classNames } from "@library/functions/utils";

import "./ShowSmooth.scss";

interface Props {
  onlyWhen: boolean;
  timingMs: number;
  children: TChildren;
  renderInstead?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const ShowSmooth = ({ onlyWhen, timingMs, children, className, style, renderInstead }: Props) => {
  const [isFirstRender, _, no] = useBoolean(true);
  const [canShow, show, hide] = useBoolean(false);
  const { animateEnter, animateLeave, stage, afterAnimationFinished } = useAnimationStage("static");

  useEffect(() => {
    if (!onlyWhen) return;

    show();
    animateEnter();
    no();
  }, [onlyWhen]);

  useEffect(() => {
    if (onlyWhen) return;
    if (isFirstRender) return;

    animateLeave();
    const timeoutId = setTimeout(() => {
      hide();
    }, timingMs);

    return () => clearTimeout(timeoutId);
  }, [onlyWhen]);

  useEffect(() => {
    if (stage === "static") return;

    const timeoutId = setTimeout(() => {
      afterAnimationFinished();
    }, timingMs);

    return () => clearTimeout(timeoutId);
  }, [stage]);

  if (!canShow && !!renderInstead) return <>{renderInstead}</>;
  if (!canShow) return <></>;

  const timingS = timingMs / 1000;

  return (
    <div
      className={classNames("show-smooth", stage, className)}
      style={{ [`--timingS` as any]: `${timingS}s`, ...style }}
    >
      {children}
    </div>
  );
};

export default ShowSmooth;
