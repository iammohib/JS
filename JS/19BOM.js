/*
screen
location
history
window navigator
*/
//============screen===============
console.log("innerHeight:", innerHeight);
console.log("innerHeight:", innerHeight);
console.log("innerWidth:", innerWidth);
console.log("outerHeight:", outerHeight);
console.log("outerWidth:", outerWidth);

console.log("screen.width:", screen.width);
console.log("screen.height:", screen.height);

console.log("screen.availWidth:", screen.availWidth);
console.log("screen.availHeight:", screen.availHeight);

console.log("Screen Color Depth:", screen.colorDepth);
console.log("Screen Pixel Depth:", screen.pixelDepth);

//=============location===============
console.log(location);
console.log(location.toString());
console.log(location.href);
console.log(location.port);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.protocol);

const mohibFunc = () => {
  location.assign("http://mohib.co/");
};

const reload = () => {
  location.reload();
};

//============history==============
console.log(history);

const go = () => {
  history.go(1);
};
const back = () => {
  history.back();
};

const next = () => {
  history.forward();
};

//==========window navigator==============
console.log(navigator.appName);
console.log(navigator.platform);
console.log(navigator.cookieEnabled);
console.log(navigator.appCodeName);
console.log(navigator.product);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.onLine);
console.log(navigator.javaEnabled());

//=========pop-up============
//JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box.
let conf;
while (conf != true) {
  const name = prompt(`Enter Your Name`);
  const conf = confirm(`${name} is your name`);
  if (conf == true) {
    alert(`Hello ${name}`);
    break;
  }
}
