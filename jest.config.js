module.exports = {
  name: "jest",
  testEnvironment: "node",
  verbose: true,
  roots: ["<rootDir>/app/assets/javascripts/", "<rootDir>/test/"],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  collectCoverageFrom: [
    "app/assets/javascripts/**/*.js",
    "!**/node_modules/**"
  ],
  setupFilesAfterEnv: ['jest-extended']
};
