import { useEffect } from "react";
import { mergeRefs } from "../tools/utils";
import useMouse from "./useMouse";
import useMouseMovingX, { DirectionX } from "./useMouseMovingX";
import useBoolean from "./useBoolean";

interface UseSwipeProps {
  minRangeX: number;
  maxRangeX: number | "max";
  minDistanceXPx: number;
  direction: DirectionX;
  onTrigger: () => void;
}

const useSwipe = ({ minRangeX, maxRangeX, direction, minDistanceXPx, onTrigger }: UseSwipeProps) => {
  const [canLocallyTrigger, trigger, restart] = useBoolean(false);

  const { direction: mouseDirection, distance, ref, stage } = useMouseMovingX();
  const [mouseOnArea, mouseOnAreaRef] = useMouse();

  const isInRange = mouseOnArea.x > minRangeX && (typeof maxRangeX === "number" ? mouseOnArea.x < maxRangeX : true);
  const areConditionsMet =
    direction === mouseDirection && distance >= minDistanceXPx && stage === "release" && isInRange;

  useEffect(() => {
    if (!areConditionsMet) return;

    trigger();
  }, [distance, direction, stage, mouseOnArea.x]);

  useEffect(() => {
    if (stage !== "static") return;

    restart();
  }, [stage]);

  useEffect(() => {
    if (!canLocallyTrigger) return;

    onTrigger();
  }, [canLocallyTrigger]);

  const summaryRef = mergeRefs(ref, mouseOnAreaRef);

  return { ref: summaryRef };
};

export default useSwipe;
