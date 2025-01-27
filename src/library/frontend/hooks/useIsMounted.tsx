import { useEffect } from "react";
import useBoolean from "./useBoolean";

const useIsMounted = () => {
  const [isMounted, mount] = useBoolean(false);

  useEffect(() => {
    mount();
  }, []);

  return isMounted;
};

export default useIsMounted;
