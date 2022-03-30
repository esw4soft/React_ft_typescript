import React from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent, getAllByText, queryByText} from '@testing-library/react'
import { toBeInTheDocument, toHaveTextContent } from '@testing-library/jest-dom/matchers'
import news from '../../reducers/news.js'
import News from './News.jsx'

expect.extend({ toBeInTheDocument, toHaveTextContent })

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

test('the news list will add a new if i use newsform create.', () => {
    // arrange
    const store = createStore(combineReducers({ news }))
    const { getByText,getByPlaceholderText, getAllByRole } = render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/news']}>
                <News />
            </MemoryRouter>
        </Provider>
    )

    // act
    fireEvent.change(
        getByPlaceholderText('請輸入名稱'), { target: { value: '測試名稱' } }
    )

    fireEvent.change(
        getByPlaceholderText('請輸入敘述'), { target: { value: '測試敘述' } }
    )

    fireEvent.click(getByText('新增最新消息'))

    // assert
    const newsList = getAllByRole('link')
    expect(newsList.length).toBe(4)
    expect(newsList[3]).toHaveTextContent('測試名稱')
})

test('the news item will remove from news list if i click its delete button', () => {
        // arrange
        const store = createStore(combineReducers({ news }))
        const { getAllByText,queryByText, getAllByRole } = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/news']}>
                    <News />
                </MemoryRouter>
            </Provider>
        )
        
        // act
        const deleteNewsBtns = getAllByText('刪除')
        fireEvent.click(deleteNewsBtns[0])

        // assert
        const newsList = getAllByRole('link')
        expect(newsList.length).toBe(2)
        expect(queryByText('第一筆最新消息')).not.toBeInTheDocument()
})