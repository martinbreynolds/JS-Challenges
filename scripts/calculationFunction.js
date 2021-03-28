//Calculator

//Build a simple calculator that takes two integers and the operator and displays the result.

function calculator(num1, num2, operator) {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;
  switch (operator) {
    case "+":
      var result = num1 + num2;
      document.getElementById(
        "calculatorResult"
      ).innerHTML = `${num1} ${operator} ${num2} = ${result}`;
      break;
    case "-":
      var result = num1 - num2;
      document.getElementById(
        "calculatorResult"
      ).innerHTML = `${num1} ${operator} ${num2} = ${result}`;
      return;
      break;
    case "*":
      var result = num1 * num2;
      document.getElementById(
        "calculatorResult"
      ).innerHTML = `${num1} ${operator} ${num2} = ${result}`;
      return;
      break;
    case "/":
      var result = num1 / num2;
      document.getElementById(
        "calculatorResult"
      ).innerHTML = `${num1} ${operator} ${num2} = ${result}`;
      return;
      break;
    case "%":
      var result = num1 % num2;
      document.getElementById(
        "calculatorResult"
      ).innerHTML = `${num1} ${operator} ${num2} = ${result}`;
      return;
  }
}
