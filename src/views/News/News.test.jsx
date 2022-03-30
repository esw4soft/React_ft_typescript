import React from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent} from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers'
import news from '../../reducers/news.js'
import News from './News.jsx'

expect.extend({ toBeInTheDocument })

test('the page will change to news information when i clicked the news item.', () => {
    // arrange
    const store = createStore(combineReducers({ news }))
    const { getByText } = render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/news']}>
                <News />
            </MemoryRouter>
        </Provider>
    )

    // act
    fireEvent.click(getByText('第一筆最新消息'))

    // assert
    expect(getByText('您正在閱讀第一筆最新消息')).toBeInTheDocument()
    expect(getByText('這裡是第一筆哦')).toBeInTheDocument()
})