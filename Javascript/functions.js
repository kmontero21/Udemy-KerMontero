//ES6
// function greeting(){
//     alert("Hello World");
// }

// greeting();
// greeting();
// greeting();

// let announcement = function(){
//     alert("You are learning JavaScript functions.");
// }

// announcement();

// let cubeThis = function(someNumber){
//     document.getElementById("output").innerHTML = someNumber * someNumber * someNumber;
// }

// let x = prompt("What number would you like to cube?");
// cubeThis(x);

// let rectangleArea = function(lengthX,widthX){
//     let area = lengthX * widthX;
//     // document.getElementById("output").innerHTML = area;
//     return area;
// }

// let length = prompt("Length");
// let width = prompt("Width");

// document.getElementById("output").innerHTML = rectangleArea(length,width);

//arrow function

let rectangleArea = (lengthX,widthX) => lengthX * widthX;

let greeting = () => "Hello World";

console.log(greeting());

let length = prompt("Length");
let width = prompt("Width");

document.getElementById("output").innerHTML = rectangleArea(length,width);