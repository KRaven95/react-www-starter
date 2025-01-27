import React from "react";

const useComponentState = <T,>(initialState: T | (() => T)) => {
  const [someState, setSomeState] = React.useState<T>(initialState);

  return [someState, setSomeState];
};

export default useComponentState;
