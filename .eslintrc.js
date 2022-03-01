module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // semi: ['warn', 'never'],
    semi: ['warn', 'never'],
    'linebreak-style': ['off'],
    'no-console': 'off',
  },
}
