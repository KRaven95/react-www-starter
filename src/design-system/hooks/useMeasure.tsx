import { useState, useCallback, useLayoutEffect, useRef, RefObject } from "react";

type UseMeasureRect = {
  left: number;
  top: number;
  width: number;
  height: number;
  bottom: number;
  right: number;
};

function useMeasure<T extends HTMLElement = HTMLDivElement>(): [RefObject<T>, UseMeasureRect] {
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

    const { left, top, width, height, bottom, right } = ref.current.getBoundingClientRect();
    setRect({ left, top, width, height, bottom, right });
  }, []);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [handleResize]);

  return [ref, rect];
}

export default useMeasure;
