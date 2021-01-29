const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulRef = document.querySelector("#ingredients");
const newArr = ingredients.map((li) => {
  const liItem = document.createElement("li");
  liItem.textContent = li;
  return liItem;
});

ulRef.append(...newArr);
