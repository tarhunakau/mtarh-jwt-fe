/* global module */
module.exports = {
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)s$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'lib',
  ],
  testPathIgnorePatterns: [
    'node_modules',
    'lib',
  ],
}
