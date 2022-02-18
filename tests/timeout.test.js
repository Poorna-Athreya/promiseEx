// Simple setTimeout Fn
const timeout = require('../timeout');

// should log TIMED OUT! in the console after 300ms
// test('Timeout Function', async () => {
//   const data = await timeout;
//   expect(data).toBe('TIMED OUT!');
// });
test('Timeout function', () => timeout.then((data) => {
  expect(data).toBe('TIMED OUT!');
}));
// fakeTimer
