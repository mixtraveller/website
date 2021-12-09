//Hello

// var car = 10;

// let number = 10;
const apple = 20;

let traktor = "Belarus";
car = "Volga";

const isGreen = true;

const person = {
  firstName: "Oleg",
  lastName: "Dood",
};

let unknown = null;

function calc(num1, num2, operator) {
  // if (operator == "/") {
  //   console.log(num1 / num2);
  // } else if (operator == "*") {
  //   console.log(num1 * num2);
  // } else {
  //   console.log("Error operator");
  // }

  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    default:
      console.log("Error operator");
  }
}

calc(5, 5, 0);

let animal = ["tiger", "rabit", "cat", "dog", "lion"];

animal.forEach(function (item) {
  console.log(item + " Nice one");
});

let counter = animal.length;

console.log(counter);

for (let i = 0; i < counter - 1; i++) {
  console.log(animal[i]);
}

let number = 0;

while (number < counter - 1) {
  console.log(animal[number]);
  number = number + 1;
  number++;
}

let animal = ["tiger", "rabit", "cat", "dog", "lion"];
animal.forEach(function (item) {
  console.log(item + " krasava");
});

let counter = animal.length;

console.log(counter);
for (let i = 0; i < counter - 1; i++) {
  console.log(animal[i]);
}

let number = 0;
while (number < counter - 1) {
  console.log(animal[number]);
  number = number + 1;
}

let text = "Hello world";

// console.log(text.length);

const cars = "Toyota, Moskvich, Mustang, BMW";

const result = cars.replace("BMW", "MErcedes");

console.log(result);

function replaceText(string) {
  return string + " Hello";
}

let results = replaceText("Martinsh");

console.log(results);

alert("HELLO");
