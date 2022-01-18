import type { Config } from "@jest/types";
import nextJext from "next/jest";

const createJestConfig = nextJext({
  dir: "./",
});

const config: Config.InitialOptions = {
  rootDir: ".",
  verbose: true,
  cache: true,
  cacheDirectory: "<rootDir>/.test-cache/",
  moduleDirectories: ["<rootDir>/modules/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir/.test-cache/",
    "<rootDir>/.storybook/",
    "<rootDir>/coverage/",
  ],
  collectCoverageFrom: [
    "<rootDir>/modules/**/*.{ts,tsx}",
    "<rootDir>/pages/**/*.{ts,tsx}",
    "!<rootDir>/modules/**/*.stories.tsx",
    "!**/*.d.ts",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^.+\\.(css|sass|scss)$": "<rootDir>/__tests__/__mocks__/styleMock.js",
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$": `<rootDir>/__tests__/__mocks__/fileMock.js`,
  },
  transformIgnorePatterns: ["^.+\\.module\\.(css|sass|scss)$"],
};

export default createJestConfig(config);
