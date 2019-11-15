import _ from 'lodash';

import general from './default.eslintrc';

const config = {
  env: {
    node: true,
  },
  rules: {
    'no-console': 'off',
  },
};

export default _.merge({}, general, config);
