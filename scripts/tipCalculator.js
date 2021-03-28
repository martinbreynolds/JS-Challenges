// Tip Calculator

// We’ll make a program to calculate a tip:
// Create 2 Variables for Amount and Tip Percentage

// Calculate the new total
// Output a sentence to the page - something like: "Your total bill, with tip, is £35.45"

// BONUS POINTS:
// Use `toFixed()` to round the output to 2 decimal places
// Display the tip amount in the output as well

// Additional
// Make a Procedural `Function` in Javascript.

function tipCalculator() {
  var billAmount = parseInt(document.getElementById("billAmount").value);

  var tipPercentage = parseInt(document.getElementById("percentAmount").value);

  var tipPercentCalc = (billAmount / 100) * tipPercentage;

  var totalBill = billAmount + tipPercentCalc;

  return (document.getElementById(
    "totalBillSentence"
  ).innerHTML = `Your bill of £${billAmount.toFixed(
    2
  )}, with a ${tipPercentage}% tip of £${tipPercentCalc.toFixed(
    2
  )} , is a total bill of £${totalBill.toFixed(2)}`);
}
