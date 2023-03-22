const outputEl = document.getElementById("name-output");
const inputEl = document.getElementById("name-input");

    // inputEl.addEventListener("input", (event) => {
    //     outputEl.textContent = event.currentTarget.value !== ''
    //     ? event.currentTarget.value
    //     : 'Anonymous';
    // });
    
const changeOutput = () => {
    outputEl.textContent = inputEl.value;
}

const finalInput = () => { inputEl.value === '' ? outputEl.innerHTML = 'Anonymous' : changeOutput(); }

inputEl.addEventListener("input", finalInput);

