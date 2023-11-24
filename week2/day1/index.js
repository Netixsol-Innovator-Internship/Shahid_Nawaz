document.getElementById("myButton").addEventListener("click", function(){
    console.log("My name is shahid nawaz. i have completed my graduation from COMSATS uinversity islamabad vehari campus.now i am working as intern software developer. thank you!!")
  })

alert("click on to see value of a in console")
var a = 5;
console.log(`valu of a is : ${a}`)
alert("click on to see value of b in console")
var b = 10;
console.log(`value of b is : ${b}`)

var sum = a + b; // addition
alert("click on to see value of sum in console")
console.log(`sum of ${a} and ${b} is : ${sum}`)
var diff = a - b; // subtraction
alert("click on to see value of diff in console")
console.log(`diff of ${a} and ${b} is :${diff}`)
var prod = a * b; // multiplication
alert("click on to see value of mul in console")
console.log(`mul of ${a} and ${b} is :${prod}`)
var quotient = a / b; // division
alert("click on to see value of quotient in console")
console.log(`division of ${a} and ${b} is :${quotient}`)

var isEqual = a === b; // equality comparison
alert("click on to see value of isEqual in console")
console.log(`euqlity camparison of ${a} and ${b} is :${isEqual}`)
var isNotEqual = a !== b; // inequality comparison
alert("click on to see value of isNotEqual in console")
console.log(`inequality camparison of ${a} and ${b} is :${isNotEqual}`)
var isGreater = a > b; // greater than comparison
alert("click on to see value of greater in console")
console.log(`greater than copmarison of ${a} and ${b} is :${isGreater}`)
var isLess = a < b; // less than comparison
alert("click on to see value of isLess in console")
console.log(`less than copmarison of ${a} and ${b} is :${isLess}`)

var logicalAnd = a < 10 && b > 5; // logical AND
alert("click on to see value of logicalAnd in console")
console.log(`logical AND of ${a} and ${b} is :${logicalAnd}`)
var logicalOr = a < 10 || b > 5; // logical OR
alert("click on to see value of logicalOr in console")
console.log(`logical OR of ${a} and ${b} is :${logicalOr}`)

a += 5; // shorthand for a = a + 5; (assignment)
alert("click on to see value of a in console")
console.log(`${a}`)



alert("execute the function to greet s")
function greet(name) {
    console.log("A o A respected sir , " + name + "sahb!");
  }
  
  greet("M Masood"); // call the greet function with the argument "John"


