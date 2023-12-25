module.exports = {
  root: true,
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  extends: ['@frknnice/eslint-config', 'plugin:@tanstack/eslint-plugin-query/recommended'],
}
