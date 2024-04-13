let x;

//---------Type Conversion: Explicit Conversion------
//---------String Conversion--------
/*
Method-1
String(Number/Boolean/Date/Array/Float/null/undefined)

Method-2
variable.toString()
*/
x = String(1234567);
console.log(x, typeof x); //1234567 string

x = String(true);
console.log(x, typeof x); //true string

x = String(new Date());
console.log(x, typeof x); //Sat Aug 12 2023 14:38:09 GMT+0530 string

x = String([1, 2, 3, 4, true]);
console.log(x, typeof x); //1,2,3,4,true string

x = String(1.23344);
console.log(x, typeof x); //1.23344 string

x = String(null);
console.log(x, typeof x); //null string

x = String(undefined);
console.log(x, typeof x); //undefined string

//Method-2
x = 1234;
x = x.toString();
console.log(x, typeof x); //1234 string

x = true;
x = x.toString();
console.log(x, typeof x); //true string

// x = null;                        //ERROR
// x = x.toString();
// console.log(x, typeof x);

// x = undefined;                   //ERROR
// x = x.toString();
// console.log(x, typeof x);

x = new Date();
x = x.toString();
console.log(x, typeof x); //Sat Aug 12 2023 14:38:09 GMT+0530 string

x = [12, 12, 3, 4];
x = x.toString();
console.log(x, typeof x); //12,12,3,4 string
console.log(`\n\n\n`);

//-----------Number Conversion-------
/*
Method-1
Number(String/Boolean/Date/Float)

Method-2 :-apply on numbers
parseInt(`3.141697655`)         //output: 3

Method-3 :-apply on numbers
x= parseFloat(`3.141697655`)    //output: 3.141697655
x.toFixed(3)                    //output: 3.141

*/
x = Number(`mohib`);
console.log(x, typeof x); //NaN number

x = Number(` `);
console.log(x, typeof x); //0 number

x = Number(`1.23344`);
console.log(x, typeof x); //1.23344 number

x = Number(true);
console.log(x, typeof x); //1 number

x = Number(new Date());
console.log(x, typeof x); //1691831289438 number

//gives same output
x = new Date();
x = x.getTime();
console.log(x, typeof x); //1691831289438 number

x = Number([1, 2, 3, 4, true]);
console.log(x, typeof x); //NaN number

x = Number(null);
console.log(x, typeof x); //0 number

x = Number(undefined);
console.log(x, typeof x); //NaN number

// Method-2
x = parseInt(`3.141697655`);
console.log(x, typeof x); //3 number

//Method-3
x = parseFloat(`3.141697655`);
console.log(x, typeof x); //3.141697655 number

x = parseFloat(`3.141697655`);
console.log(x.toFixed(3), typeof x); //3.142 number

//-----------Boolean Conversion-------
/*
Method:
Boolean(Number/String/Null/Undefined)
*/

x = Boolean(`mohib`);
console.log(x, typeof x); //true boolean

x = Boolean(` `);
console.log(x, typeof x); //true boolean

x = Boolean(123);
console.log(x, typeof x); //true boolean

x = Boolean(1);
console.log(x, typeof x); //true boolean

x = Boolean(0);
console.log(x, typeof x); //false boolean

x = Boolean(null);
console.log(x, typeof x); //false boolean

x = Boolean(undefined);
console.log(x, typeof x); //false boolean
