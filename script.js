document.getElementById('start').onclick = function () {   //по клику запускается функция
    var timer;   
    var a = 0;
    timer(); //запускаем функцию таймер

    function timer() {
        document.getElementById('out').innerHTML = a; //прописываем в параграф число 0
        a++;  //наращиваем число
        setTimeout(timer, 1000); //периодичность наращивания 1сек
    }


    var cards = document.querySelectorAll('.box');  //получаем массив карточек
    var hasFlippedCard = false;
    var lockBoard = false;
    var firstCard, secondCard;   


    function flipCard() {  //переворот карты
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;  
            firstCard = this;  //первый клик

            return;
        }
        secondCard = this;  //второй клик

        checkForMatch(); //запускаем функцию проверки на совпадение
    }

    function checkForMatch() {   //проверка на совпадение
        if (firstCard.dataset.name === secondCard.dataset.name) {
            disableCards(); //если строго равны то запускается функция которая морозит переворот
        } else {
            unflipCards(); //иначе запускается функция, которая переворачивает карты назад
        }
    }

    function disableCards() {  //функция отключения переворота
        firstCard.removeEventListener('click', flipCard);  //удаляет событие клик на переворот первой карты
        secondCard.removeEventListener('click', flipCard);  //удаляет событие клик на переворот второй карты

        resetBoard();
    }

    function unflipCards() {  
        lockBoard = true;

        setTimeout(() => {  //таймер анимации переворота
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        hasFlippedCard = false;
        lockBoard = false;
        firstCard = null;
        secondCard = null;
    }

    function shuffle() { //перетасовка карт
        cards.forEach(card => {
            var randomPos = Math.floor(Math.random() * 16)//генерируем рандомный порядок
            card.style.order = randomPos; //присваиваем рандомный порядок
        });
    };
    shuffle(); //запускаем функцию перетасовки

    console.log(cards);  //проверка для себя где какие карты находятся 

    cards.forEach(card => card.addEventListener('click', flipCard)); //запускаем функцию переворота по клику по любой карте в массиве

    
}



