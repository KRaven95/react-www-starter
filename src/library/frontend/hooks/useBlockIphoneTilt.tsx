import React from "react";
import { useWindowDimensions } from "./useWindowDimensions";

const useBlockIphoneTilt = () => {
  const { width } = useWindowDimensions();

  React.useEffect(() => {
    document.body.classList.add("fixed-100-100");

    return () => {
      document.body.classList.remove("fixed-100-100");
    };
  }, [width]);
};

export default useBlockIphoneTilt;
