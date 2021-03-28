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
