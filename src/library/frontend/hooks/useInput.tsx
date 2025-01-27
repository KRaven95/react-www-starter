import { useState } from "react";

const useInput = (initial?: string) => {
  const [value, setValue] = useState(initial || "");
  const update = (newAdd: string) => setValue(newAdd);
  const reset = () => setValue("");

  return { value, update, reset };
};

export default useInput;
