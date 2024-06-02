// filter_vs_forLoop.js

// Using filter method
const words = ["react", "node", "javascript", "typescript", "mongodb"];

const filteredWordsFilter = words.filter(word => word.length > 5);

console.log("Filtered Words using filter method:", filteredWordsFilter);
// Filtered Words using filter method: [ 'javascript', 'typescript' ]

// Using normal for loop
const filteredWordsForLoop = [];
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 5) {
    filteredWordsForLoop.push(words[i]);
  }
}

console.log("Filtered Words using normal for loop:", filteredWordsForLoop);
// Filtered Words using normal for loop: [ 'javascript', 'typescript' ]
