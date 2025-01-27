import { useEffect, useState } from "react";
import { screenSizes } from "../constants/screen";
import { useWindowDimensions } from "./useWindowDimensions";
import { ScreenSizes } from "../interfaces/ScreenSizes";

const useIsMobile = (maxScreenSize: ScreenSizes) => {
  const { width } = useWindowDimensions();

  const isMobileBasic = width <= screenSizes[maxScreenSize];

  const [isMobile, setIsMobile] = useState(isMobileBasic);

  useEffect(() => {
    if (isMobile !== isMobileBasic) {
      setIsMobile(isMobileBasic);
    }
  }, [isMobileBasic]);

  return isMobile;
};

export default useIsMobile;
