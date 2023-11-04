import { EMAIL_REGEXP, PHONE_REGEXP, URL_REGEXP } from "src/constants/regexps";

type ValidationPatternBase = {
  isRequired?: { value: boolean; error: string };
};

type ValidationPatternBase2 = {
  minLength?: { value: number; error: string };
  maxLength?: { value: number; error: string };
  regexp?: { value: RegExp; error: string };
};

type ValidationPatternNumber = ValidationPatternBase &
  ValidationPatternBase2 & {
    isNumber?: { value: boolean; error: string };
    isPositive?: { value: boolean; error: string };
    isInteger?: { value: boolean; error: string };
    minNumber?: { value: number; error: string };
    maxNumber?: { value: number; error: string };
  };

type ValidationPatternBoolean = {
  desiredBoolean?: { value: boolean; error: string };
} & ValidationPatternBase;

type ValidationPatternString = ValidationPatternBase &
  ValidationPatternBase2 & {
    isPureString?: { value: boolean; error: string };
    isClassicString?: { value: boolean; error: string };
  };

type ValidationPatternStringEmail = ValidationPatternString & {
  isEmail?: { value: true; error: string };
};

type ValidationPatternStringUrl = ValidationPatternString & {
  isUrl?: { value: true; error: string };
};

type ValidationPatternStringPhone = ValidationPatternString & {
  isPhone?: { value: true; error: string };
};

export type ValidationPattern =
  | ValidationPatternString
  | ValidationPatternStringEmail
  | ValidationPatternStringUrl
  | ValidationPatternStringPhone
  | ValidationPatternNumber
  | ValidationPatternBoolean;

export const validateInput = (newValue: string | boolean, validationSchema: ValidationPattern) => {
  const errors: string[] = [];

  const addError = (message: string) => {
    errors.push(message);
  };

  if (typeof newValue === "string") {
    const valueStr = newValue.trim();
    const parsed = Number(valueStr);

    if (validationSchema.isRequired?.value && valueStr.length === 0) {
      addError(validationSchema.isRequired.error);
    }

    if ("minLength" in validationSchema) {
      if (typeof validationSchema.minLength?.value === "number" && validationSchema.minLength?.value < 0) {
        addError(validationSchema.minLength.error);
      }
    }

    if ("maxLength" in validationSchema) {
      if (typeof validationSchema.maxLength?.value === "number" && validationSchema.maxLength?.value < 0) {
        addError(validationSchema.maxLength.error);
      }
    }

    if ("minLength" in validationSchema && "maxLength" in validationSchema) {
      if (
        typeof validationSchema.minLength?.value === "number" &&
        typeof validationSchema.maxLength?.value === "number" &&
        validationSchema.maxLength?.value <= validationSchema.minLength?.value
      ) {
        throw new Error("Min length cannot be lower or equal to max length");
      }
    }

    if ("isNumber" in validationSchema && validationSchema.isNumber?.value) {
      if (isNaN(parsed)) {
        addError(validationSchema.isNumber.error);
      } else {
        if (validationSchema.isPositive?.value && parsed <= 0) {
          addError(validationSchema.isPositive.error);
        }
      }
    }

    if (
      "isClassicString" in validationSchema &&
      validationSchema.isClassicString?.value &&
      typeof valueStr !== "string"
    ) {
      addError(validationSchema.isClassicString.error);
    }

    if ("isPureString" in validationSchema && validationSchema.isPureString?.value && /\d/.test(valueStr)) {
      addError(validationSchema.isPureString.error);
    }

    if ("isInteger" in validationSchema && validationSchema.isInteger?.value) {
      if (isNaN(parsed) || !Number.isInteger(parsed)) {
        addError(validationSchema.isInteger.error);
      }
    }

    if (
      "minNumber" in validationSchema &&
      typeof validationSchema.minNumber?.value === "number" &&
      "maxNumber" in validationSchema &&
      typeof validationSchema.maxNumber?.value === "number" &&
      validationSchema.minNumber?.value >= validationSchema.maxNumber?.value
    ) {
      throw new Error("Min number cannot be greater or equal to max number");
    }

    if ("minNumber" in validationSchema && typeof validationSchema.minNumber?.value === "number") {
      if (parsed < validationSchema.minNumber?.value) {
        addError(validationSchema.minNumber.error);
      }
    }

    if ("maxNumber" in validationSchema && typeof validationSchema.maxNumber?.value === "number") {
      if (parsed > validationSchema.maxNumber?.value) {
        addError(validationSchema.maxNumber.error);
      }
    }

    if ("isEmail" in validationSchema && validationSchema.isEmail?.value && !EMAIL_REGEXP.test(valueStr)) {
      addError(validationSchema.isEmail.error);
    }

    if ("isUrl" in validationSchema && validationSchema.isUrl?.value && !URL_REGEXP.test(valueStr)) {
      addError(validationSchema.isUrl.error);
    }

    if ("isPhone" in validationSchema && validationSchema.isPhone?.value && !PHONE_REGEXP.test(valueStr)) {
      addError(validationSchema.isPhone.error);
    }

    if (
      "regexp" in validationSchema &&
      validationSchema.regexp?.value instanceof RegExp &&
      !validationSchema.regexp.value.test(valueStr)
    ) {
      addError(validationSchema.regexp.error);
    }
  } else if (typeof newValue === "boolean" && "desiredBoolean" in validationSchema) {
    if (
      typeof validationSchema.desiredBoolean?.value === "boolean" &&
      newValue !== validationSchema.desiredBoolean?.value
    ) {
      addError(validationSchema.desiredBoolean.error);
    }
  }

  return errors;
};
