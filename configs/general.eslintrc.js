export default {
  env: {
    es6: true
  },
  extends: ['plugin:prettier/recommended', 'plugin:shopify/esnext'],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'babel/object-curly-spacing': ['error', 'always']
  }
};
