/*
new Date()
new Date(year,month,date,hours,min,sec,milisecond)
getYear
getMonth
getDate
getHour
set Year/Month/Date/Hour

return refrence date
*/

//---------for current/default date-----
today = new Date();
console.log(today, `today date`);

//--------customized date--------
myd = new Date("8-4-2003 04:54:08");
myd = new Date("oct 12 2000");
myd = new Date("11/02/2002");
myd = new Date("11-19-2001");
console.log(myd, `My B'Day`);

// -------new Date(year,month,date,hours,min,sec,milisecond)-----
newDate = new Date(2035, 12 - 1, 12, 12, 9, 6, 7);
console.log(newDate);

//-------get year-----------
today = new Date();
yr = today.getFullYear();
console.log("this is year", yr);

//-------get month---------
month = today.getMonth();
console.log("this is month", month);

//-------get date--------
dte = today.getDate();
console.log("this is date", dte);

//--------get hour-----
hr = today.getHours();
console.log("this is hour", hr);

//--------get minutes-----
hr = today.getMinutes();
console.log("this is minutes", hr);

//--------get seconds------
hr = today.getSeconds();
console.log("this is seconds", hr);

//--------get time---===
hr = today.getTime();
console.log("this is time", hr);

//-------customization----------
nDate = new Date();
nDate.setDate(19);
nDate.setMonth(11 - 1);
nDate.setFullYear(2030);
console.log(nDate);

//----------return refrence date--------
refdate = new Date(0);
console.log(refdate);

//----------return refrence date + 5seconds--------
refdate = new Date(5000);
console.log(refdate);
