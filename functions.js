// Unpure function
function generateRandomNumber() {
  return Math.random();
}

// AWFUL
function chaoticSum(a, b) {
  return Math.random() + a + b;
}

// Assuming num = 1
function isNumber(num) {
  console.log(typeof num);
  return typeof num === "number"; // true
}

// Pure function. Assuming a = 1 and b = 2
function sum(a, b) {
  const bothAreNumbers = isNumber(a) && isNumber(b); // true AND true
  if (bothAreNumbers) return a + b; // if true & true return 1 + 2;
  if (!bothAreNumbers) return null; // if either a or b are false return null;
  // This function returns 3
}

const number = sum(1, 2); //3

console.log(number);
