// Challege 1
// Create a variable called "names" and store 4 names in it. Then check if a fifth name exists and if so log it to the console.

const names = ["Elisa", "Eloise", "Elena", "Elvira"];

const fifthName = names[4]; // false

if (fifthName) console.log(fifthName); //Nothing prints

// Challege 2
// Create a variable called input and set it equal to anything you want, then log in the console what type of data type is stored in input

const input = "3.1416";
const typeOfInput = typeof input; // string
console.log(typeOfInput);

//Challenge 3
// Create a variable called myFavoriteProduct, then store a reference to "Thieves Essential Oil 15ml" using the products const variable and log it

const products = [
  { id: 3456, item: "Peppermint Essential Oil 15ml", price: 23.5 },
  { id: 5678, item: "Lavender Essential Oil 15ml", price: 21.5 },
  { id: 1450, item: "Lemon Essential Oil 15ml", price: 14.5 },
  { id: 1323, item: "Orange Essential Oil 15ml", price: 10.5 },
  { id: 8990, item: "Thieves Essential Oil 15ml", price: 45.5 },
];

const myFavoriteProduct = products[4].item; //Thieves Essential Oil 15ml
console.log(myFavoriteProduct);

//Challenge 4
// Create a function that determines which number is greater between two numbers: num1 & num2. Then use the function to compare two numbers in the products const variable.

// There are many ways to do this. Here are two:
function getGreaterNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function getGreaterNumberAlt(num1, num2) {
  if (num1 > num2) return num1;
  if (num2 > num1) return num2;
}

const peppermintPrice = products[0].price;
const lemonPrice = products[2].price;

const result = getGreaterNumber(peppermintPrice, lemonPrice); //23.50
const resultAlt = getGreaterNumberAlt(peppermintPrice, lemonPrice); //23.50

console.log(result);
console.log(resultAlt);

// Challenge 5
// Add input checking to your previous function (or create declare a new enhanced function). If someone attempts to pass a parameter(variable) that is NOT a number, the function should return null. You should call your function twice and one of those calls should return null.

// There are many ways to do it. Here is one of those:
function enhancedGetGreaterNumber(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") return null;
  if (num1 > num2) return num1;
  if (num2 > num1) return num2;
}

const enhancedResult1 = enhancedGetGreaterNumber(peppermintPrice, "23.5"); //null
const enhancedResult2 = enhancedGetGreaterNumber(80, 79.99); // 80

console.log(enhancedResult1);
console.log(enhancedResult2);

// Challenge 6
