module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1'
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': '@vue/vue3-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/layouts/*.vue',
    '<rootDir>/pages/*.vue'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ]
}
