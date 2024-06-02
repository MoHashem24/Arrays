const words = ["Elon Musk", "Kobe Bryant", "Michael Jordan", "Mamba", "Goku"];

function isLongWord(word) {
  return word.length > 10;
}

const longWords = words.filter(isLongWord);

console.log("All Words:", words);
// All Words: ["Elon Musk", "Kobe Bryant", "Michael Jordan", "Mamba", "Goku"]

console.log("Long Words:", longWords); 
// Long Words: ["Michael Jordan"]