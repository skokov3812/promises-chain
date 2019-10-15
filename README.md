# promise-chain
The execution of the promises chain

Promise.chain is actually a promise that takes an array of anonymous function with promises as an input (an iterable).
Return an array of promises results

### Install
```
npm i promises-chain
```

## Example:
```js
const promisesChain = require('promises-chain');

Promise.chain([1,2,3,4,5].map(i => function(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(i);
      resolve(i*10)
    }, 1000)
  })
}))
.then(result => {
  console.log('finish', result); // finish [ 10, 20, 30, 40, 50 ]
})
.catch(err => {
  console.log('error', err)
})
```
