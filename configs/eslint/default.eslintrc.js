export default {
  env: {
    es6: true,
  },
  extends: ['plugin:shopify/esnext'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'max-len': ['error', { code: 100 }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'babel/object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'import/no-anonymous-default-export': 'off',
    'line-comment-position': 'off',
    'array-callback-return': 'off',
  },
};
