import { ValidationPattern } from "src/utils/validateInput";

export interface IEntryFormField {
  validationPattern: ValidationPattern;
  initialValue: string;
}

type StorageType = "session-storage" | "local-storage";

export interface IStorage {
  doStore: boolean;
  storageType: StorageType;
  storageKey: string;
}

export type UseFormFields<K extends string> = Record<K, IEntryFormField>;

export interface IFormField {
  value: string;
  error: string;
  toShowError: boolean;
  touched: boolean;
}

interface FormFieldMethods {
  update: (value: string) => void;
  validate: () => void;
  reset: () => void;
}

export type FormFieldsWithMethods<K extends string> = Record<K, IFormField & FormFieldMethods>;

export interface UseFormResponse<K extends string> {
  fields: FormFieldsWithMethods<K>;
  validate: () => void;
  reset: () => void;
  isValid: boolean;
}
