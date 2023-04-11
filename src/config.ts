export type AppStage = "dev" | "prod" | null;

export const APP_STAGE: AppStage = (process.env.REACT_APP_STAGE as AppStage) || null;

const DEBUG_MODE_ENV = process.env.REACT_APP_DEBUG_MODE || null;

const getDebugMode = (): boolean => {
  if (DEBUG_MODE_ENV === null) {
    throw new Error("Debug mode env not provided");
  }
  if (DEBUG_MODE_ENV !== "true" && DEBUG_MODE_ENV !== "false") {
    throw new Error("Debug mode has wrong value");
  }
  return DEBUG_MODE_ENV === "true";
};

export const DEBUG_MODE = getDebugMode();
