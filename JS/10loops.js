/*
for loop
forEach loop:- mainly for array
for-of loop:- mainly for array,string
for-in loop:- mainly for object
while loop
do while loop
*/

//-------for loop-----------
arr = [76, 12, 45, 73, 90];
for (let i = 0; i < arr.length; i++) {
  let element = arr[i];
  console.log(element);
}

arr = 0;
for (let i = 0; i < 101; i++) {
  arr += i;
}
console.log(arr);

statement = ``;
stArr = [`aman`, `mohib`, `naman`];
for (let i = 1; i < stArr.length + 1; i++) {
  let element = stArr[i - 1];
  statement += `Student ${i}:${element} \n`;
}
console.log(statement);

//-------------forEach loop---------
arr = [`m`, `o`, `h`, `i`, `b`];
let name = ``;
arr.forEach((element) => {
  name += element;
});
console.log(name);

//2nd
arr = ["fruit", "vegetable", "furniture"];
arr.forEach(function (element, index, array) {
  console.log(index, element);
});

//-------------for-of looop--------
arr = [`mohib`, `aman`, `alok`];
for (const iterator of arr) {
  console.log(iterator);
}

//Operation on string
str = `india`;
for (const iterator of str) {
  console.log(iterator, typeof iterator);
}

//-------------for-in loop----------
myObj = {
  name: `mohib`,
  age: 21,
  gender: `male`,
};
for (const key in myObj) {
  console.log(key, myObj[key]);
}

//operation on array
arr = [23, 21, 45, 11, 12];
for (const key in arr) {
  console.log(arr[key]);
}

//operation on string
str = "mohib";
for (const key in str) {
  console.log(str[key]);
}

//While Loop
let i=0;
arr = [`mohib`,`aman`,`alok`];
while ( i <3 ) {
    console.log(arr[i])
    i++
}

//Do While Loop
i=0;
arr = [`mohib`,`aman`,`alok`];
do {
    console.log(arr[i])
    i++;
} while (i<3);
