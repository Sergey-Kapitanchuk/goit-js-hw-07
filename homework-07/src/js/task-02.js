const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const bigUlEl = document.querySelector(`#ingredients`)

const values = ingredients.map(ingredient => {
  const liEl = document.createElement(`li`)
  liEl.textContent = ingredient

  return liEl;
});
console.log(values)
bigUlEl.append(...values);