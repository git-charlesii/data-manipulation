// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if all numbers are divisible by 5. Cache the result in a variable.
const divByfive = (n1 % 5, n2 % 5, n3 %5, n4 % 5) == 0;
console.log("divByfive");

// Check if the first number is larger than the last. Cache the result in a variable.

console.log(n1 > n4);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
console.log(n2 - n1);

// Multiply the result by the third number.
let result = ((n2 - n1) * n3);
console.log(result);

// Find the remainder of dividing the result by the fourth number.
let remainder = (result/n4);
console.log(remainder);

//********** */ Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

// Let’s look at a more practical scenario.
// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?
// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// Log the results of your calculations using string concatenation or template literals.
const tripDistance = 1500;
const mpgLowmph = 30;
const mpgMidmph = 28;
const mphHimph = 23;
const fuelPergallon = 3;
const tripMoney = 175;

let costOftripLow = ((1500 / 30) * 3);
console.log("the lowest fuel efficiency the cost will amount to " + costOftripLow + " dollars.");

let costOftripMid = ((1500 / 28) * 3);
console.log("the mid fuel efficiency cost will amount to " + costOftripMid + " dollars." );

let costOftripHigh = ((1500 / 23) * 3);
console.log("the best fuel efficiency cost will amount to " + costOftripHigh + " dollars.");

if (costOftripLow >= 175){
console.log("keep crunching those numbers or cancel the trip");

}else if(costOftripLow < 175){
console.log("woohoo, let's go!");

}else if(costOftripMid >= 175){
  console.log("keep crunching those number or cancel the trip");

}else if(costOftripMid < 175){
  console.log("woohoo, let's go!");

}else if(costOftripHigh >= 175){
  console.log("keep crunching those number or cancel the trip");

}else if(costOftripHigh < 175){
  console.log("woohoo, let's go!");
}







// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = ((n1 % 2 == 0) + (n2 % 2 == 0) + (n3 % 2 == 0) + (n4 % 2 == 0));
console.log (isTwoOdd);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const is25orLess = n1 <= 25 && n2 <=25 && n3 <= 25 && n4 <= 25;
console.log(is25orLess); 
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);console.log('Hello World');

  
//   Check if all numbers are divisible by 5. Cache the result in a variable.
const ifDivby5 = (n1 % 5) && (n2 % 5) && (n3 % 5) && (n4 % 5) == 0;

// Check if the first number is larger than the last. Cache the result in a variable.
// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

