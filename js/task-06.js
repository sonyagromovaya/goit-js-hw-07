const inputRef = document.querySelector("#validation-input");
const lengthRef = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", (e) => {
  if (e.currentTarget.value.length < lengthRef) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  } else {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  }
});
