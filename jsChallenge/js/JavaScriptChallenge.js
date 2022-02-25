/*Write and execute code that utilizes the following bitwise operators:
& (AND)
| (OR)
^ (XOR)*/

let x = 1 & 3;
let y = 3 | 1;
let z = 6 ^ 1;

document.getElementById('jsChallenge').innerHTML = x + " " + y + " " + z;

/*Write and execute code that utilizes the following operations:
text search
text replace*/

function searchFunction() {
    let text = document.getElementById('search').innerHTML;
    let n = text.search(/javascript/i);

    document.getElementById('search').innerHTML = n;
}

function replaceFunction() {
    let text = document.getElementById('replace').innerHTML;
    let r = text.replace('Click below to replace', 'You replaced');

    document.getElementById('replace').innerHTML = r;
}

/*Write and execute code that utilizes these statements:
try statement
catch statement
throw statement
finally statement*/

function errorFunction() {
    const message = document.getElementById('message');
    message.innerHTML;
    let e = document.getElementById('errors').value;
    try{
        if(e == "") throw 'is empty';
        if(isNaN(e)) throw 'is not a number';
        e = Number(e);
        if(e < 1) throw 'is less than 1';
        if(e > 10) throw 'is greater than 10';
        else throw 'you entered ' + e;
    }
    catch(err) {
        message.innerHTML = "Input: " + err;
    }
    finally {
        document.getElementById('errors').value = "";
    }
}

/*Write and execute code that utilizes the use strict directive.*/

function strictFunction(){
    "use strict";
    x = 78.123456;
}

document.getElementById('strict').innerHTML = strictFunction();


/*Write and execute code that utilizes the this keyword.*/
const person = {
    firstName: "Harry",
    middleName: "James",
    lastName: "Potter",
    nemesis: "Voldemort",
    sentance : function() {
        return this.firstName + " " + this.lastName + " defeated " + this.nemesis;
    }
};

document.getElementById('thisKeyword').innerHTML = person.sentance();

/*Write and execute code that includes an arrow function.*/
let arrowFunction = (x,y) => x * y;
document.getElementById('arrow').innerHTML = arrowFunction(3, 12);


/*Write and execute code that includes the class keyword.*/
class dmCharacter{
    constructor(firstName, lastName, position){
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
    }
}

let ds = new dmCharacter("Dwight", "Schrute", "Assistant to the Regional Manager");

document.getElementById('classKeyword').innerHTML = ds.firstName + " " + ds.lastName + 
" is " + ds.position;

/*Write and execute code that includes the debugger keyword.*/
function debugFunction(){
    let a = 134 + 73950;
    debugger;
    document.getElementById('debug').innerHTML = a;
}

/*Write and execute code that includes the following:
findIndex() method
Number.isInteger() method
isFinite() method
exponentiation operator (**)*/

const dmMain = ["Michael", "Dwight", "Jim", "Pam"];
document.getElementById('indexTest').innerHTML = "Michael has an index of " + 
dmMain.findIndex(indexFunction);

function indexFunction(value, index, array) {
    return value == "Michael";
}

//isInteger//
document.getElementById('integerTest').innerHTML = Number.isInteger(123) + "<br>" + 
Number.isInteger(12.3);

//isFinite//
document.getElementById('finiteTest').innerHTML = isFinite(20/0) + "<br>" + 
isFinite(20/4);

//exponentiation operator//
let a = 8;
let b =  a ** 4;
document.getElementById('exOperator').innerHTML = b;


//form validation//
function validateForm(){
    let v = document.forms['validation']['firstName'].value;
    if(v == ""){
        alert ("Name must be filled out");
        return false;
    }
}



//Creating a class, object, and method using image on pg 252//

class dog{
    constructor (breed, color, height, weight){
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.weight = weight;
    }

    shake(height){
        if(height >= 8){
            print("Good Shake!");
        }
        else{
            print("You're too little to shake");
        }
    }

    sit(weight){
        if(weight >= 3){
            print("Good Sit!");
        }
        else{
            print("You're too little to learn sit");
        }
    }

    lay(weight){
        if(weight >= 3){
            print("Good Lay Down!");
        }
        else{
            print("You're too little to learn lay down");
        }
    }
}

let dog1 = new dog("Hound", "Brown", 24, 60);
//"Hound", "Brown", "24", "60"//


/*Trying to run function shake() on dog1, not executing...I've checked against formatting
and syntax on w3schools and tried changing multiple things and cannot get it to work
no matter what I do. I tried without the state in the paranthases by the methods
I tried with the state in the parantheses when calling below, I've tried addind a new var
with let weight1 = dog1.weight, etc. Tried searching other examples as well to see how to 
run the function using the class instance*/
document.getElementById('doggo').innerHTML= dog1.shake();

//Display dog1 breed to show instance was added//
document.getElementById('doggo').innerHTML = dog1.breed;