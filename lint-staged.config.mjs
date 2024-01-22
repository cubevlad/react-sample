const eslintRules = 'eslint --max-warnings=0'

const prettierRules = 'prettier --ignore-unknown --write'

const stylelintRules = 'stylelint --max-warnings=0 --config ./.stylelintrc'

export default {
  '*.{ts,tsx,js,jsx}': [eslintRules, stylelintRules, prettierRules],
  '*.{css,scss}': [stylelintRules, prettierRules],
  '!*.{js,jsx,ts,tsx,css,scss}': [prettierRules],
}
