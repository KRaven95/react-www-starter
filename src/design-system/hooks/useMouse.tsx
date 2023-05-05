import React from "react";

const useMouse = () => {
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

  React.useEffect(() => {
    if (!mouseRef.current) return;
    mouseRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      mouseRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return [mouse, mouseRef];
};

export default useMouse;
