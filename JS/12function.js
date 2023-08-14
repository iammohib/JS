//older war of declaring function
function square(input) {
  return input * input;
}
userInput = 5;
for (let i = 1; i < 5 + 1; i++) {
  console.log(`The square of ${i} is: ${square(i)}`);
}

//new way:- Arrow function
//One parameter and single return statement
const squar = (input) => input * input;
res = squar(5);
console.log(res);

//Multiple parameter and single return statement
const avg = (input1, input2) => (input1 + input2) / 2;
res = avg(12, 23);
console.log(res);

//Multiple parameter and Multiple statement
const prod = (input1, input2) => {
  console.log(`Product of ${input1} and ${input2}`);
  return input1 * input2;
};
res = prod(12, 2);
console.log(res);

//Returning an object
const userDetails = (name, age) => ({
  userName: name,
  userAge: age,
});
res = userDetails(`mohib`, 21);
console.log(res);

//=======setting default value to `thanks`=====
const newGreet = (namez, gratitudez = "Thanks") => {
  console.log(`hey ${namez}! ${gratitudez}`);
};
newGreet("mohibuddin", "Happy B'day");

//----use-cases----------
const distance = (speed, time) => speed * time;
console.log(distance(80, 2));

