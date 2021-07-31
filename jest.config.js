/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './jest-report',
        filename: 'report.html',
        expand: false,
        openReport: false,
      },
    ],
  ],

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    // "json",
    'text',
    'lcov',
    'clover'
  ],

  globals: {
    'ts-jest': {
      extends: './babel.config.js',
    },
  },

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
  ],

  // Activates notifications for test results
  notify: false,

  // An enum that specifies notification mode. Requires { notify: true }
  notifyMode: 'always',

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    '<rootDir>packages'
  ],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
