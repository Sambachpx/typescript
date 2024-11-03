/*
Exercise: Temperature Converter
Create a function that converts Celsius to Fahrenheit.
The formula is: (C × 9/5) + 32
Input should be a number, output should be a number
*/

// Write your solution here

function convertCelsuis(celsius: number) {
  return (celsius * 9) / 5 + 32;
}

console.log(convertCelsuis(1));
