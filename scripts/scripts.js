//Should I wear a coat?

// Part 1
// Make a variable called temperature. Write some code that tells you to put on a coat if it is below 50 degrees.

function coatCheck() {
  var temperature;
  var coatWeather;

  temperature = document.getElementById("temperature").value;
  if (temperature == "") {
    return;
  }

  temp = parseInt(temperature);
  coatWeather = temp < 50 ? "Put on your coat!" : "No coat required!";
  document.getElementById("coatAdvice").innerHTML = coatWeather;
}

// Part 2
//  If it's less than 50 degrees, wear a coat.
// If it's less than 30 degrees, wear a coat and a  hat.
// If it's less than 0 degrees, stay inside.
// Otherwise, just pants and vest is fine.

function coatCheck2() {
  var temperature2;
  var coatWeather2;

  temperature2 = document.getElementById("temperature2").value;
  if (temperature2 == "") {
    return;
  }

  temp2 = parseInt(temperature2);

  if (temp2 >= 50) coatWeather2 = "Pants and Vest are fine";
  else if (temp2 >= 30) coatWeather2 = "Wear a Coat";
  else if (temp2 >= 0) coatWeather2 = "Wear a Coat and a Hat";
  else coatWeather2 = "Stay Inside";

  document.getElementById("coatAdvice2").innerHTML = coatWeather2;
}

//Full Name Display

// Write a simple program to combine a first name and a last name inside a function.
// Then update the function to accept a first and last name as arguments.

// Add a return statement to your 'name' function. Use that function to set the value of a variable.

function displayFullName(fName, lName) {
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;

  return (document.getElementById(
    "fullNameDisplay"
  ).innerHTML = `${fName} ${lName}`);
}

// Write a function that outputs a sentence. Then invoke that function later in your code.

function createSentence() {
  var newSentence = "Even the darkest night will end and the sun will rise.";
  document.getElementById("sentence").innerHTML = newSentence;
}

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
