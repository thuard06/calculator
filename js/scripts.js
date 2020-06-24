function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}


function multiply(number1, number2) {
  return number1 * number2;
}


function divide(number1, number2) {
  return number1 / number2;
}

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const farenheit = parseInt(prompt("What is the temperarture in Farenheit?"))

const addResult = add(number1, number2);
const subtractResult = subtract(number1, number2);
const divideResult = divide(number1, number2);
const multiplyResult = multiply(number1, number2);

const result = add(number1, number2);
alert(toCelsius);
