import { IChildren } from "@components/interfaces/IChildren";
import React from "react";
import "./Motion.scss";

export type DurationVariants = 0 | 1 | 2 | 3 | 4 | 5;
export type SlideDirections = "left" | "right" | "top" | "bottom";

export interface AnimationProps {
  spin?: boolean;
  shake?: boolean;
  appear?: boolean;
  slide?: {
    direction: SlideDirections;
    active: boolean;
  };
  duration: DurationVariants;
  onAnimationEnd?: () => void;
  onClick?(): void;
}

const speedTimes = {
  speed0: 150,
  speed1: 300,
  speed2: 600,
  speed3: 1000,
  speed4: 1500,
  speed5: 3000
};

const Motion = ({
  children,
  spin,
  shake,
  appear,
  slide,
  duration,
  onAnimationEnd = () => {}
}: IChildren & AnimationProps) => {
  const motionRef = React.useRef(null as any);

  const buildAnimation = (): string => {
    let animation = "";
    if (spin) {
      animation += `spin-${duration}`;
    }
    if (shake) {
      animation += `shake-${duration}`;
    }

    if (appear) {
      animation += `appear-${duration}`;
    }

    if (slide?.active) {
      animation += "slide";
      if (slide?.direction === "left") {
        animation += ` slide-left slide-left-${duration}`;
      }
    }

    return animation;
  };

  React.useEffect(() => {
    setTimeout(async () => {
      onAnimationEnd();
    }, speedTimes[`speed${duration}`]);
  }, [spin, shake, appear, slide, duration, onAnimationEnd]);

  return (
    <div className={`${buildAnimation()} motion`} ref={motionRef}>
      {children}
    </div>
  );
};

export default Motion;
