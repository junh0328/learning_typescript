module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    'linebreak-style': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-undef': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-plusplus': 0,
    'react/display-name': 0,
    'no-shadow': 0,
    'prettier/prettier': 0,
    'import/no-unresolved': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-use-before-define': '0',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
