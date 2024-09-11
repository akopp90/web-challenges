console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number & 1) {
  console.log("is ODD"); // ODD
} else {
  console.log("is even"); // ODD
  // EVEN
}
console.log(number & 1 ? "is ODD" : "is EVEN");

// Part 3: Hotdogs
const numberOfHotdogs = 4;
let priceOfHotdogs = 2;
if (numberOfHotdogs >= 1000000) {
  priceOfHotdogs = 0.1;
  console.log(priceOfHotdogs * numberOfHotdogs);
} else if (numberOfHotdogs >= 100) {
  priceOfHotdogs = 1;
  console.log(priceOfHotdogs * numberOfHotdogs);
} else if (numberOfHotdogs >= 5) {
  priceOfHotdogs = 1.5;
  console.log(priceOfHotdogs * numberOfHotdogs);
} else {
  console.log(priceOfHotdogs * numberOfHotdogs);
}
// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Roland";

const greeting = "Hello " + (userName === "Roland" ? "Coach" : userName) + "!";

console.log(greeting);
