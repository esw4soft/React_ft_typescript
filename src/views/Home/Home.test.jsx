// babel擴充語法
import 'regenerator-runtime/runtime'
import 'core-js/stable'

// react, redux
import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// testing 
import { render, waitFor } from '@testing-library/react'  // test炫染元件
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers' //test驗證元素存在

// reducer
import user from '../../reducers/user.js'

// 被測試對象
import Home from './Home.jsx'
import { TestWatcher } from 'jest'

expect.extend({ toBeInTheDocument })

test('the view will display user information from api after home rendered', async () => {
    // arrange
    global.fetch = jest.fn().mockResolvedValue(
        { json: () => ({ user: 'easob'})}
    )

    const store = createStore(
        combineReducers({ user }),
        applyMiddleware(thunk),
    )

    const { getByText } = render(
        <Provider store={store}>
            <Home />
        </Provider>
    )

    // assert
    await waitFor(() => {
        expect(getByText(/easob/)).toBeInTheDocument()
    })
})


