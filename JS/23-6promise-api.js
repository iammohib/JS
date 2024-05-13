/*
Promise.all will not work if any promise accured an error
Promise.allSettled result shows in array of object
Promise.race shows first promise to settled and returns their outcome value or error
Promise.any shows first promise to be fullfilled
*/

const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`I am in promise 1`);
    resolve(`prom1`);
    reject(new Error(`ERROR`));
  }, 900);
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`I am in promise 2`);
    resolve(`prom2`);
    reject(new Error(`ERROR`));
  }, 1000);
});

const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`I am in promise 3`);
    resolve(`prom3`);
    reject(new Error(`ERROR`));
  }, 1500);
});

// prom1.then((value) => {
//   console.log(value)
// });

// prom2.then((value) => {
//   console.log(value);
// });

// prom3.then((value) => {
//   console.log(value);
// });

// let promiseOut = Promise.all([prom1,prom2,prom3]);
// let promiseOut = Promise.allSettled([prom1,prom2,prom3]);
// let promiseOut = Promise.race([prom1,prom2,prom3]);
// let promiseOut = Promise.any([prom1,prom2,prom3]);
// let promiseOut = Promise.resolve("I am Promise.resolve()");
let promiseOut = Promise.reject(new Error());

promiseOut.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})
