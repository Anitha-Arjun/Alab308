//This is lab308.1.1

//Part 1
//All numbers divisible by 5

let result = 10 / 5 && 15 / 5 && 20 / 5 && 5 / 5;
console.log("this value is divisible by:" + " " + result);

//First number larger than last
let value = 10 > 5;
console.log("this expression is:" + " " + value);

//Arthimetic chain(subtraction, multiplication and division)
let sub = 15 - 10;
console.log("The subraction of 2 numbers:" + " " + sub);
let mul = sub * 20;
console.log(
  "The result got from sub is now multiplieds with the next number:" + " " + mul
);
let div = mul / 4;
console.log("The multiplied value is now divided with the last value:" + div);

// isover25 without using NOT operator
let val = div > 25 && div == 25;
console.log("The values is greater than 25:" + " " + val);

// // Part 2
let milesTotal = 1500;

// // The initial numbers that must be verified.
// const n1 = 10;
// const n2 = 15;
// const n3 = 20;
// const n4 = 5;

// // Check one: add up to 50
// // This is a fairly simple operation using
// // arithmetic operators and a comparison.
// const isSum50 = n1 + n2 + n3 + n4 == 50;

// // Check two: at least two odd numbers
// // Here, we use modulus to check if something is odd.
// // Since % 2 is 0 if even and 1 if odd, we can use
// // arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// // Check three: no number larger than 25
// // This time, we use the OR operator to check
// // if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// // Check four: all unique numbers
// // This is long, and there are more efficient
// // ways of handling it with other data structures
// // that we will review later.
// const isUnique =
//   n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// // Here, we put the results into a single variable
// // for convenience. Note how we negate isOver25 using
// // the ! operator. We could also have tested for
// // "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// // Finally, log the results.
// console.log(isValid);

// // Here's another example of how this COULD be done,
// // but it SHOULD NOT be done this way. As programmers,
// // we break things into small, manageable pieces so that
// // they can be better understood, scaled, and maintained.
// const dontDoThis =
//   n1 + n2 + n3 + n4 == 50 &&
//   (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
//   n1 != n2 &&
//   n1 != n3 &&
//   n1 != n4 &&
//   n2 != n3 &&
//   n2 != n4 &&
//   n3 != n4;
