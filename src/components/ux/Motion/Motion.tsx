import { IChildren } from "@components/interfaces/IChildren";
import React from "react";
import "./Motion.scss";

export type DurationVariants = 0 | 1 | 2 | 3 | 4 | 5;

export interface AnimationProps {
  spin?: {
    duration: DurationVariants;
    active: boolean;
    delay?: number;
  };
  shake?: {
    duration: DurationVariants;
    active: boolean;
    delay?: number;
  };
  appear?: {
    duration: DurationVariants;
    active: boolean;
    delay?: number;
  };
  onClick?(): void;
}

const Motion = ({ children, spin, shake, appear, onClick }: IChildren & AnimationProps) => {
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

    if (appear) {
      if (appear.active) {
        animation += " appear";
        if (appear.delay) {
          animation += `-${appear.duration}`;
        }
      }
    }

    console.log(animation);
    return animation;
  };

  const getDelay = () => {
    if (appear) {
      if (appear.delay) {
        return `${appear.delay}s`;
      }
      return "unset";
    }
    return "unset";
  };

  return (
    <div
      className={`${buildAnimation()} motion`}
      // onClick={toggleMotion}
      ref={motionRef}
      style={{ animationDelay: getDelay() }}
    >
      {children}
    </div>
  );
};

export default Motion;
