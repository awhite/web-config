import eslintConfig, { node as nodeEslintConfig, react as reactEslintConfig } from './eslint';

export default {
  node: {
    eslint: nodeEslintConfig
  },
  react: {
    eslint: reactEslintConfig
  },
  default: {
    eslint: eslintConfig
  }
};
