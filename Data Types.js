// Primitive data types
// number
5;
3.2456;
// string
("String");
// boolean
false;
true;
// undefined
undefined;
// null
null;

// You can use typeof to learn their data type
console.log(typeof 5);
console.log(typeof "5");

// These are evaluations, operations, expressions
5 + 5;
("Hi");
10;

// You can save them in three types of variables for reuse
// var is old. Still there but mostly unused in newer code
var old = "It's better to declare variables like this const > let > var";

// const is the preffered option. As its name implies, it cannot be redeclared
const pi = 3.1416;

// let is an improvement over var used in newer code
let job = "Software Engineer";

// Non primitive Data Types
const arr = [1, 2, 3]; //array
const obj = { id: 1, color: "Cobalt Blue" }; // object

// Arrays are very flexible in JS and can store many data types. Arrays are used to give order to stuff, or for iteration
// mix[0] = "hi"
// mix[3] = 10
const mix = ["Hi", 1, 3.14, false, 5 + 5];

// It's probably better to maintain the same type of data in the same array, though
const better = ["Same", "type", "of", "data"];

// Objects contain key-value pairs
const person = {
  // They can contain any data type
  name: "Jacob",
  age: 23,
  hobbies: ["Videogames", "Movies"],
};

const hobbiesList = ["Programming", "Computers"];

const anotherPerson = {
  name: "Mario",
  age: 22,
  hobbies: hobbiesList,
};

let libraryUsers = [
  {
    name: "Jacob",
    booksBorrowed: ["The Lord of the Flies", "The Lord of the Rings"],
  },
  {
    name: "Mario",
    booksBorrowed: ["The Hunger Games", "Mockingjay"],
  },
];

let otherLibraryUsers = [
  {
    id: 1,
    name: "Jacob",
    borrowHistory: [
      { id: 1, title: "The Lord of the Flies", genre: "Philosophy" },
      { id: 2, title: "The Lord of the Rings", genre: "Fantasy" },
    ],
  },
  {
    id: 1,
    name: "Mario",
    borrowHistory: [
      { id: 26, title: "The Hunger Games", genre: "Dystopian" },
      { id: 28, title: "Mockingjay", genre: "Dystopian" },
    ],
  },
];

console.log(typeof libraryUsers);
console.log(libraryUsers[1].booksBorrowed[1]);
