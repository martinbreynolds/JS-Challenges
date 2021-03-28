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
