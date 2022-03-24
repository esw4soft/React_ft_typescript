import Counter from "./Counter";
import 'regenerator-runtime/runtime'
import 'core-js/stable'

jest.mock('./math')

test('the default value of count of the counter will be 0', () => {
    // arrange
    const counter = new Counter()
    const expected = 0

    // assert
    expect(counter.count).toBe(expected)
})

test('the count will be from 0 become 1 if i firt executed increment method', async () => {

    // arrange
    global.fetch = jest.fn().mockResolvedValue(
        { json: () => ({ count: 5 }) }
    )

    const counter = new Counter()
    const expected = 5

    // act
    await counter.setCountFromFatabase()

    // assert
    expect(counter.count).toBe(expected)

    delete global.fetch
})