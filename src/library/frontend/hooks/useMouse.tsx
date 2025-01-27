import React from "react";

type UseMouseReturn = [{ x: number; y: number; speedX: number; speedY: number }, React.MutableRefObject<any>];

const useMouse = (): UseMouseReturn => {
  const [mouse, setMouse] = React.useState({
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0
  });

  const mouseRef = React.useRef<any>(null);

  const handleMouseMove = (e: MouseEvent) => {
    setMouse({
      x: e.clientX,
      y: e.clientY,
      speedX: e.movementX,
      speedY: e.movementY
    });
  };
  const handleTouchMove = (e: TouchEvent) => {
    setMouse({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      speedX: 0,
      speedY: 0
    });
  };

  React.useEffect(() => {
    if (!mouseRef.current) return;
    mouseRef.current.addEventListener("mousemove", handleMouseMove);
    mouseRef.current.addEventListener("touchmove", handleTouchMove);

    return () => {
      mouseRef.current.removeEventListener("mousemove", handleMouseMove);
      mouseRef.current.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return [mouse, mouseRef];
};

export default useMouse;
