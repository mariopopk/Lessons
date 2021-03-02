// in VSCode open terminal > run. Type on terminal `node conditionals.js` to run this file. You need to have node.js installed in your computer.

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (true) {
  console.log(true, "I am truthy");
}

if (5 + 5) {
  console.log(5 + 5, "I am truthy");
}

if (false) {
  console.log(false, "falsy");
}

const person = {
  name: "Jacob",
  age: 23,
};

if (person.name) {
  console.log(person.name, "I am truthy");
}

if (person.surname) {
  console.log(person.surname, "I am falsy");
}

if (person.age > 18) {
  console.log(person.age, "I am truthy");
}

if (undefined) {
  console.log(undefined, "I am falsy");
}

if (0) {
  console.log(0, "I am falsy");
}

if (-3) {
  console.log(-3, "I am truthy");
}

if ("This is not in the code") {
  console.log("This is not in the code", "I am truthy");
}

if ("") {
  console.log("", "I am falsy");
}

if ([]) {
  console.log([], "I am truthy");
}

if ({}) {
  console.log({}, "I am truthy");
}

if (null) {
  console.log(null, "I am falsy");
}

if (NaN) {
  console.log(NaN, "I am falsy");
}
const myAge = 18; //assign
myAge === 18; //  (equals)
if (myAge === 18) {
  console.log(myAge === 18, "I am truthy");
}

const options = {
  deposit: "We can help you DEPOSIT money. Hold on...",
  withdraw: "We can help you DEPOSIT money. Hold on...",
};

// readline.question(
//   `Welcome to Jakovia Bank. What do you want to do?`,
//   (option) => {
//     //
//     console.log(`This is what you wanted to do: ${option}!`);
//     if (!options[option]) console.log("That is not an option");
//     else console.log(options[option]);
//     //
//   }
// );

// readline.question(
//   `Welcome to Jakovia Bank. What do you want to do?`,
//   (option) => {
//     // Only focus on the code between the comments
//     console.log(`This is what you wanted to do: ${option}!`);
//     if (!options[option]) console.log("That is not an option");
//     else console.log(options[option]);
//     //
//   }
// );
