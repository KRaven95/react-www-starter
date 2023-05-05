import React from "react";

const useBoolean = (initial: boolean) => {
  const [isTrue, setIsTrue] = React.useState(initial);

  const setTrue = () => setIsTrue(true);
  const setFalse = () => setIsTrue(false);

  const toggle = () => setIsTrue((prev) => !prev);

  const reset = () => setIsTrue(initial);

  return [isTrue, setTrue, setFalse, toggle, reset] as const;
};

export default useBoolean;
