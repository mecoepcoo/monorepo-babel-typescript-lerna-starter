import { sum } from '../src/index'

test('test demo', () => {
  expect(sum(1, 2)).toBe(3)
  expect(sum(-1, 2)).toBe(1)
})
