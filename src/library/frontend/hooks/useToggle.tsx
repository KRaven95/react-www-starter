import useBoolean from "./useBoolean";

const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [isOpened, open, close, toggle] = useBoolean(initialState);

  return [isOpened, toggle];
};

export default useToggle;
