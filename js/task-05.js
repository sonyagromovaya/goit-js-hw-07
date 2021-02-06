const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");
inputRef.addEventListener("input", () => {
  spanRef.textContent = inputRef.value;
  if(inputRef.value === ''){
    spanRef.textContent = 'незнакомец';
  }
  if(inputRef.value.trim() === ''){
    spanRef.textContent = 'незнакомец';
  }
});
