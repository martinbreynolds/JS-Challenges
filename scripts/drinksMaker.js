//Drinks Maker

//Use a switch statement to make a drink selection with two variabkes and return the drinks selection.

function drinkOrder(size, drink) {
  var drink = document.getElementById("flavours").value;
  switch (drink) {
    case "cola":
      return outputDrinksOrder(size, "Cola");
      break;
    case "lemonade":
      return outputDrinksOrder(size, "Lemonade");
      break;
    case "orange":
      return outputDrinksOrder(size, "Orange");
      break;
  }
}

function outputDrinksOrder(size, drink) {
  var size = document.getElementById("sizes").value;
  switch (size) {
    case "small":
      return (document.getElementById("drinksOrder").innerHTML =
        "Your order is a Small " + drink);
      break;
    case "medium":
      return (document.getElementById("drinksOrder").innerHTML =
        "Your order is a Medium " + drink);
      break;
    case "large":
      return (document.getElementById("drinksOrder").innerHTML =
        "Your order is a Large " + drink);
      break;
  }
}
