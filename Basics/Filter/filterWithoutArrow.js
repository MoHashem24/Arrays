// Filter numbers greater than 10 using ES5 syntax
var numbers = [5, 12, 8, 20, 1, 30];

var numbersGreaterThan10 = numbers.filter(function(number) {
  return number > 10;
});

console.log("All Numbers:", numbers);
// All Numbers: [5, 12, 8, 20, 1, 30]

console.log("Numbers Greater Than 10:", numbersGreaterThan10); 
// Numbers Greater Than 10: [12, 20, 30]
