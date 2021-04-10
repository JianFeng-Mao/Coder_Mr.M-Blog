module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'generator-star-spacing': 'off',
    'no-tabs': 'off',
    'no-unused-vars': 'off',
    'no-irregular-whitespace': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
  },
};