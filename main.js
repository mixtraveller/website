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

console.log(counter);
for (let i = 0; i < counter - 1; i++) {
  console.log(animal[i]);
}

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

function myFunction(params) {
  const element = document.getElementById("paragraph");

  element.classList.remove("test");
}

function workOndata() {
  let customAddresList = [
    {
      address: "6694 Pharetra St.",
      phone: "(700) 327-3505",
      email: "odio@icloud.couk",
      name: "Kelsie Pena",
      region: "Toscana",
      country: "Costa Rica",
    },
    {
      address: "Ap #283-796 Nisl Av.",
      phone: "1-636-342-9258",
      email: "lectus@hotmail.ca",
      name: "Erica Mcneil",
      region: "Puntarenas",
      country: "Turkey",
    },
    {
      address: "504-2475 Leo Rd.",
      phone: "(780) 734-0667",
      email: "quis.pede.suspendisse@icloud.couk",
      name: "Catherine Allison",
      region: "Quảng Trị",
      country: "Sweden",
    },
    {
      address: "2823 Rutrum Av.",
      phone: "1-619-450-5654",
      email: "nulla.ante.iaculis@aol.edu",
      name: "Nathaniel Good",
      region: "Mazowieckie",
      country: "Nigeria",
    },
    {
      address: "664-5691 Risus. Street",
      phone: "1-455-958-4902",
      email: "augue.ac@protonmail.org",
      name: "Kyle Petersen",
      region: "San José",
      country: "Spain",
    },
    {
      address: "Ap #456-4072 Imperdiet Rd.",
      phone: "1-667-394-4993",
      email: "porttitor@icloud.ca",
      name: "Maya Gibson",
      region: "Nagaland",
      country: "Chile",
    },
    {
      address: "581-9661 Commodo St.",
      phone: "1-567-976-6537",
      email: "ullamcorper@google.com",
      name: "Cora Schneider",
      region: "Illes Balears",
      country: "Brazil",
    },
    {
      address: "Ap #801-6295 Phasellus Rd.",
      phone: "(907) 274-4842",
      email: "sociis@protonmail.com",
      name: "Gavin Baxter",
      region: "South Gyeongsang",
      country: "Austria",
    },
    {
      address: "4302 Tempor Street",
      phone: "(172) 544-6617",
      email: "donec@outlook.org",
      name: "Quon May",
      region: "Los Ríos",
      country: "India",
    },
    {
      address: "P.O. Box 385, 1110 Et, Street",
      phone: "(912) 527-3547",
      email: "at.nisi@google.com",
      name: "Shea Lee",
      region: "Punjab",
      country: "India",
    },
  ];

  let element = document.getElementById("customers");

  console.log(customAddresList);

  let list = "";

  //  customAddresList.forEach(function (customerAddress) {
  //    let newElement = document.createElement("div");
  //    newElement.innerHTML = customerAddress.name;
  //    element.appendChild(newElement);
  //  });

  customAddresList.forEach(function (customerAddress) {
    list += `<div class="customer">${customerAddress.name} - ${customerAddress.region}</div>`;
  });

  element.innerHTML = list;
}

let element = document.getElementById("button");

element.addEventListener("click", function () {
  element.classList.add("test2");
});
