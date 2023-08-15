/*
setTimeout
clearTimeout
setTimeout(function, <delay>, arg1, arg2)
setInterval
*/

console.log(`hello world`);

//-------setTimeout---------
a = setTimeout(() => {
  console.log(`hello mohib`);
}, 2000);
// clearTimeout(a);
//-------clearTimeout---------
b = confirm("clear timeout");
if (b) {
  clearTimeout(a);
  console.log(`timeout cleared`);
  console.log(`bye mohib`);
}

// //--------setTimeout(f,delay,a1,a2)------
const power = (x, y) => {
  console.log(x * y);
  return x * x;
};

x = setTimeout(power, 1000, 5, 25);
y = setInterval(power, 2000, 5, 25);
clearTimeout(y);

//--------setInterval------------
displayTime = () => {
  time = new Date();
  // console.log(time);

  document.getElementById("watch").innerHTML = time;
  //second method
  // watch.innerHTML=new Date();
};
z = setInterval(displayTime, 1000);
function clearFunc() {
  clearTimeout(z);
}
