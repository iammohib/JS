const promise = new Promise((resolve, reject) => {
  console.log(`hello - 0, from promise`);
  // resolve(true);
  reject(new Error("Error"))
});
console.log(`hello - 1`);
setTimeout(() => {
  console.log(`hello - 2`);
}, 2000);
console.log(`hello - 3`);
console.log(promise);
