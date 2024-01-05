module.exports = {
  testEnvironment: "jsdom",
  modulePathIgnorePatterns: ["node_modules", "jest-test-results.json"],
  setupFiles: ["./.test/jest.setup.js"],
  setupFilesAfterEnv: ["./.test/setupTests.ts"],
  moduleDirectories: ["node_modules", "utils", __dirname],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/fileMock.ts",
    "\\.(png|svg)$": "<rootDir>/__mocks__/imgFileMock.ts",
  },
};
