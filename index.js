module.exports = Promise.chain = (chain) => {
  let prom = Promise.resolve();
  let result = [];
  chain = chain || [];
  
  chain.forEach(func => {
    prom = prom
    .then(func)
    .then(res => {
      result.push(res)
      return;
    });
  })
  
  return prom.then(() => result);
}
