import { useState } from "react";

interface Props {
  initial: string;
}

const useString = (initial: string) => {
  const [value, setValue] = useState(initial);
  const update = (newAdd: string) => setValue(newAdd);
  const reset = () => setValue("");

  return { value, update, reset };
};

export default useString;
