import { combineReducers, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import news from '../reducers/news'
import user from '../reducers/user'

// const logger = (store) => (next) => (action) => {
//   console.log('此次執行: ', action)
//   console.log('執行之前的state: ', store.getState())

//   const result = next(action)

//   console.log('執行之後的state: ', store.getState())
//   return result
// }

const store = createStore(
  combineReducers({ news, user }),
  applyMiddleware(thunk, logger),
)

export default store
