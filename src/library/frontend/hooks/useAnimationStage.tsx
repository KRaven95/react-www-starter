import { useState } from "react";

type AnimationStage = "animate-entering" | "static" | "animate-leaving";

const useAnimationStage = (initial: AnimationStage) => {
  const [stage, setStage] = useState<AnimationStage>(initial);

  const withCanChangeStage = (callback: () => void) => {
    if (stage !== "static") return;

    callback();
  };

  const animateEnter = () => withCanChangeStage(() => setStage("animate-entering"));
  const animateLeave = () => withCanChangeStage(() => setStage("animate-leaving"));
  const afterAnimationFinished = () => setStage(initial);

  return { stage, animateEnter, animateLeave, afterAnimationFinished };
};

export default useAnimationStage;
