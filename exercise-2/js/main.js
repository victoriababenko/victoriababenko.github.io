"use strict";
// checkAge(age)
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}

function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

// min(a,b)
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function min(a, b) {
  return a < b ? a : b;
}

// pow(x, n)
function pow(x, n) {
  if (n < 1 || !Number.isInteger(n)) {
    return "Use natural numbers only.";
  }
  return x ** n;
}
const x = +prompt("Enter x:", 0);
const n = +prompt("Enter n:", 0);

alert(pow(x, n));

// ask
(question, yes, no) => (confirm(question) ? yes() : no());

const ask = function (question, yes, no) {
  if (confirm(question)) yes();
  else no();
};

// A, B, C
function A() {
  console.log("A was called");
  return undefined;
}
function B() {
  console.log("B was called");
  return false;
}
function C() {
  console.log("C was called");
  return "foo";
}
console.log(A() ?? C());
console.log(B() || C());

// person
const person = {
  name: "John",
  age: 20,
};
console.log(person.name, person.age);

person.name = { firstName: "John", lastName: "Doe" };
console.log(person.name.firstName, person.name.lastName);

//fruits
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

for (let fruit of fruits) {
  console.log(fruit);
}

let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

i = 0;
do {
  console.log(fruits[i]);
  i++;
} while (i < fruits.length);

// Numbs
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of Numbs) {
  if (num % 2 === 0) console.log(num);
}

//names
const names = ["Batman"];
names.push("Joker");
names.unshift("Bane");
if (!names.includes("Alfred")) names.push("Alfred");
if (names.includes("Batman")) {
  names.splice(names.indexOf("Batman"), 1);
}

console.log(names);
