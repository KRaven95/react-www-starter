import { useEffect, useState } from "react";

type Orientation = "vertical" | "horizontal" | null;

const useOrientation = (): Orientation => {
  const [orientation, setOrientation] = useState<Orientation>(getOrientation());

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(getOrientation());
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return orientation;
};

const getOrientation = (): Orientation => {
  if (window.matchMedia("(orientation: portrait)").matches) {
    return "vertical";
  } else if (window.matchMedia("(orientation: landscape)").matches) {
    return "horizontal";
  }

  return null;
};

export default useOrientation;
