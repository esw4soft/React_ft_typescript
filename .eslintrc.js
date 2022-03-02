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
    // 分號
    // semi: ['warn', 'never'],
    semi: ['error', 'never'],

    // 解決crlf
    'linebreak-style': ['off'],

    // 關掉console.log 報錯
    'no-console': ['warn'],

    // 規定使用js或jsx撰寫 []表示都可以
    // 'react/jsx-filename-extension': [],

    // 規定函式格式 []表示都可以
    // "react/function-component-definition":[],
    // 或宣告箭頭函示
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // 未使用的變數 error >> warn
    'no-unused-vars': ['warn'],
  },
}
