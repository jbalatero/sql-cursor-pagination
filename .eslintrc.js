module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  plugins: ['import'],
  parser: 'espree',
  parserOptions: {
    ecmaVersion: 2019,
  },
  rules: {
    'no-console': ['error'],
    'no-shadow': ['error', { builtinGlobals: true }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
        },
      },
    ],
    'sort-keys': ['error'],
    'sort-vars': ['error'],
    'prefer-const': ['error'],
    'no-var': ['error'],
    'no-use-before-define': ['error'],
    'no-warning-comments': ['error'],
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json'],
      },
      rules: {
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-unsafe-assignment': ['error'],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/no-explicit-any': ['error'],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
        '@typescript-eslint/no-unnecessary-condition': ['error'],
        '@typescript-eslint/promise-function-async': ['error'],
        '@typescript-eslint/switch-exhaustiveness-check': ['error'],
        '@typescript-eslint/no-loss-of-precision': ['error'],
        '@typescript-eslint/no-throw-literal': ['error'],
        '@typescript-eslint/no-unused-expressions': ['error'],
      },
    },
  ],
};
