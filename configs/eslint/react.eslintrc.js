import _ from 'lodash';

import general from './default.eslintrc';

const config = {
  env: {
    browser: true,
    commonjs: true,
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: ['react'],
  rules: {
    'react/no-deprecated': 'warn',
    'react/prop-types': [0],
  },
};

export default _.merge({}, general, config);
