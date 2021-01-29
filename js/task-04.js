let spanRef = document.querySelector("#value");
let counterValue = 0;

let minusBtnRef = document.querySelector('button[data-action="decrement"]');
let plusBtnRef = document.querySelector("button[data-action='increment']");

minusBtnRef.addEventListener("click", decrement);
plusBtnRef.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  spanRef.textContent = counterValue;
}
function increment() {
  counterValue += 1;
  spanRef.textContent = counterValue;
}
