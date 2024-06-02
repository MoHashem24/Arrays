// Filter even numbers from an array
const realNumbers = [1, -1, 2, 344, 0, 345, 33, 12, 45];

const evenNumbers = realNumbers.filter(number => number % 2 === 0);

console.log("Real Numbers:", realNumbers);
/**
 * Real Numbers: [1, -1, 2, 344, 0, 345, 33, 12, 45]
 */
console.log("Even Numbers:", evenNumbers); 
// Even Numbers: [2, 344, 0, 12]