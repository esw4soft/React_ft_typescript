import { renderHook, act } from '@testing-library/react-hooks'
import useCounter from './useCounter'

test('the default count will be the received paramter.', () => {
    // arrange
    const { result } = renderHook(() => useCounter(8, () => {}))
    const expected = 24

    // act
    act(() => { result.current.add(16) })

    // assert
    expect(result.current.count).toBe(expected)
})