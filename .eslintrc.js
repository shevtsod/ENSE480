module.exports = {
  extends: ['react-app'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': 0,
    'react/display-name': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: '_' }],
    'no-process-env': 0
  }
}
