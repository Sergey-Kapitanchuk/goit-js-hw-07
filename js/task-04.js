// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValue = document.querySelector(`#value`);
const buttonAddBtn = document.querySelector('[data-action="decrement"]');
const buttonRemoveBtn = document.querySelector('[data-action="increment"]');



const increment = () => counterValue.textContent --;

const decrement = () => counterValue.textContent ++;


buttonAddBtn.addEventListener(`click`, increment);
buttonRemoveBtn.addEventListener(`click`, decrement);

