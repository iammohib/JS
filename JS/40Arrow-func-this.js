// //Arrow function
// // const greet = () => {
// //     console.log('Good Morning')
// // }
// // greet();

// const greet = () => console.log("Good Morning");
// greet();

// //square function
// const square = (x) => x * x;
// console.log(square(10));

// //sum function
// const sum = (x = 0, y = 0) => x + y;
// console.log(sum(5, 5));

// const sum2 = (x = 0, y = 0) => {
//   console.log("The sum is:");
//   return x + y;
// };
// console.log(sum2(5, 5));

// //return in object form
// const solve = (x, y) => ({
//   sum: x + y,
//   diff: x - y,
// });

// console.log(solve(5, 4));

//`this` problem solving using arrow function
const x2 = {
    name : `mohib`,
    func : function () {
        setTimeout(function(){
            //if we not use arrow function in syntax of set-timeout than it will give `undefined` variable value
            console.log(this.name)
        },1000)
    }
}
x2.func()

const x1 = {
    name : `mohib`,
    func : function () {
        let that = this;
        setTimeout(function(){
            //if we not use arrow function in syntax of set-timeout than it will give `undefined` variable value
            console.log(that.name)
        },1500)
    }
}
x1.func()

const x = {
    name : `mohib`,
    func : function () {
        setTimeout(()=>{
            //if we not use arrow function in syntax of set-timeout than it will give `undefined` variable value
            console.log(this.name)
        },2000)
    }
}
x.func()

