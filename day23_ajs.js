function organizeChristmasDinner(dishes) {
  const ingredients = {}
  for (const [dish, ...dishIngredients] of dishes) {
    for (const ingredient of dishIngredients) {
        if (ingredients[ingredient]){
            ingredients[ingredient].push(dish);
        } else {
            ingredients[ingredient] = [dish];
        }
        
    }
  }
  const result = [];
  for (const ingredient in ingredients) {
    if (ingredients[ingredient].length > 1) {
        result.push([ingredient, ...ingredients[ingredient].sort()]);
    }
  }
  return result.sort();
}
const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
];

console.log(organizeChristmasDinner(dishes));
/*

"sauce" is in 2 dishes: "christmas turkey" and "pizza".
"sugar" is in 2 dishes: "cake" and "hot chocolate".
The rest of the ingredients only appear in one dish, so we do not show them.

We show "sauce" first because alphabetically it comes before "sugar".
And the dishes of each ingredient are also alphabetically ordered.

[
  ["sauce", "christmas turkey", "pizza"],
  ["sugar", "cake", "hot chocolate"]
]
*/
