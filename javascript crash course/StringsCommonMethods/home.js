// Strings in Javascript (common methods)

let fruit = 'banana, apples, kiwis';
let moreFruits = 'banana\napples';
console.log(moreFruits);

console.log(fruit.length); // The length always starts from 1
console.log(fruit.indexOf('nan')); // Index starts from 0
console.log(fruit.slice(2,6)); // Slicing followes the set policy of [).
console.log(fruit.replace('ban', '123')); // Replace ban by 123
console.log(fruit.toLowerCase()); //Converts the String into lower case variable
console.log(fruit.toUpperCase()); //Converts the String into upper case variable
console.log(fruit.charAt(2));  // Index always starts from 0.
console.log(fruit[2]);
console.log(fruit.split(',')); //split by a comma (separates each string by comma)
console.log(fruit.split('')); //split by characters