# React ft Typescript 

React Practice : React Hook Router Redux Test Typescript & todolist

based on Clark(#ms314006)'s article & published book

## Note
如果有跳過的天數代表是比較簡單的部分或是已經比較熟的部分 就不會特別 commit

## 環境設定
相較於以前都是使用CRA製作React專案 此次則從0開始建構React專案的環境設定   
除了可以了解每個設定在React裡面做了哪些事 還可以了解CRA專案裡為我們做了哪些環境設定   
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

```

<br />

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

### day10 : prop-types 替props加入型別
加入型別可以預防props傳入時 型別錯誤導致畫面出現錯誤而無法顯示 有點類似TS

1. 安裝prop-types
`npm install --save prop-types`

2. 設置props 型別
```jsx
// 導入
import PropTypes from 'prop-types';

// 設定props的型別 
SayHello.propTypes = {

  // props的名字: props的型別
  names: PropTypes.arrayOf(PropTypes.string),
}

// 設定props的預設狀態 沒有傳入值時使用
SayHello.defaultProps = {
  names: 'Default string',
}
```
`https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes`

### day11 : useContext 簡化props傳遞問題
props傳遞問題是 如果有多層props要傳遞 必須要每一層都加props 導致維護困難   
useContext 解決了這個問題 只要在最上層包provider 每一層都可以直接使用props 不用再每一層都要加入props   

```jsx
// 1. 導入並建立 context
import React, {
  useState, createContext, useContext
} from 'react';

const TodoListContext = createContext();

// 2. 包覆上層並加入要傳遞的value
const Main = () => {
  const [todoList] = useState(['first', 'second'])
  return (

    // Provider包覆 value為傳遞的值
    <TodoListContext.Provider value={todoList}>

      <div>
        <span>{`代辦事項數: ${todoList.length}`}</span>
        <TodoListPage />
        <CurrentTask />
      </div>
    </TodoListContext.Provider>
  )
}

// 3. 底層使用context傳的值
const CurrentTask = () => {

  // 使用context傳的值
  const todoList = useContext(TodoListContext)

  return <div>{`下一件事做: ${todoList[0]}`}</div>
}
```
延伸閱讀: useContext + useReducer vs Redux   
`https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-usereducer-%E7%9C%9F%E7%9A%84%E8%83%BD%E5%AE%8C%E5%85%A8%E5%8F%96%E4%BB%A3-redux-%E5%97%8E-fabcc1e9b400`

### day12 - day15 : Redux
1. 安裝 Redux
`npm install --save redux react-redux`

Reducer : 控制器controler : 用來保管 state，以及在接收到不同的 action 指令時該對 state 做什麼動作的函數   
Store : 儲存槽 : 整合所有的 Reducer   
Provider : 安裝儲存槽 : 接收上方創建的 Store   
useSelector : 獲取 store 中的資料的行為   
Action: 根據行為指令傳給Reducer 做接下來的動作   
Dispatch,useDispatch : 因為資料現在是 redux 所管理, 所以必須使用Dispatch傳入action才能改變store裡的資料   
Middleware : Middleware 會在 Store 和 Reducer 之間，所有透過 Dispatch 的執行都會經過 Middleware  
常用Middleware:
1. Logger : 紀錄使用Dispatch後store資料的變化  
2. Redux-Thunk, Redux-Saga : 解決非同步資料問題  

--------------------------------------------------------------------------    
### 因為網頁版的程式碼有點凌亂且講解部分比較少 所以後面改成以書本程式碼為主
### Route
#### 3-2-1 BrowserRouter vs HashRouter 
BrowserRouter會經過server 而HashRouter不會經過server   

#### 3-2-2 Router鐵三角 : Switch Route Link (v6版本後寫法有改變)
`https://ithelp.ithome.com.tw/articles/10282773?sc=iThomeR`   
```jsx
  // 類似主頁目錄
  <HashRouter>
    <Switch>
      <Route path="/home" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </HashRouter>

  // 連結要到哪個頁面
  <Link to="/about">關於我們</Link>

  // match可以傳遞參數給元件
  // 設定傳遞參數：id
  <Route path="/news/newsReader/:id" component={(props) => <NewsReader news={news} match={props.match} />} />

  // 取出參數坐後面的資料處理
  const targetid = props.match.params.id
  
  // 可以使用useHistory 進行點擊連結以外的跳轉
  // 可以使用useParams取代match取得網址參數
```

### Redux
1. 建立store
2. 建立Reducer 設定initialState預設資料
3. Reducer加入store(也可以連接多個Reducer)
4. Provider包覆 store加入Provider
#### 取得資料 :
5. mapStateToprops 把元件和store裡面的資料做連結
6. 使用connect 把元件和store做連接
#### 事件觸發改變資料 :
7. 使用dispatch改變store資料
8. reducer根據收到dispatch傳入的參數做什麼事(action, 改變的資料)
9. 可以把dispatch寫入mapDispatchToProps 就不必在元件中呼叫dispatch
10. 要取得資料用connect連接mapStateToprops 要觸發事件連接mapDispatchToProps
```jsx
connect(mapStateToprops, mapDispatchToProps)("元件名稱")
```
11. 設置action creator 統一保管action方法
#### useSelector, useDispatch
使用useSelector 來取代 mapStateToprops   
使用useDispatch 來取代 mapDispatchToProps   
注意: 因為useDispatch是在函式第二層 所以要先在第一層宣告完再給第二層使用   
```jsx
const dispatch = useDispatch()
```
`https://zh-hant.reactjs.org/warnings/invalid-hook-call-warning.html`

#### Middleware 中介軟體
Middleware 是在dispatch觸發後 到reducer的中間層
```jsx
// 中介軟體格式
const logger = (store) => (next) => (action) => {
  console.log('此次執行: ', action)
  console.log('執行之前的state: ', store.getState())

  // dispatch還沒到reducer前
  const result = next(action)  //dispatch進去了
  // dispatch做完了後
  console.log('執行之後的state: ', store.getState())
  return result
}
```
可以使用 `npm i --save redux-logger` 方便查看redux裡面的資料變化

#### Redux Thuck 處理非同步事件
因為Redux的store只接受同步函式 所以要使做非同步事件需要加入可以處理非同步事件的Middleware(Redux Thunk, Redux Saga) 
`npm i --save redux-thunk`  