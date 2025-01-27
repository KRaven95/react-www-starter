import { useState, useCallback, useLayoutEffect, useRef, RefObject } from "react";

type UseMeasureRect = {
  left: number;
  top: number;
  width: number;
  height: number;
  bottom: number;
  right: number;
};

function useTagPosition<T extends HTMLElement = HTMLDivElement>(): [RefObject<T>, UseMeasureRect] {
  const [rect, setRect] = useState<UseMeasureRect>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    bottom: 0,
    right: 0
  });

  const ref = useRef<T>(null);

  const handleResize = useCallback(() => {
    if (!ref.current) return;

    const dimensions = ref.current.getBoundingClientRect();
    setRect(dimensions);
  }, []);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [handleResize]);

  return [ref, rect];
}

export default useTagPosition;
