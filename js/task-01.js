const itemsRef = document.querySelectorAll(".item");
console.log(`В списке ${itemsRef.length} категории.`);
console.log(itemsRef);
itemsRef.forEach((item) => {
  console.log("Категория: " + item.firstElementChild.textContent);
  console.log("Количество элементов: " + item.lastElementChild.children.length);
});
