import { useState } from "react";

function useArray<T>(initialArray: T[]) {
  const [array, setArray] = useState<T[]>(initialArray);

  const add = (item: T) => {
    setArray((prevArray) => [...prevArray, item]);
  };

  const addFirst = (item: T) => {
    setArray((prevArray) => [item, ...prevArray]);
  };

  const remove = (index: number) => {
    setArray((prevArray) => prevArray.filter((_, i) => i !== index));
  };

  const removeFirst = () => {
    remove(0);
  };

  const removeLast = () => {
    setArray((prevArray) => prevArray.slice(0, -1));
  };

  const override = (index: number, newItem: T) => {
    setArray((prevArray) => prevArray.map((item, i) => (i === index ? newItem : item)));
  };

  const clear = () => {
    setArray(() => []);
  };

  return {
    array,
    add,
    addFirst,
    remove,
    removeFirst,
    removeLast,
    override,
    clear
  };
}

export default useArray;
