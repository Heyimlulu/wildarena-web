export default {
  preset: undefined,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transformIgnorePatterns: [
    '/node_modules/(?!lucide-react|remark|remark-html|remark-parse|mdast-util-from-markdown|unified|bail|trough|vfile|vfile-message|is-plain-obj|unherit|property-information|zwitch).+\\.js$'
  ],

};
