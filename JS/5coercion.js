//---------Type Coercion: Implicit Conversion------
//---------String Coercion--------
/*
String + (Number+Null+Undefined+Boolean) => String
*/
let phoneNo;
const name = "mohib";
const age = 21;
const adult = true;
const gf = null;

const details = name + age + adult + phoneNo + gf;
console.log(details, typeof details);   //mohib21trueundefinednull string

/*
number + String                   => String

Number + (Null+Undefined+Boolean) => Number
Number - String                   => Number  value=NaN

*/

//Number + String
z = 21 + `21`;
console.log(z, typeof z);           //2121 string

z = 21 + `null`;
console.log(z, typeof z);           //21null string

z = 21 + `true`;
console.log(z, typeof z);           //21true string

z = 21 + `undefined`;
console.log(z, typeof z);           //21undefined string

//Number + other
z = 21 + 21;
console.log(z, typeof z);           //42 number

z = 21 + null;
console.log(z, typeof z);           //21 number

z = 21 + true;
console.log(z, typeof z);           //22 number

z = 21 + undefined;
console.log(z, typeof z);           //NaN number

//other then adding:- substracting string
z = 21 - `mohib`
console.log(z, typeof z)            //NaN number

z = 21-`21`;
console.log(z, typeof z)            //0 number

z = 21-`true`;
console.log(z, typeof z)            //NaN number

z = 21-`null`;
console.log(z, typeof z)            //NaN number

z = 21-`undefined`;
console.log(z, typeof z)            //NaN number

//Number - other
z = 21 - 21;
console.log(z, typeof z);           //0 number

z = 21 - null;
console.log(z, typeof z);           //21 number

z = 21 - true;
console.log(z, typeof z);           //20 number

z = 21 - undefined;
console.log(z, typeof z);           //NaN number

//other Methods
res=3.141592;
console.log(res.toExponential(3))       //3.142e+0
console.log(res.toFixed(4))             //3.1416
console.log(res.toPrecision(5))         ////3.1416