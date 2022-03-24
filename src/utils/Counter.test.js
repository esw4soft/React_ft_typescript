import Counter from "./Counter";

test('the default value of count of the counter will be 0', () => {
    // arrange
    const counter = new Counter()
    const expected = 0

    // assert
    expect(counter.count).toBe(expected)
})

test('the count will be from 0 become 1 if i firt executed increment method', () => {
    // arrange
    const counter = new Counter()
    const expected = 1

    // act
    counter.increment()

    // assert
    expect(counter.count).toBe(expected)
})