import React from "react";
import { useWindowDimensions } from "./useWindowDimensions"; // Assuming this is in a separate file

const useTagSize = () => {
  const [size, setSize] = React.useState({ width: 0, height: 0 });
  const ref = React.useRef<any>(null);
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();

  React.useEffect(() => {
    if (!ref.current) return;

    setSize({
      width: ref.current.clientWidth,
      height: ref.current.clientHeight
    });
  }, [windowHeight, windowWidth]);

  return { height: size.height, width: size.width, ref };
};

export default useTagSize;
