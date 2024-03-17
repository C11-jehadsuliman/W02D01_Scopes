// /* START CODE UNDER THIS LINE */

//--------------------pulse check--------------------
// Q1:

let myFavoriteFood = "mandi";
// make sure that the variable is in the Global scope
const favoriteFood = function () {
  // TODO: Your code here
  return myFavoriteFood;
};
console.log(favoriteFood()); // => the value of `myFavoriteFood` variable

// Q2:

const updateFavoriteFood = function (newValue) {
  // TODO: Your code here
  myFavoriteFood = "pizza";
  return myFavoriteFood;
};

updateFavoriteFood("Pizza");
console.log(favoriteFood()); // => "Pizza"

// Q3:

const createCounter_v01 = function () {
  let counter = 0;
  const innerFunction = function () {
    return function () {
      return (counter += 1);
    };
    // this anonymous function is a closure function that has access to its own closure variable
  };
};
console.log(createCounter_v01);

// Q4:

// // instead of counting from zero it will take count from the value provided
// const createCounter_v02 = function (start) {
//     // TODO: Your code here
// };

// ----------------------Practice--------------------

// Q1:

let age = 25;
if (true) {
  age = 30;
}
age; // ? 25
const myName = "John";
if (true) {
  const myName = "Jane";
}
myName; // ? John

// Q2:

let number = 10;
const func1 = function () {
  let number = 15;

  if (true) {
    let number = 24;
  }

  return number;
};

func1(); // ? 15

function func2(age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
  }

  return age;
}

func2(26); // ? 10

// Q3:!!!!!!!!!!

let counter = 5;

const countDown = function () {
  // TODO: Your code here
  counter = counter - 1;
  if (countDown > 0) {
    return counter;
  } else {
    return "count down is over";
  }
};

console.log(countDown()); // => 4
console.log(countDown()); // => 3
console.log(countDown()); // => 2
console.log(countDown()); // => 1
console.log(countDown()); // => 0
console.log(countDown()); // => "count down is over"

// Q4:

let counter1 = 3;
const countUp = function () {
  // TODO: Your code here
  counter1 = counter1 + 1;
  return counter1;
};

console.log(countUp()); // => 4
console.log(countUp()); // => 5
console.log(countUp()); // => 6
console.log(countUp()); // => 7
console.log(countUp()); // => 8

// Q5:!!!!!!!!!!!!!!!!!!!!!

let counter2 = 1;
const resetCount = function (start) {
  // TODO: Your code here
  counter2 = counter2 + 10;
  return counter2;
};

console.log(resetCount(0)); // => "the count has been reset"
console.log(countUp()); // => 1
console.log(resetCount(10)); // => "the count has been reset"
console.log(countUp()); // => 11

// Q6:!!!!!!!!!!!!!!!!!!!!!

let allList;
const addToList = function (toDo) {
  // TODO: Your code here
};

addToList("Eat"); // => 'Eat'
addToList("Play"); // => 'Eat Play'
addToList("Sleep"); // => 'Eat Play Sleep'
addToList("repeat"); // => 'Eat Play Sleep repeat'

// Q7:!!!!!!!!!!!!

// const createToDoList = function () {
//   // TODO: Your code here
//   let addToList;
// };

// const toDoListOne = createToDoList();

// toDoListOne("Eat"); // => 'Eat'
// toDoListOne("Play"); // => 'Eat Play'
// toDoListOne("Sleep"); // => 'Eat Play Sleep'
// toDoListOne("repeat"); // => 'Eat Play Sleep repeat'

// Q8:!!!!!!!!!!!!!
let currentBalance;
const deposit = function (amount) {
  // TODO: Your code here
  currentBalance = deposit + 50;
  return amount;
};

console.log(deposit(100)); // => 100
console.log(deposit(50)); // => 150

// // Q9:

// const withdraw = function (amount) {
//     // TODO: Your code here
//   };

//   deposit(100); // => 100
//   deposit(50); // => 150
//   withdraw(70); // => 80
//   deposit(50); // => 130
//   withdraw(100); // => 30
//   withdraw(100); // => "insufficient funds, current balance: 30"

// // Q10:

// const createAccount = function (initialValue) {
//     // TODO: Your code here
//   };

//   const accountOne = createAccount(0);
//   accountOne("withdraw", 10); // => "insufficient funds, current balance: 0"
//   accountOne("deposit", 50); // => 50
//   accountOne("deposit", 70); // => 120
//   accountOne("withdraw", 10); // => 110

//   const accountTwo = createAccount(500);
//   accountTwo("withdraw", 100); // => 400
//   accountTwo("withdraw", 100); // => 300
//   accountTwo("deposit", 50); // => 350
//   accountTwo("withdraw", 500); // => "insufficient funds, current balance: 350"

// //-------------------Advanced practice----------------

// // Q1:

// // every time the function is called it must check if the passed argument is the maximum number, minimum number, or
// // both, and preserve the result for later invocations
// const minMax = function (number) {
//     // TODO: Your code here
//   };

//   minMax(5); // => "the maximum number is: 5 and the minimum number is 5"
//   minMax(2); // => "the maximum number is: 5 and the minimum number is 2"
//   minMax(3); // => "the maximum number is: 5 and the minimum number is 2"
//   minMax(7); // => "the maximum number is: 7 and the minimum number is 2"
//   minMax(0); // => "the maximum number is: 7 and the minimum number is 0"

// // Q2:

// // use your previous solution for `randomMove`
// const randomMove = function () {
//     // TODO: Your code here
//   };

//   const rockPaperScissors_v03 = function (move) {
//     // TODO: Your code here
//   };

//   rockPaperScissors_v03("rock"); // => "Won: 1, Lost:0"
//   rockPaperScissors_v03("rock"); // => "Won: 1, Lost:1"
//   rockPaperScissors_v03("paper"); // => "Won: 1, Lost:2"

// // Q3:

// // let's assume that the score limit is set to three
// rockPaperScissors_v04("rock"); // => "Won: 2, Lost:2"
// rockPaperScissors_v04("rock"); // => "Won: 2, Lost:3"
// rockPaperScissors_v04("rock"); // => "Won: 1, Lost:0"

// // Q4:

// const rockPaperScissors_v05 = function (move, reset) {
//     // TODO: Your code here
//   };

//   rockPaperScissors_v05("rock"); // => "Won: 1, Lost:0"
//   rockPaperScissors_v05("", true); // => "the game has been reset"
//   rockPaperScissors_v05("scissors"); // => "Won: 0, Lost:1"

// // Q5:

// rockPaperScissors_v06("rock"); // => "Won: 0, Lost:1"
// //let's assume that the same random move was picked because of the 25% chance
// rockPaperScissors_v06("rock"); // => "Won: 0, Lost:2"
// rockPaperScissors_v06("rock"); // => "Won: 1, Lost:0"
