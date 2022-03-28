// babel擴充語法
import 'regenerator-runtime/runtime'
import 'core-js/stable'

// react, redux
import React from 'react'
import { createStore, combineRedecers, applyMiddleware } from 'redux'
import { provider } from 'react-redux'
import thunk from 'redux-thunk'

// testing 
import { render } from '@testing-library/react'  // test炫染元件
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers' //test驗證元素存在

// reducer
import user from '../../reducers/user.js'

// 被測試對象
import Home from './Home.jsx'


