import React from "react";
import { useWindowDimensions } from "./useWindowDimensions";

const useTagHeight = () => {
  const [tagHeight, setTagHeight] = React.useState(0);
  const tagHeightRef = React.useRef<any>(null);
  const { height, width } = useWindowDimensions();

  React.useEffect(() => {
    if (!tagHeightRef.current) return;

    setTagHeight(tagHeightRef.current.clientHeight);
  }, [height, width]);

  return { tagHeight, tagHeightRef };
};

export default useTagHeight;
