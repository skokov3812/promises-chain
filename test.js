const promisesChain = require('./index');

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