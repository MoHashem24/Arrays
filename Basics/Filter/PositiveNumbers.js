// Filter positive numbers from an array
const mixedNumbers = [-10, 0, 5, -3, 20, -7, 12];

const positiveNumbers = mixedNumbers.filter(number => number > 0);

console.log("Mixed Numbers:", mixedNumbers);
// Mixed Numbers: [-10, 0, 5, -3, 20, -7, 12]

console.log("Positive Numbers:", positiveNumbers); 
// Positive Numbers: [5, 20, 12]