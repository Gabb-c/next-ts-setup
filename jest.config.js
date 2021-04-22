module.exports = {
  collectCoverageFrom: [
    '**/*.{jsx,ts,tsx}',
    '!**/*.d.ts',  //  Exclude all type declaration files
    '!**/node_modules/**',  //  Exclude all files in node_modules
    '!**/.next/**',  //  Exclude all files in the .next folder
    '!**/styles/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
}
