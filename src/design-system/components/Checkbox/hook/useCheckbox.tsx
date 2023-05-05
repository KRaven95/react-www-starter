import React from "react";
import useBoolean from "src/design-system/hooks/useBoolean";

interface UseCheckboxValue {
  isChecked: boolean;
  check: () => void;
  uncheck: () => void;
  toggle: () => void;
  validate: () => void;
  error: string;
  toShowError: boolean;
  isValid: boolean;
  reset: () => void;
}

const useCheckbox = (desiredState: boolean, initialState: boolean, initialError?: string): UseCheckboxValue => {
  const [isChecked, check, uncheck, toggle, reset] = useBoolean(initialState);
  const [error, setError] = React.useState(initialError || "");
  const [toShowError, setToShowError] = React.useState(true);

  const validate = () => {
    if (isChecked !== desiredState) {
      setToShowError(true);
    }
  };

  const isValid = error.length === 0;

  React.useEffect(() => {
    if (isChecked === desiredState) {
      setToShowError(false);
      setError("");
    } else {
      setError("This field is required");
    }
  }, [isChecked]);

  return { isChecked, check, uncheck, toggle, validate, error, toShowError, isValid, reset };
};

export default useCheckbox;
