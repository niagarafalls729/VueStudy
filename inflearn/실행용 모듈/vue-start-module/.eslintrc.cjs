/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  'root': true,
  'parserOptions': {
    ecmaVersion: '2023',
    sourceType: 'module',
  },
  'devServer': {
    proxy: 'https://dummy.restapiexample.com/api/v1/employees',
    proxy: 'http://127.0.0.1:5173/',
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  'parserOptions': {
    ecmaVersion: 'latest',
  },
};
