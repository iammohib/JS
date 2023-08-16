//Variables in jS and their behaviour
/*
variable:-  A value stored in memory
            A memory location where data can be stored and retrieved
            A named memory location for storing values
var:- global scope
      can re-declare
      can re-assign
      make variable without assigning value

let:- local scope
      can not re-declare
      can re-assign
      make variable without assigning value

const:-local scope
      can not re-declare
      can not re-assign
      can not make variable without assigning value
*/

//variable var:-
var studentName; //can make variable without assigning value
var studentName = "naman"; //can redeclare
studentName = `mohib`; //can re-assign

{
  //global-scope
  var studentName = `name`;
  console.log(studentName);
}
console.log(studentName);

//variable let:-
let studentName2; //make variable without assigning value
// let studentName2 = "naman"; //ERROR----can't redeclare
studentName2 = `joker`; //can re-assign

{
  //noERROR----not global-scope
  let studentName2 = `mohibuddin`;
  console.log(studentName2);
}
console.log(studentName2);

//variable const:-
// const studentName2; //ERROR---can not make variable without assigning value
const studentName3 = `naman`;
// const studentName3 = `naman`; //ERROR----can't redeclare
// studentName3 = `joker`; //can not re-assign

{
  //noERROR----not global-scope
  const studentName3 = `mohibuddin`;
  console.log(studentName3);
}
console.log(studentName3);

//Manupulating DOM - Adding Variables Characterstics Chart
let myHTML = `<table>
<thead>
    <tr>
        <th>Variable</th>
        <th>Properties</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>var</td>
        <td>global scope</td>
    </tr>
    <tr>
        <td></td>
        <td>can re-declare</td>
    </tr>
    <tr>
        <td></td>
        <td>can re-assign</td>
    </tr>
    <tr>
        <td></td>
        <td>make variable without assigning value</td>
    </tr>
    <tr>
        <td>let</td>
        <td>local scope</td>
    </tr>
    <tr>
        <td></td>
        <td>can not re-declare</td>
    </tr>
    <tr>
        <td></td>
        <td>can re-assign</td>
    </tr>
    <tr>
        <td></td>
        <td>make variable without assigning value</td>
    </tr>
    <tr>
        <td>const</td>
        <td>local scope</td>
    </tr>
    <tr>
        <td></td>
        <td>can not re-declare</td>
    </tr>
    <tr>
        <td></td>
        <td>can not re-assign</td>
    </tr>
    <tr>
        <td></td>
        <td>can not make variable without assigning value</td>
    </tr>
</tbody>
</table>`;

document.getElementById("content").innerHTML = myHTML;
