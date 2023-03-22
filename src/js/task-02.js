const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");

ingredients.forEach(function(element) {
  let ingredientsIndex = document.createElement("li");
  ingredientsIndex.classList.add("item");
  ingredientsIndex.textContent = element;
  list.append(ingredientsIndex);
});
ingredients.forEach((element, index, ingredients) => {
  const nextIndex = index + 1;
  if (nextIndex < ingredients.length) {
    element.nextIndex = nextIndex;
  }
});


