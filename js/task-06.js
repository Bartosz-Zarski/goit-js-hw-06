const textInput = document.getElementById("validation-input");
const dtLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
  textInput.setAttribute("placeholder", "");
});
textInput.addEventListener("focus", () => {
  textInput.setAttribute("placeholder", "Please enter 6 symbols");
});

function validate(textInput, dtLength) {
  if (textInput.value.length == dtLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
}

textInput.addEventListener("blur", () => {
  validate(textInput, dtLength);
});
