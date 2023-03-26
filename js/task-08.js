const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  const emailValue = formEl.elements.email.value;
  const passwordValue = formEl.elements.password.value;
  const inputsValue = { Email: emailValue, Password: passwordValue };

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  } else {
    console.log(inputsValue);
  }

  event.currentTarget.reset();
}
