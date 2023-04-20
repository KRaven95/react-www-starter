import React from "react";

import { FormFieldsWithMethods, IFormField, IStorage, UseFormFields, UseFormResponse } from "./types/useForm.types";
import { readLocalStorage, readSessionStorage, writeLocalStorage, writeSessionStorage } from "src/utils/storage";
import { validateInput } from "src/utils/validateInput";
import { deepCopy } from "src/utils/deepCopy";

function useForm<K extends string>(fields: UseFormFields<K>, storage?: IStorage): UseFormResponse<K> {
  const storageInitialFields = React.useMemo(
    () =>
      storage?.doStore
        ? storage.storageType === "local-storage"
          ? readSessionStorage(storage?.storageKey || "")
          : readLocalStorage(storage?.storageKey || "")
        : null,
    []
  );

  type IForm = Record<K, IFormField>;

  const initialFields: IForm = React.useMemo(() => {
    const fieldsObj: any = {};
    for (const key in fields) {
      fieldsObj[key] = {
        value: fields[key].initialValue,
        error: "",
        touched: false,
        toShowError: false
      };
    }
    return fieldsObj;
  }, []);

  const [form, setForm] = React.useState<IForm>(storageInitialFields || initialFields);

  const updateFieldValue = (key: K, value: string) => {
    const errors = validateInput(value, fields[key].validationPattern);

    setForm((prev) => ({
      ...deepCopy(prev),
      [key]: {
        value,
        error: errors,
        touched: true,
        toShowError:
          errors.length === 0 || (prev[key].error.length === 0 && prev[key].toShowError) ? false : prev[key].toShowError
      }
    }));
  };

  const validateField = (key: K) => {
    setForm((prev) => ({
      ...deepCopy(prev),
      [key]: {
        ...prev[key],
        toShowError: true
      }
    }));
  };

  const resetField = (key: K) => {
    setForm((prev) => ({ ...deepCopy(prev), [key]: initialFields[key] }));
  };

  const validateForm = () => {
    const formCopy = deepCopy<IForm>(form);

    for (const key in formCopy) {
      const errors = validateInput(formCopy[key].value, fields[key].validationPattern);
      formCopy[key].error = errors;
      formCopy[key].toShowError = true;
    }

    setForm(formCopy);
  };
  const resetForm = () => setForm(initialFields);

  const _getFinalForm = (): FormFieldsWithMethods<K> => {
    const toReturn: any = {};

    for (const key in form) {
      toReturn[key] = {
        ...form[key],
        update: (value: string) => updateFieldValue(key, value),
        validate: () => validateField(key),
        reset: () => resetField(key)
      };
    }
    return toReturn;
  };

  const isValid = () => {
    const formAsArray: IFormField[] = Object.values(form);
    return (
      formAsArray.filter(({ error, touched, value }) => touched && error.length === 0 && value.length > 0).length ===
      formAsArray.length
    );
  };

  React.useEffect(() => {
    if (!!form && storage?.doStore) {
      storage.storageType === "local-storage"
        ? writeSessionStorage(storage.storageKey, form)
        : writeLocalStorage(storage.storageKey, form);
    }
  }, [storage, form]);

  return { fields: _getFinalForm(), validate: validateForm, reset: resetForm, isValid: isValid() };
}

export default useForm;
