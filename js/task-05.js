// Напиши скрипт который, при наборе текста в input `input#name-input` (событие
// input), подставляет его текущее значение в `span#name-output`. Если input
// пустой, в span должна отображаться строка `'незнакомец'`.

const input = document.querySelector(`#name-input`);
const nameSpun = document.querySelector(`#name-output`);

input.addEventListener(`input`, inputChange);

function inputChange(click) {
    if (nameSpun.textContent = click.currentTarget.value);
    else (nameSpun.textContent = 'незнакомец');
};