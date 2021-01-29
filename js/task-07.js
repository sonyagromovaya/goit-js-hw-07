const rangeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
console.log(rangeRef.value);

rangeRef.addEventListener("input", (e) => {
  textRef.style.fontSize = Number(e.target.value) + "px";
});
