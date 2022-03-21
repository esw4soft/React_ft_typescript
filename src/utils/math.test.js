import { addTwoNumbers } from './math'

test('the result of addTwoNumbers will be 5 if use 3 and 2', () => {
    const expected = 5 //arrange

    const result = addTwoNumbers(3, 2)  //act

    expect(result).toBe(expected) //assert
})