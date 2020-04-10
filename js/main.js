//  Постоянная в которой хранится кнопка корзины
const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
 

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);
/*
// Когда случится какое-то событие, выполни функцию
cartButton.addEventListener("click", function () {
// У модального окна получить список классов и добавить туда свой
    modal.classList.add("is-open");
});

close.addEventListener("click", function () {
    // У модального окна получить список классов и добавить туда свой
        modal.classList.remove("is-open");
    });
*/
function toggleModal() {
    //toggle - включает класс
    modal.classList.toggle("is-open");
}

new WOW().init();