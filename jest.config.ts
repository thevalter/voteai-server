import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": ["ts-jest", {}],
  },
};

export default config;
