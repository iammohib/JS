/*
map
filter
reduce
every
some
find
findIndex
entries
includes
*/
arr = [23, 12, 45, 60, 11, 17];

//------------map-----------
funct = (element) => element + element;
res = arr.map(funct);
console.log(res); //[ 46, 24, 90, 120, 22, 34 ]

//other 2 way of doing this
// a = arr.map(myFunc);
// function myFunc(element) {
//   console.log(element);
//   return element + element;
// }

// a = arr.map((element) => {
//   console.log(element);
//   return element + element;
// });
// console.log(a);

//-----------filter---------
func = (element) => element < 18;
res = arr.filter(func);
console.log(res); //[ 12, 11, 17 ]

//------------reduce----------
func = (element1, element2) => element1 + element2;
res = arr.reduce(func);
console.log(res); //168

//---------every-----------
funct = (element) => element < 18;
res = arr.every(funct);
console.log(res); //false

//---------some----------
funct = (element) => element < 18;
res = arr.some(funct);
console.log(res); //true

//--------find-----------
funct = (element) => element < 18;
res = arr.find(funct);
console.log(res); //12:-returns only one elemnt which pasess test

//-------findIndex--------
funct = (element) => element < 18;
res = arr.findIndex(funct);
console.log(res); //1:-returns only one elemnt which pasess test

//------entries------
x = arr.entries();
for (const iterator of x) {
  console.log(iterator);
}

//-------includes---------
x = arr.includes(17);
console.log(x); //true
