import type { Config } from "jest";

const { defaults } = require("jest-config");

const config: Config = {
  globals: {
    "ts-jest": {
      isolatedModules: true
    }
  },
  clearMocks: true,
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: [defaults.moduleFileExtensions, "ts", "tsx"]
};

export default config;
