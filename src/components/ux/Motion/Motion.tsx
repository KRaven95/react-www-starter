import { IChildren } from "@components/interfaces/IChildren";
import React from "react";
import "./Motion.scss";

export type DurationVariants = 1 | 2 | 3 | 4 | 5;

export interface AnimationProps {
  spin?: {
    duration: DurationVariants;
    active: boolean;
  };
  shake?: {
    duration: DurationVariants;
    active: boolean;
  };
  onClick?(): void;
}

const Motion = ({ children, spin, shake, onClick }: IChildren & AnimationProps) => {
  const motionRef = React.useRef(null as any);
  const toggleMotion = (): void => {
    if (!motionRef.current) return;

    motionRef.current.classList.toggle("paused");
  };

  const buildAnimation = (): string => {
    let animation = "";
    if (spin) {
      animation += "spin";
      if (spin.active) {
        animation += `-${spin.duration}`;
      }
    }
    if (shake) {
      animation += " shake";
      if (shake.active) {
        animation += `-${shake.duration}`;
      }
    }

    return animation;
  };

  return (
    <div className={`${buildAnimation()} motion`} onClick={toggleMotion} ref={motionRef}>
      {children}
    </div>
  );
};

export default Motion;
