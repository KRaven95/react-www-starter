import { EMAIL_REGEXP, PHONE_REGEXP, URL_REGEXP } from "src/constants/regexps";

export interface ValidationPattern {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  isNumber?: boolean;
  minNumber?: number;
  maxNumber?: number;
  email?: boolean;
  url?: boolean;
  phone?: boolean;
  regexp?: RegExp;
}

export const validateInput = (newValue: string, validationSchema: ValidationPattern) => {
  const { regexp, isNumber, maxLength, maxNumber, minLength, minNumber, required, email, url, phone } =
    validationSchema;
  const errors = [];

  if (typeof required === "boolean" && required === true) {
    if (newValue.length === 0) {
      errors.push("Field is required");
    }
  }

  if (typeof maxLength === "number" && typeof minLength === "number" && maxLength <= minLength) {
    throw new Error("Min length cannot be greater than Max length");
  }

  if (typeof minLength === "number") {
    if (minLength < 0) {
      throw new Error("Length cannot be lower than 0");
    }
    if (newValue.trim().length < minLength) {
      errors.push(`Min length is ${minLength}`);
    }
  }

  if (typeof maxLength === "number") {
    if (maxLength < 0) {
      throw new Error("Length cannot be lower than 0");
    }
    if (newValue.trim().length > maxLength) {
      errors.push(`Max length is ${maxLength}`);
    }
  }

  if (typeof isNumber === "boolean" && isNumber === true) {
    const parsed = parseNumber(newValue.trim());
    if (isNaN(parsed)) {
      errors.push("Field data is not a number");
    }
  }

  if (typeof minNumber === "number" && typeof maxNumber === "number" && maxNumber <= minNumber) {
    throw new Error("Min number cannot be greater than max number");
  }

  if (typeof minNumber === "number") {
    const parsed = parseNumber(newValue.trim());
    if (parsed < minNumber) {
      errors.push(`Min number is ${minNumber}`);
    }
  }

  if (typeof maxNumber === "number") {
    const parsed = parseNumber(newValue.trim());
    if (parsed < maxNumber) {
      errors.push(`Min number is ${minNumber}`);
    }
  }

  if (typeof email === "boolean" && email === true) {
    if (!EMAIL_REGEXP.test(newValue)) {
      errors.push("Email is incorrect");
    }
  }

  if (typeof url === "boolean" && url === true) {
    if (!URL_REGEXP.test(newValue)) {
      errors.push("Url is incorrect");
    }
  }

  if (typeof phone === "boolean" && phone === true) {
    if (!PHONE_REGEXP.test(newValue)) {
      errors.push("Phone number is incorrect");
    }
  }

  if (regexp instanceof RegExp) {
    if (!regexp.test(newValue)) {
      errors.push("Field is not valid");
    }
  }
  return errors.join(",  ");
};
