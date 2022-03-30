import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers'
import Counter from './Counter.jsx'

expect.extend({ toBeInTheDocument })

test('the default text display in view will be 目前數字:0', () => {
    // arrange
    const { getByText } = render(<Counter />)

    // act
    expect(getByText(/目前數字:0/)).toBeInTheDocument()
})

test('the text of count display in view will from 0 change to 1 after i clicked 點我加伊 button',() => {
    // arrange
    const { getByText, queryByText } = render(<Counter />)

    // act
    fireEvent.click(getByText('點我加一'))

    // assert
    expect(queryByText('目前數字:0')).not.toBeInTheDocument()
    expect(getByText('目前數字:1')).toBeInTheDocument()
})