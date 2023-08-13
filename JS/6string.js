/*
//JAVASCRIPT METHODS
concat      variable.concat(variable2)
            variable + variable2

length      variable.length
lowecase    variable.toLowerCase()
uppercase   variable.toUpperCase()
startwith   variable.startsWith('this')
endswith    variable.endsWith('that')
includes    variable.includes('good')

charAt      variable.charAt(5)
charCodeAt  variable.charCodeAt(5)
variable[0] console.log(variable[0])

//JavaScript String Search
indexOf     string.indexOf(searchvalue, start)
lastIndexOf string.lastIndexOf(searchvalue, start)
search      variable.serach(searchvalue, start:optional)
            variable.serach(/searchvalue/gi)   //case-insensitive
match      variable.match(searchvalue, start:optional)
            variable.match(/searchvalue/gi)   //case-insensitive
slice       variable.slice(start, end)
substring   variable.substring(start, end)
substr      variable.substr(start, length)

//Converting a String to an Array
split       variable.split(separator, limit)
replace     variable.replace('stringFrom', 'stringTo')
trim        variable.trim()
            variable.trimStart()
            variable.trimEnd()
String Padding  variable.padStart(length, character-or-value)

//Escape character
An escape character is a backslash \ followed by the character you want to insert

*/
const str1 = `I am Mohibuddin.`;
const str2 = `I am Software Developer`;

//----------Adding two String-------
const str3 = str1 + str2;
console.log(str3);
//output:- I am Mohibuddin.I am Software Developer

//----------concat------------
const str = str1.concat(` `, str2);
console.log(str);
//output:- I am Mohibuddin. I am Software Developer

//----------some methods------
x = str.length;
console.log(x); //output:- 40

x = str.toLocaleUpperCase();
console.log(x); //I AM MOHIBUDDIN. I AM SOFTWARE DEVELOPER

x = str.toLocaleLowerCase();
console.log(x); //i am mohibuddin. i am software developer

x = str.startsWith("i");
console.log(x); //case sensitive:-  false
x = str.endsWith(".");
console.log(x); //case sensitive:-  false

x = str.includes(`Software Developer`); //case sensitive
console.log(x); //true

//Extracting String Characters
//------------charAt(number)---------
x = str.charAt(0);
console.log(x); //I

//------------charCodeAt(number)---------
x = str.charCodeAt(0);
console.log(x); //73

//Property Access
console.log(str[0]); //I

//JavaScript String Search
//----------indexOf(searchvalue, start)-------
x = str.indexOf(`am`, 0);
console.log(x); //2

//----------lastIndexOf(searchvalue, start)-------
//it start finding string, from last
x = str.lastIndexOf(`am`, 21);
console.log(x); //19

//----------variable.serach(searchvalue, start:optional)-----
x = str.search(`am`);
console.log(x); //2

//----------variable.match(searchvalue, start:optional)----
x = str.match("Mohib", 0);
console.log(x);

x = str.match(/mohib/gi);
console.log(x); //[ 'Mohib' ]

//----------variable.slice(start, end)-------------
x = str.slice(5, 10);
console.log(x); //Mohib

x = str.slice(-9, -6);
console.log(x); //Dev

//----------variable.substring(start, end)--------
x = str.substring(5, 10);
console.log(x); //Mohib

x = str.substring(-5, 5); //-5=0 in substring
console.log(x); //I am

x = str.substring(25);
console.log(x); //tware Developer

//----------variable.substr(start, length)---------
x = str.substr(5);
console.log(x); //Mohibuddin. I am Software Developer

x = str.substr(5, 10);
console.log(x); //Mohibuddin

//Converting a String to an Array
//-------variable.split(separator, limit)-------
x = str.split(` `);
console.log(x); //[ 'I', 'am', 'Mohibuddin.', 'I', 'am', 'Software', 'Developer' ]

x = str.split(`.`);
console.log(x); //[ 'I am Mohibuddin', ' I am Software Developer' ]

//-----------variable.replace('stringFrom', 'stringTo')-----
x = str.replace(`Software Developer`, `Designer`);
console.log(x); //I am Mohibuddin. I am Designer

x = str.replace(/DEVELOPER/i, `Engineer`);
console.log(x); //I am Mohibuddin. I am Software Engineer

x = str.replace(/am/gi, `m`);
console.log(x); //I m Mohibuddin. I m Software Developer

//---------Escape character-------
x = 'We are the so-called "Vikings" from the north.';
console.log(x);

//trim()
x = "    Hello    World    ";
console.log(x.trim());
console.log(x.trimStart());
console.log(x.trimEnd());

//----------String Padding---------
const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");
console.log(maskedNumber);
// Expected output: "************5581"

//----------JavaScript template literals--------
let firstName = "Mohd";
let lastName = "Mohibuddin";
let fullName = `My name is: ${firstName} ${lastName}`;
console.log(fullName);
// My name is: Mohd Mohibuddin
