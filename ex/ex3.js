//Solution-1
stdetails = {
  name: `mohib`,
  age: 21,
  profession: `developer`,
};
for (const key in stdetails) {
  console.log(`${key} : ${stdetails[key]}`);
}

//Old-Method
// for (let index = 0; index<Object.keys(stdetails).length;index++){
//     console.log(`${Object.keys(stdetails)[index]} : ${stdetails[Object.keys(stdetails)[index]]}`)
// }

//Solution-2
x2 = [91, 34, 24, 57, 23];
sortedNum = function name(a, b) {
  return a - b;
};
y = x2.sort(sortedNum);
console.log(y);

const getMiddleValue = () => {
  return y[parseInt(y.length / 2)];
};
mValue = getMiddleValue(x2);
console.log(mValue);

//Solution - 3
//number lies between 18-32
const x4 = 20;

if ((x4 > 18) & (32 > x4)) {
  console.log(`eligible`);
} else {
  console.log(`uneligible`);
}

//number divisible by 2 & 5
z = 30;
test4 = Boolean(z % 5);
test2 = Boolean(z % 2);

console.log(test2);
console.log(test4);
if (!test2 & !test4) {
  console.log(`eligible`);
} else {
  console.log(`uneligible`);
}

//number divisible by 2 || 5
z = 18;
test4 = Boolean(z % 5);
test2 = Boolean(z % 2);

console.log(test2);
console.log(test4);
if (!test2 || !test4) {
  console.log(`eligible`);
} else {
  console.log(`uneligible`);
}

//use case of ternary operator
age = 19;
const driveCheck =
  age >= 18
    ? console.log(`eligible for drive`)
    : console.log(`uneligible for drive`);

//Solution-4
// while (true) {
//   x3 = prompt(`Enter the value: 123`);
//   x3 = parseInt(x3);
//   console.log(x);
//   if (x3 === 123) {
//     alert(`thanks`);
//     break;
//   } else {
//     alert(`Try again`);
//   }
// }

//second method
x33 = 123;
let i;
while (i != x33) {
  i = prompt(`Enter 123`);
}
