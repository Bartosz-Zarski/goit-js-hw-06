const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  let ingredientsIndex = document.createElement("li");
  ingredientsIndex.classList.add("item");
  ingredientsIndex.textContent = element;
  list.append(ingredientsIndex);
});

