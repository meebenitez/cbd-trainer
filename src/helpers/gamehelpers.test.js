import { findAvgTime } from './gamehelpers'

const testHistory = [{response: "correct", time: 500},{response: "correct", time: 500}]


test('finds avg time', () => {
  expect(findAvgTime([testHistory])).toBe(500);
});