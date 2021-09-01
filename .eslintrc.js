module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  ignorePatterns: ['dist/*'],
  env: {
    browser: true,
    webextensions: true,
    es6: true,
  },
};
