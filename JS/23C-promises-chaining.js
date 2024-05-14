/*
Promise-Chaining
*/
const prom1 = new Promise((resolve, reject) => {
  console.log(`Prom1 says, hello`);
  setTimeout(() => {
    console.log(`I am resolved`);
    resolve(true);
    reject(new Error(`ERROR Happend`));
  }, 1000);
});
// console.log(prom1);
prom1
  .then(
    (value) => {
      console.log(`The value of prom1: `, value);
      return new Promise((resolve, reject) => {
        console.log(`Prom2 says, hello`);
        setTimeout(() => {
          console.log(`I am resolved`);
          resolve(true);
          reject(new Error(`ERROR Happend`));
        }, 1000);
      });
    },
    (error) => {
      console.log(error);
    }
  )
  .then(
    (value) => {
      console.log(`The value of prom2: `, value);
      console.log(`I am done`);
    },
    (error) => {
      console.log(error);
    }
  )
  .finally(
    (value) => {
      console.log(`The value of prom3: `, value);
      console.log(`I am finally done`);
    },
    (error) => {
      console.log(error);
    }
  );
