export const mergeRefs = <T>(...refs: (React.Ref<T> | null)[]): React.RefCallback<T> => {
  return (value: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref !== null && ref !== undefined) {
        // @ts-ignore
        ref.current = value;
      }
    });
  };
};
