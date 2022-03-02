# React ft Typescript 

React Practice : React Hook Router Redux Test Typescript & todolist

based on Clark(#ms314006)'s article & published book

## Note
如果有跳過的天數代表是比較簡單的部分或是已經比較熟的部分 就不會特別 commit

## 環境設定
### day0 : npm & git
1. 安裝node環境 + git
2. 終端機指令
    `npm init -y`
    `git init`
3. git 加入 .gitignore(CRA裡的預設)

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```
### day1 : Webpack
`終端機安裝`
```jsx
`npm install webpack webpack-cli --save-dev`
```

<br />

`webpack.config.js`
```jsx
// 新增一個檔案，檔名叫 webpack.config.js
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
  }
};
```

<br />

`package.json`
```jsx
{
  "scripts": {
    "build": "webpack --mode development"
  },
}
// 終端機指令
`npm run build`
```
### day2 : ESLint
`終端機安裝`
```jsx
`npm install eslint --save-dev`
```

<br />

`package.json`
```jsx
"scripts": {
  "build": "webpack --mode development",
  "eslintInit": "eslint --init"
},

// 終端機指令
`npm run eslintInit`
```

<br />

`package.json`
```jsx
// 可使用vscode擴充元件ESLint 或是npm指令 做檢查
//1-1.npm指令

"scripts": {
  "build": "webpack --mode development",
  "eslintInit": "eslint --init",
  "lint": "eslint src/*.js"
},
//1-2 終端機指令
`npm run lint`

// 2-1 安裝擴充元件ESLint
```

<br />

`.eslintrc.js`
```jsx
// rule 設定 
// 可以加入自己習慣的設定
rules: {
    // 將關於分號的檢查關掉
    semi: ["off"],

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

<br />

```
`.eslintignore`
```jsx
// 過濾掉ESLint不需檢查的資料夾或檔案
build/
node_modules/
src/serviceWorker.js
dist/
```

### day3 : 加入 Babel 編譯JSX
`終端機安裝`
```jsx
// eslint關聯
`npm install @babel/runtime --save-dev`

// 核心套件
`npm install @babel/core @babel/cli --save-dev`

// 轉譯語法對象 (ES6)
`npm install @babel/preset-env --save-dev`

// babel加入webpack
`npm install babel-loader --save-dev`
```

<br />

`webpack.config.js`
```jsx
const path = require('path');
module.exports = {
  /* 其餘省略 */
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
```

<br />

`終端機下載react babel轉譯jsx`
```jsx
`npm install react --save`
`npm install react-dom --save`

`npm install @babel/preset-react --save-dev`
```

<br />

`index.jsx`
```jsx
import React from 'react';
import ReactDom from 'react-dom';

const Main = () => <h1>Hi JSX！</h1>;

ReactDom.render(<Main />, document.getElementById('root'));
```

<br />

`webpack.config.js`
```jsx
// 原本的babel位置再加入對 jsx的編譯
entry: './src/index.jsx',
module: {
  rules: [
    /* 其餘省略 */
    {
      test: /.jsx$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
    },
  ],
}

// 流程為 react(jsx) >> 進入webpack >> jsx轉譯成es6(@babel/preset-react)  >> es6轉譯成通用js(@babel/preset-env) >> 編譯完成進入bundle.js檔案裡
```


### day4 : SCSS in Webpack
`終端機安裝`
```jsx
`npm install style-loader css-loader sass-loader --save-dev`

`npm install mini-css-extract-plugin --save-dev`
```

<br />

`webpack.config.js`
```jsx
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 可用SCSS取代
// CSS loader
module: {
  rules: [
     /* 其餘省略（ JSX , JS loader 設定） */
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
          options: {
            modules: { localIdentName: '[name]__[local]___[hash:base64:5]' },
          },
        },
      ],
    },
  ],
   plugins: [
    new MiniCssExtractPlugin({
      filename: './index.css',
    }),
  ],
}

// SCSS loader
module.exports = {
  /* 其餘省略 */
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[name]__[local]___[hash:base64:5]' },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};

// 最後再import scss檔案到index.jsx即可進webpack
import styles from './index.scss';
```

### day5 : Webpack-dev-server 熱刷新
`終端機安裝`
```jsx
`npm install webpack-dev-server --save-dev`
```

<br />

`webpack.config.js`
```jsx
module.exports = {
 
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 8080,
  },

//   The 'mode' option has not been set 報錯的兇手,需要加註這一行
  mode: 'development',
}
```

<br />

`package.json`
```jsx
// For webpack-cli 5.x:
"start:dev": "webpack serve"

// For webpack-cli 4.x:
"scripts": { "start:dev": "webpack serve" }

// For webpack-cli 3.x:
"scripts": { "start:dev": "webpack-dev-server" }

// 終端機執行
`npm run start:dev`
```
## React 基礎
