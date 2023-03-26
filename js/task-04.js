const remove = document.querySelector('[data-action="decrement"]');
const add = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const addClick = () => {
  counterValue++;
  document.getElementById("value").innerHTML = counterValue;
};

const removeClick = () => {
  counterValue--;
  document.getElementById("value").innerHTML = counterValue;
};

add.addEventListener("click", addClick);
remove.addEventListener("click", removeClick);
