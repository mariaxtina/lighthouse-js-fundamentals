var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var a = 0;
while (a < ingredients.length) {
  console.log(ingredients[a]);
  a++;
}

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

for (var x = ingredients.length-1; x >= 0; x--) {
  console.log(ingredients[x]);
}