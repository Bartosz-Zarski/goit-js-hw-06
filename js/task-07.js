const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");

inputEl.addEventListener("input", function () {
  let size = inputEl.value;
  spanEl.style.fontSize = size + "px";
});
