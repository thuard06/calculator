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

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
});
//const farenheit = parseInt(prompt("What is the temperarture in Farenheit?"))

//const addResult = add(number1, number2);
//const subtractResult = subtract(number1, number2);
//const divideResult = divide(number1, number2);
//const multiplyResult = multiply(number1, number2);//

//const result = add(number1, number2);

