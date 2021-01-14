//Angela Js Practise Codes//




// for first word auto captilistion

var myname = prompt("what is your Name?");
var firstChar = myname.slice(0, 1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfTheChar = myname.slice(1, myname.length);
var smallRestOfTheChar = restOfTheChar.toLowerCase();
alert("hello " + upperCaseFirstChar + smallRestOfTheChar);



// Dog age converter into human age
var dogAge = prompt("Your Dog's Age?");
var dogsHumanAge = ((dogAge - 2) * 4) + 21;
alert("Your Dogs Human age is " + dogsHumanAge);

//add things in a function
function getMilk() {
    console.log("moveLeft");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");

    console.log("moveUp");
    console.log("moveRight");
    console.log("buyMilk");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");

    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

//age remaining calculator
function lifeWeeks(age) {

    var remainingAge = 90 - age;
    var days = 365 * remainingAge;
    var weeks = 52 * remainingAge;
    var months = 12 * remainingAge;
    consol.log("you have " + days + " days, " + weeks + " weeks, " + " months left.");








}
lifeWeeks(12);












