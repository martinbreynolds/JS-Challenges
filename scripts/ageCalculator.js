// The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN”, substituting the values.

function ageCalculator(currentyear, yearOfBirth) {
  var currentyear = new Date().getFullYear();
  var yearOfBirth = parseInt(document.getElementById("currentAge").value);
  var age = currentyear - yearOfBirth;
  return (document.getElementById("year").innerHTML =
    "You are either " + (age - 1) + " or " + age + ".");
}
