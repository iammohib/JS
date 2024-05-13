/*
Array in Javascript
arr.length
arr[number]
arr.indexOf(element)
arr.lastIndexOf(element)
arr.sort()
arr.reverse()
arr.concat(arr2)
arr[2] = `mohib`
st.push("mohib")
st.pop()
st.shift()
st.unshift(`mohib`)
splice(start: number, deleteCount?: number)
slice(fromIndex, tillIndex)
arr instanceof Array;
delete arr[0];
arr.join(`,`);
arr.toString()
Array.from(str)
*/

let x;
let arr = [5, 2, 12, 3, 8, 2, true, null, undefined, `mohib`];

//------------Array Length--------
x = arr.length;
console.log(x); //10

//------------Accessing Array Element----------
x = arr[9];
console.log(x, typeof x); //mohib string

x = arr[arr.length - 1];
console.log(x, typeof x); //mohib string

//Some Array Methods
//------------indexOf------------
x = arr.indexOf(`mohib`);
console.log(x); //9

//------------Alphabetic sort()-------------
//It make changes in the actual array
let arr2 = [5, 9, 2, 11];
x = arr2.sort();
console.log(x); //[ 11, 2, 5, 9 ]

//-----------reverse()---------
//It make changes in the actual array
let arr3 = [`concatination`, 23, 45, `aman`];
y = arr3.reverse();
console.log(y); //[ 'aman', 45, 23, 'concatination' ]

//----------concat()------------
//makes change in actual array, here in `arr2`
z = arr2.concat(arr3);
console.log(z); //[ 11, 2, 5, 9, 'aman', 45, 23, 'concatination' ]

//Addind new element in array
//make changes in actual array
arr = [`aman`, `anoop`];
arr[2] = `mohib`;
console.log(arr); //[ 'aman', 'anoop', 'mohib' ]

//push,pop,shift,unshift etc(make changes in actual array)
let st = [`aman`, `anoop`, `alok`];
console.log(st); //[ 'aman', 'anoop', 'alok' ]

//push:- add one element at last
x = st.push("mohib");
console.log(x, st); //4 [ 'aman', 'anoop', 'alok', 'mohib' ]

//pop():- delete one element from last
x = st.pop();
console.log(x, st); //mohib [ 'aman', 'anoop', 'alok' ]

//shift():- delete one element from last
x = st.shift();
console.log(x, st); //aman [ 'anoop', 'alok' ]

//unshift:- add one element at start
x = st.unshift(`mohib`);
console.log(x, st); //3 [ 'mohib', 'anoop', 'alok' ]

//splice(start: number, deleteCount?: number)
//make changes in actual array
arr = [`apple`, `banana`, `grapes`];
x = arr.splice(1, 1);
console.log(x, arr); //[ 'banana' ] [ 'apple', 'grapes' ]

x = arr.splice(1, 0, `mohib`, `brinjal`);
console.log(x, arr); //[] [ 'apple', 'mohib', 'brinjal', 'grapes' ]

//slice(fromIndex, tillIndex)
//it create a new array
console.log("slice", arr.slice(1)); //slice [ 'mohib', 'brinjal', 'grapes' ]
console.log("slice", arr.slice(1, 3)); //slice [ 'mohib', 'brinjal' ]

//Array element can be object
arr = [1, true, [7, 4, 2], { name: `mohib`, age: `21` }];
console.log(arr);
console.log(arr[3].length); //undefined
console.log(arr[2].length); //3

//instanceof operator
x = arr instanceof Array;
console.log(x); //true

//Delete operator
x = delete arr[0];
console.log(x, arr); //true [ <1 empty item>, true, [ 7, 4, 2 ], { name: 'mohib', age: '21' } ]
arr[0] = 1;

//join method:- returns string
x = arr.join(`,`);
console.log(x, typeof x); //1,true,7,4,2,[object Object] string

//Numeric Sort
arr = [23, 43, 12];
//Compare function:- returned (negative, zero, positive)
sortedNum = function name(a, b) {
  return a - b;
};
console.log(arr.sort(sortedNum)); //[ 12, 23, 43 ]

//sort in descending order
let stName = ["aman", "mohib", "karan", "anoop", "pankaj"];
stName.sort();
stName.reverse();
console.log(stName); //['pankaj', 'mohib', 'karan', 'anoop', 'aman']

//array descending
arr = [450, 67, 230, 256, 327, 43];
sortedNum = function name(a, b) {
  return b - a;
};
console.log(arr.sort(sortedNum)); //[ 450, 327, 256, 230, 67, 43 ]

//Converting Arrays to Strings
const fruits = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Guvava",
  "Nariyal",
  "Blueberry",
];
console.log(fruits.join(`,`));
console.log(fruits.toString());
console.log(fruits.join(">"));

//Converting String to Array
str = "mohibuddin";
arr = Array.from(str);
console.log(arr);
