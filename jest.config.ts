import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: false,
  globalSetup:'./tests/global.setup.ts',
  globalTeardown:'./tests/global.teardown.ts',
}
export default config