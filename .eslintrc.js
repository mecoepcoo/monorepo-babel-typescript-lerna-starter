module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true,
  },
  globals: {},
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: true,
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 1,
    'import/no-unresolved': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
  overrides: [
    {
      files: ['*.{test,spec}.ts{,x}'],
      rules: {
        'import/no-extraneous-dependencies': [1, { packageDir: './' }],
      },
    },
  ],
}
