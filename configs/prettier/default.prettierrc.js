export default {
  singleQuote: false,
  printWidth: 100,
  semi: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  trailingComma: 'all',
  overrides: [
    {
      files: '*.js',
      options: {
        singleQuote: true
      }
    },
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    }
  ]
};
