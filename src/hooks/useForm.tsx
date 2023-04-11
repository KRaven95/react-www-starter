import React from "react";
import { ValidationPattern, validateInput } from "src/utils/validateInput";

interface IFormProps {
  validationPattern: ValidationPattern;
  key: string;
}

type IFormField = IFormProps & {
  value: string;
  error: string;
  showError: boolean;
  update: (newValue: string) => void;
};

interface UseFormResponse {
  formData: Record<string, Omit<IFormField, "key" | "validationPattern">>;
  validateForm: () => void;
  resetErrors: () => void;
  resetForm: () => void;
  isFormValid: boolean;
}

const initialInput = { value: "", error: "", showError: false };

const useForm = (props: IFormProps[]): UseFormResponse => {
  const updateInput = (key: string, newValue: string) => {
    const copy: IFormField[] = { ...form };

    const inputIndex = form.findIndex((input) => input.key === key);
    const schema = copy[inputIndex].validationPattern;
    const errors = validateInput(newValue, schema);
    copy[inputIndex].error = errors;
    copy[inputIndex].value = newValue;
    copy[inputIndex].showError = errors.length === 0 ? false : copy[inputIndex].showError;

    setForm(copy);
  };

  const initialForm = props.map((input) => ({
    ...input,
    ...initialInput,
    update: (newValue: string) => () => updateInput(input.key, newValue)
  }));
  const [form, setForm] = React.useState<IFormField[]>(initialForm);

  const validateForm = () => {
    setForm((prev) => prev.map((input) => ({ ...input, showError: true })));
  };
  const resetErrors = () => {
    setForm((prev) => prev.map((input) => ({ ...input, error: "" })));
  };
  const resetForm = () => {
    setForm((prev) => prev.map((input) => ({ ...input, ...initialInput })));
  };

  const isFormValid = form.filter((input) => input.error.length > 0).length === 0;

  const formData: Record<string, Omit<IFormField, "key" | "validationPattern">> = {};

  form.forEach(({ key, ...rest }) => (formData[`${key}` as string] = rest));

  return { formData, validateForm, resetErrors, resetForm, isFormValid };
};

export default useForm;
