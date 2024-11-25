/*
Exercise: Array Sum & Average
Create functions that:
1. Calculate the sum of an array of numbers
2. Calculate the average of an array of numbers
Handle empty arrays
*/

// Write your solution here

function sum(numbers: number[]) {
  if (numbers.length === 0) {
    return;
  }

  let totalSum = numbers.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber;
  });

  return totalSum;
}

function average(numbers: number[]) {
  if (numbers.length === 0) {
    return;
  }

  let totalSum = sum(numbers);

  if (totalSum === undefined) {
    return;
  }

  let averageValue = totalSum / numbers.length;

  return averageValue;
}
// TODO: Continue| test
