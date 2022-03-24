import { addTwoNumbers } from './math'

export default class Counter {
  constructor() {
    this.count = 0
  }

  increment() {
    this.count = addTwoNumbers(this.count, 1)
  }

  testa() {
    this.count += 2
  }

  async setCountFromFatabase() {
    const respnese = await fetch('https://url/count')
    const { count } = await respnese.json()
    this.count = count
  }
}
