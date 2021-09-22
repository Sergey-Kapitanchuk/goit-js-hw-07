const categoryEl = document.querySelectorAll(`.item`);
console.log(`В списке ${categoryEl.length} категории.`)

categoryEl.forEach(el => {
    console.log(`Категория:`, el.firstElementChild.textContent),
        console.log(`Количество элементов:`, el.lastElementChild.children.length)
});

