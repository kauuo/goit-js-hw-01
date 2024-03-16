//------------------------------------//

// const companyName = "Brothers cringe";
// const sexBots = 228;
// const gaySexBots = 1488;

// const botMessage = `${companyName} has ${sexBots + gaySexBots} bots in stock`;

// console.log(botMessage);

//------------------------------------//

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// console.log(message);

//------------------------------------//

// const username = "Poly";
// const message = `Username ${username} is ${username.length} characters long`;

// console.log(message);

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic[courseTopic.length];
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(firstElement);
// console.log(lastElement);
// console.log(courseTopic.length);

// const age = 16;
// const isAdult = age >= 18;

// console.log(isAdult);

// function add(a, b, c) {
//   console.log(`Addition result equals: ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function makeMessage(name, price) {
//   console.log(`You picked ${name}, price per item is ${price} credits`);
//   return name, price;
// }

// makeMessage("Radar", 6150);
// makeMessage("Scanner", 3500);
// makeMessage("Reactor", 8000);
// makeMessage("Engine", 4070);

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//     console.log(orderedQuantity * pricePerItem);
//     return orderedQuantity, pricePerItem;
// }

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);



function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
