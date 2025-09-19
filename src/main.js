const card = document.querySelector('.card'); //выбираем  все элементы на странице с классом card на странице
card.addEventListener("click", () => {
  card.classList.toggle("card-show");
});

