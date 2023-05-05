import React from "react";

const useDropdown = (initial: boolean) => {
  const [isTrue, setIsTrue] = React.useState(initial);
  const setFalse = () => setIsTrue(false);
  const toggle = () => setIsTrue((prev) => !prev);

  return [isTrue, setFalse, toggle] as const;
};

export default useDropdown;
