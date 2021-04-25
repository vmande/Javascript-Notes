console.log('hello');
/// alert('hello this is vaish!!!');

//How to write a comment inline.


//Variables

var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

//document.getElementById('someText').innerHTML = "hey there";

// var age = prompt('What is your age ??');

// document.getElementById('someText').innerHTML = age;

//Numbers in Javascript

var num1 = 10;

//Increment num1 by 1

num1++;


//Decrement num1 by 1 

num1--;
console.log(num1);

//Divide, multiply *, remainder %
console.log(num1 % 6);

//Increment/decrement by any number you want

num1 += 10;
console.log(num1);

/* Functions
1. Create Function
2. Call a Function
*/

//Create 

function greetings(yourName){
   
    var result = 'Hello' + ' ' + yourName;
    console.log(result);
}

//Calling the function
var name = prompt('What is your name ?');
 greetings(name);

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(num1 + num2);
}

sumNumbers(10, 10);


