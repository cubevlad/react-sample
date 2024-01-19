module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-rational-order'],
  customSyntax: 'postcss-styled-syntax',
  rules: {
    'value-keyword-case': ['lower', { ignoreKeywords: ['optimizeLegibility'] }],
    'color-function-notation': 'legacy',
    'selector-id-pattern': null,
    'selector-class-pattern': null,
    'scss/operator-no-unspaced': null,
    'scss/operator-no-newline-after': null,
    'scss/no-global-function-names': null,
  },
}
