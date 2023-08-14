/*
lexical this:- solving lexical this problem using arrow function
*/

const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());
// Expected output: 42

const stDetails = {
  name: `mohib`,
  age: 21,
  func: function () {
    //if we use normal funtion , the anwer will be undefined
    setTimeout(() => {
      console.log(`${this.name}`);
    }, 1000);
  },
};
stDetails.func();
