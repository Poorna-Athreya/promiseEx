const timeout = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('TIMED OUT!');
  }, 300);
});
// timeout.then((resolveMessage) => {
//     console.log(resolveMessage);
// });

module.exports = timeout;
