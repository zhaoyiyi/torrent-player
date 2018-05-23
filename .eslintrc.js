module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  rules: {
    'no-console': 'off',
  },
};
