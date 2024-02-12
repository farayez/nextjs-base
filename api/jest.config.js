/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  verbose: true,
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  coverageDirectory: 'src/__tests__/coverage'
};

export default config;
