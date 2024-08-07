// // The initial numbers that must be verified.
const n1 = 15;
const n2 = 14;
const n3 = 11;
const n4 = 10;

// // Check one: add up to 50
const isSum50 = n1 + n2 + n3 + n4 == 50;
console.log("Check the sum is 50: " + isSum50);

// // Check two: at least two odd numbers
// // Here, we use modulus to check if something is odd.
// // Since % 5 is 0 if even and 1 if odd, we can use
// // arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log("There are atleast 2 odd numbers: " + isTwoOdd);

const isLarger = n1 > n4;
console.log("First value is greater than last:  " + isLarger);

//Arthimetic chain(subtraction, multiplication and division)
let result1 = n1 - n2;
console.log("Subtration of two number: " + result1);
let result2 = result1 * n3;
console.log("Multiplying the subtracted value with the n3: " + result2);
let result3 = result2 % n4;
console.log("Remainder value: " + result3);

// // Check three: no number larger than 25
// // This time, we use the OR operator to check
// // if ANY of the numbers is larger than 25.
const isSmaller = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log("Checks whether the values are greater: " + isSmaller);

let isDivisbleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log("Checks whether all values are divisible by 5: " + isDivisbleBy5);

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log("All number over 25: " + isOver25);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log("Is All number unique: " + isUnique);

function calculateTrip(speed, mpg) {
  let trip = 1500;
  //let speed = 55;
  //let mpg = 30;
  let gallonsReq = trip / mpg;
  let gallonPrice = 3;
  let tripCost = gallonsReq * gallonPrice;
  let timeTaken = trip / speed;
  let budget = 175;
  let meetsBudget = tripCost <= budget;
  console.log("Trip Cost : " + tripCost);
  console.log("Meeting Fuel Budget : " + meetsBudget);
  console.log("Time Required for Trip : " + timeTaken);
  console.log("Gallons Required : " + gallonsReq);
}

calculateTrip(55, 30);
calculateTrip(60, 28);
calculateTrip(75, 23);
