// const count = 0;
// const destinationBtn = document.querySelector(".destination-wrap_new");
// const firstDiv = document.querySelector(":nth-child(1)");

// firstDiv.addEventListener("mouseover", function(){
//     count++;
// 	destinationBtn.innerHTML = count;
// });

// const showMore = document.querySelector ('.show-more');                                 /* задаем переменную нашей кнопке и находим ее в докумкенте*/
// const productsLenght = document.querySelectorAll('destination-wrap-item').Lenght;       /* задали чтобы сказать потом сколько мах на стр должно быть* */
// let items= 6;                                                                                   /* т к 2 линии по 3 сетки ( если делать по штучно то 6 карточек)*/
// showMore.addEventListener('click', () => {
//   items += 3  }                                                                             /*ызадаем шаг 3, чтобы появлялось по 3 карточки  */
// const array = Array.from(document.querySelector('destination-wrap').children);     /*нашли все наши элементы , массив*/
// const visItems = array.slice(0, items);                                                             /*вырезаем часть, и потом обратно возвращаем, т е 100 карточек, нам нужно 10 , вот мы их берем и потом их будем + к стр slice -возвращает это число*/
// const visItems.forEach(el => el.classlist.add('is-visible'));


const menuBtn = document.querySelector('.navbar__menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
menu.classList.toggle('menu__list--active');

});