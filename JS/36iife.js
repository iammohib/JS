(function () {
    console.log("I am self invoking dunction")
})();
(function (params) {
    console.log("I am self invoking dunction",params)
})(2);
(function name(params) {
    console.log("I am self invoking dunction",params)
})(3);

let prom=1;
const promFunc = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(prom++);
        }, 2000);
    })
}
(async () =>{
    let r = await promFunc();
    console.log(r)
    let s = await promFunc();
    console.log(s)
    let t = await promFunc();
    console.log(t)
})();
