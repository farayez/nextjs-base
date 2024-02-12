/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  verbose: true,
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  coverageDirectory: 'reports/coverage'
};

export default config;
