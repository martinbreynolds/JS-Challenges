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

// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables:

// number of children
// partner’s name
// geographic location
// job title
// Output your fortune to the screen like so: “You will be a X in Y, and married to Z with N kids.”

function fortuneTeller(numberOfChildren, partnersName, location, jobTitle) {
  var numberOfChildren = document.getElementById("fortuneAge").value;
  var partnersName = document.getElementById("partnersName").value;
  var location = document.getElementById("location").value;
  var jobTitle = document.getElementById("jobTitle").value;

  return (document.getElementById(
    "yourFortune"
  ).innerHTML = `You will be a ${jobTitle} in ${location}, and married to ${partnersName} with ${numberOfChildren} kids.`);
}
