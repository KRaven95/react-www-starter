import React from "react";

const useCustomState = <T,>(initial: T): [T, (newString: T) => void] => {
  const [state, setState] = React.useState<T>(initial);

  const updateState = (newString: T) => setState(newString);

  return [state, updateState];
};

export default useCustomState;
