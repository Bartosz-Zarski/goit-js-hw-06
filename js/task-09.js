function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

const setBg = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.innerText = getRandomHexColor();
};
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", setBg)