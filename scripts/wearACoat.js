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
