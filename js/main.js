async function showCats() {
    const cats = document.querySelectorAll('.cats-wrapper__img');
    
    for (let i = 0; i < cats.length; i++) {
        await new Promise(resolve => {
            setTimeout(() => {
                // Добавляем класс с анимацией
                if (cats[i].classList.contains('cats-wrapper__left')) {
                    cats[i].classList.add('slide-in-left');
                } else {
                    cats[i].classList.add('slide-in-right');
                }
                
                resolve(`Котик ${i + 1} появился!`);
            }, 1000 * i); // Каждую секунду новый кот
        });
    }
    
    return "Все котики пришли!";
}

// Запуск
showCats().then(() => {
    setTimeout(() => {
        alert("Все котики собрались в центре! 🐱");
    }, 1000);
});