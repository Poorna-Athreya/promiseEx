require('es6-promise');
'use strict';
const promise = new Promise(function (fulfill, reject) {
    setTimeout(()=>{
        fulfill('RESOLVED!');
    },300);
});
promise.then((fulfilledMessage)=> console.log(fulfilledMessage));
module.exports = promise;