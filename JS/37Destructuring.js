// arr = [1, 2, 3, 4, 5, 6, 7];
// a = arr[0];
// b = arr[1];
// console.log(a, b);

// [x, y, z, ...rest] = arr;
// console.log(x, y, z, rest);

// [x, , , ...rest] = arr;
// console.log(x,rest);

let {a,b}={a:7,b:2};
console.log(a,b)

//spread operator
let arr1 = [3,8,7];
let obj1 = {...arr1}
console.log(obj1)

function sum(v1,v2,v3){
    return v1+v2+v3;
}
console.log(sum(...arr1))

let obj2 = {
    name:"mohib",
    age: 21,
    gender: "M"
}
console.log({...obj2})
console.log({...obj2, age:50})