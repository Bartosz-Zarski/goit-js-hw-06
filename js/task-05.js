const outputEl = document.getElementById("name-output");
const inputEl = document.getElementById("name-input");

const changeOutput = () => {
  outputEl.textContent = inputEl.value;
};

const finalInput = () => {
  inputEl.value === "" ? (outputEl.innerHTML = "Anonymous") : changeOutput();
};

inputEl.addEventListener("input", finalInput);
