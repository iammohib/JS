const prms1 = new Promise((resolve, reject) => {
  console.log(`prms1 is pending`);
  setTimeout(() => {
    console.log(`Hi I am resolved`);
    resolve(true);
    reject(new Error(`I am an Error`));
  }, 1000);
});
//==========then=========
// console.log(prms1);
// prms1.then((value) => {
//   console.log(value);
// });

//===========catch==========
// prms1.catch((value) => {
//   console.log(value);
// });

//==========error handling===========
//then | catch
console.log(prms1);
prms1.then((value) => {
  console.log(value);
},(value) => {
    console.log(value);
  });
