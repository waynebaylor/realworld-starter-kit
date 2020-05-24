module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/?!(@bikeshaving/crank/dom)'],
};
