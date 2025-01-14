"use strict";
let message1 = "Hello ";
let message2 = "JavaScript!";
alert(message1 + message2);

let x = prompt("Enter x = ", "0");
let y = prompt("Enter y = ", "0");
alert("Сума чисел = " + (+x + +y));

let a = prompt("Guess the number:", "0");

if (a == 3) {
  alert("Congratulations, You did it!");
} else {
  if (a > 3) {
    alert("The number is too long");
  } else {
    alert("The number is short");
  }
}

let b = prompt("Enter the day of the week:", "...");

if (b === "Понеділок" || b === "Monday") {
  alert("Start of the work week!");
} else {
  if (b === "П'ятниця" || b === "Friday") {
    alert("End of the work week!");
  } else {
    alert("A regular day");
  }
}

let day = prompt("Enter the day of the week:", "...");
switch (day) {
  case "Понеділок":
  case "Monday":
    alert("Start of the work week!");
    break;
  case "П'ятниця":
  case "Friday":
    alert("End of the work week!");
    break;
  default:
    alert("A regular day");
}

let score = prompt("Number of student points", "0");

if (score < 50) {
  alert("Your grade: F");
} else if (score < 70) {
  alert("Your grade: D");
} else if (score < 80) {
  alert("Your grade: C");
} else if (score < 90) {
  alert("Your grade: B");
} else {
  alert("Your grade: A");
}
