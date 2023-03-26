function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let numberAmount = 1;
let width = 30;
let height = 30;
let inputEl = document.querySelector("input");

const divWrapper = document.getElementById("boxes");
const buttonAdd = document.querySelector("[data-create]");
const buttonRemove = document.querySelector("[data-destroy]");

// DODANIE DIVA
const createElement = () => {
  let amount = inputEl.value;
  const count = parseInt(amount, 10);
  for (let i = 0; i < count; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", (numberAmount += 1));
    div.style.width = `${width}px`;
    width += 10;
    div.style.height = `${height}px`;
    height += 10;
    div.style.backgroundColor = getRandomHexColor();
    divWrapper.appendChild(div);
  }
};

// USUNIĘCIE DIVA
const destroyElement = () => {
  let amount = inputEl.value;
  const count = parseInt(amount, 10);
  for (let i = 0; i < count; i++) {
    divWrapper.removeChild(divWrapper.lastChild);
  }
};

buttonAdd.addEventListener("click", createElement);
buttonRemove.addEventListener("click", destroyElement);
