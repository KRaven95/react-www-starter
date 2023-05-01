import { useState, useCallback } from "react";

type UseBoolean = [boolean, () => void, () => void, () => void];

const useBoolean = (initialState = false): UseBoolean => {
  const [state, setState] = useState<boolean>(initialState);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);

  const setFalse = useCallback(() => {
    setState(false);
  }, []);

  const toggle = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return [state, setTrue, setFalse, toggle];
};

export default useBoolean;
