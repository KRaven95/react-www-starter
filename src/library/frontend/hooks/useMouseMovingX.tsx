import { useState, useEffect, useRef } from "react";

export type DirectionX = "left" | "right" | null;
type Stage = "static" | "tense" | "release";

export interface MouseMoveXReturn {
  distance: number;
  direction: DirectionX;
  ref: React.RefObject<HTMLDivElement>;
  stage: Stage;
}

const useMouseMovingX = (): MouseMoveXReturn => {
  const [startX, setStartX] = useState<number | null>(null);
  const [distance, setDistance] = useState<number>(0);
  const [stage, setStage] = useState<Stage>("static");
  const [direction, setDirection] = useState<DirectionX>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleStart = (clientX: number) => {
    setStartX(clientX);
    setDistance(0);
    setDirection(null);
  };

  const handleMove = (clientX: number) => {
    if (startX === null) return;

    const diffX = clientX - startX;
    setStage("tense");
    setDistance(Math.abs(diffX));
    setDirection(diffX > 0 ? "right" : "left");
  };

  const handleEnd = () => {
    setStartX(null);
    setStage(startX === null ? "static" : "release");
  };

  useEffect(() => {
    if (stage !== "release") return;

    const timeout = setTimeout(() => {
      setStage("static");
    }, 600);

    return () => clearTimeout(timeout);
  }, [stage]);

  const handleTouchStart = (e: TouchEvent) => handleStart(e.touches[0].clientX);
  const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

  const handleMouseDown = (e: MouseEvent) => handleStart(e.clientX);
  const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("touchstart", handleTouchStart);
    element.addEventListener("touchmove", handleTouchMove);
    element.addEventListener("touchend", handleEnd);
    element.addEventListener("mousedown", handleMouseDown);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseup", handleEnd);
    element.addEventListener("mouseleave", handleEnd);

    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchmove", handleTouchMove);
      element.removeEventListener("touchend", handleEnd);
      element.removeEventListener("mousedown", handleMouseDown);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseup", handleEnd);
      element.removeEventListener("mouseleave", handleEnd);
    };
  }, [startX]);

  return { distance: Math.round(distance), direction, ref, stage };
};

export default useMouseMovingX;
