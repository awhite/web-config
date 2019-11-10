import _ from 'lodash';
import general from './default.prettierrc';

const config = {
  jsxSingleQuote: false,
  jsxBracketSameLine: false
};

export default _.merge({}, general, config);
