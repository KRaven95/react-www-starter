export interface ValidationPattern {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  isNumber?: boolean;
  minNumber?: number;
  maxNumber?: number;
  regexp?: RegExp;
}

export const validateInput = (newValue: string, validationPattern: ValidationPattern) => {
  const errors = [];
  const { isNumber, maxLength, maxNumber, minLength, minNumber, regexp, required } = validationPattern;

  if (typeof required === "boolean" && required === true) {
    if (newValue.length === 0) {
      errors.push("This field is required");
    }
  }
  if (typeof minLength === "number" && minLength >= 0) {
    if (newValue.trim().length < minLength) {
      errors.push(`Too short text. Length of ${minLength} is min`);
    }
  }
  if (typeof maxLength === "number" && maxLength >= 0) {
    if (newValue.trim().length > maxLength) {
      errors.push(`Too long text. Length of ${maxLength} is max`);
    }
  }
  if (typeof isNumber === "boolean" && isNumber === true) {
    const parsed = parseNumber(newValue.trim());
    if (isNaN(parsed)) {
      errors.push(`Field data is not a number`);
    }
  }
  if (typeof minNumber === "number" && typeof maxNumber === "number" && maxNumber <= minNumber) {
    throw new Error("Min number cannot be greater than max number");
  }
  if (typeof minNumber === "number") {
    const parsed = parseNumber(newValue.trim());
    if (parsed < minNumber) {
      errors.push(`Number is too small. ${minNumber} is min`);
    }
  }
  if (typeof maxNumber === "number") {
    const parsed = parseNumber(newValue.trim());
    if (parsed < maxNumber) {
      errors.push(`Number is too small. ${minNumber} is min`);
    }
  }
  if (regexp instanceof RegExp) {
    if (!regexp.test(newValue)) {
      errors.push("Email is not valid");
    }
  }
  return errors.join(",  ");
};
