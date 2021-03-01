module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  globalSetup: '<rootDir>/jest/global-setup.js',
  setupFiles: [
    './jest/setup.js',
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@dev-dep/).*/',
  ],
  transform: {
    '\\.(css|scss)$': 'jest-css-modules-transform',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/.yarn-cache/', '<rootDir>/node_modules/'],
  modulePathIgnorePatterns: ['<rootDir>/.yarn-cache/', '<rootDir>/build/'],
  coveragePathIgnorePatterns: [
    '\\.scss$',
    '\\.svg$',
    '/jest/',
  ],
  clearMocks: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
