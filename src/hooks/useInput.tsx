import React from "react";
import { ValidationPattern, validateInput } from "src/utils/validateInput";

interface IValidInput {
  value: string;
  error: string;
  toShowError: boolean;
}

const initialInput: IValidInput = {
  value: "",
  error: "",
  toShowError: false
};

type UseValidInputResponse = [
  input: IValidInput,
  updateInputValue: (newValue: string) => void,
  validate: () => void,
  isInputValid: boolean,
  resetInput: () => void
];

const useInput = (validationPattern: ValidationPattern): UseValidInputResponse => {
  const [input, setInput] = React.useState<IValidInput>(initialInput);

  const updateInputValue = (newValue: string) => {
    const errors = validateInput(newValue, validationPattern);
    setInput({
      ...input,
      value: newValue,
      error: errors,
      toShowError: errors.length === 0 ? false : input.toShowError
    });
  };

  const validate = () => {
    setInput({ ...input, toShowError: true });
  };

  const resetInput = () => setInput(initialInput);

  const isInputValid = React.useMemo(() => input.error.trim().length === 0, [input.error]);

  return [input, updateInputValue, validate, isInputValid, resetInput];
};

export default useInput;
