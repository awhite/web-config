import eslintConfig, { node as nodeEslintConfig, react as reactEslintConfig } from './eslint';
import prettierConfig, { react as reactPrettierConfig } from './prettier';

export default {
  node: {
    eslint: nodeEslintConfig,
    prettier: prettierConfig
  },
  react: {
    eslint: reactEslintConfig,
    prettier: reactPrettierConfig
  },
  default: {
    eslint: eslintConfig,
    prettier: prettierConfig
  }
};
