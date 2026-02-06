let cats = document.querySelectorAll('.cats-wrapper__img');

function showCats() {
    const promises = []; 
    
    // Без await! Просто создаем промисы
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            cats[0].style.display = "block";
            resolve("Первый котик появился!");
        }, 2000);
    });
    promises.push(promise1);
    
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            cats[1].style.display = "block";
            resolve("Второй котик появился!");
        }, 4000);
    });
    promises.push(promise2);
    
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            cats[2].style.display = "block";
            resolve("Третий котик появился!");
        }, 6000);
    });
    promises.push(promise3);
    
    const promise4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            cats[3].style.display = "block";
            resolve("Четвертый котик появился!");
        }, 8000);
    });
    promises.push(promise4);
    
    return promises;
}

let catsPromises = showCats();
Promise.all(catsPromises)
    .then(
        results => alert("Все котики загружены!")
        
    
    ) // исправлена опечатка
    .catch(err => console.error(err));