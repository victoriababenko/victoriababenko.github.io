"use strict";

const classes = ["first", "second", "third", "fourth"];

// Отримати перший абзац
const p1 = document.querySelector("#p1");
p1.style.backgroundColor = "gold";
console.log(p1);

// Отримати другий абзац
const p2 = document.querySelector("#p2");
p2.style.backgroundColor = "gold";
p2.style.color = "blue";
p2.style.fontSize = "2rem";
console.log(p2);

// Отримати третій абзац
const p3 = document.querySelector("#p3");
p3.classList.add("third");
console.log(p3);

// Отримати четвертий абзац
const p4 = document.querySelector("#p4");
p4.classList.add("fourth", "border");
console.log(p4);

// Перша кнопка
const btn1 = document.querySelector("button");
btn1.style.backgroundColor = "gold";
btn1.style.color = "blue";

// Друга кнопка
const btn2 = document.querySelectorAll("button")[1];
btn2.addEventListener("click", () => {
  p1.style.display = "none";
});

// Третя кнопка
const btn3 = document.querySelectorAll("button")[2];
btn3.addEventListener("click", () => {
  p1.style.display = "block";
});

// Четверта кнопка
const btn4 = document.querySelectorAll("button")[3];
btn4.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
