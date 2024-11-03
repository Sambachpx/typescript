// Exercise: Use a for loop to calculate the total score
// Write your code here

let scores: number[] = [10, 20, 30, 40, 50];
let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
  totalScore += scores[i];
}

console.log("score:", totalScore);
