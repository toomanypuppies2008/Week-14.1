const directors = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
    films:
      "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
    films:
      "https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссёр, Продюсер",
    films: "https://www.film.ru/person/martin-makdonah",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссёр, Сценарист, Актёр, Продюсер",
    films: "https://www.film.ru/person/aleksey-balabanov",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссёр, Сценарист, Актёр",
    films: "https://www.film.ru/person/piter-farrelli",
    top_rated_film: "Зелёная книга",
  },
  {
    name: "Юрий Быков",
    career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
    films: "https://www.film.ru/person/yuriy-bykov",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
    films: "https://www.film.ru/person/zhan-mark-valle",
    top_rated_film: "Далласский клуб покупателей",
  },
];

const names = directors.map(function (person) {
  return person.name;
});

const careers = directors.map(function (person) {
  return person.career;
});

const films = directors.map(function (person) {
  return person.films;
});
const one = document.querySelector(".one");
one.textContent = names[0];
const two = document.querySelector(".two");
two.textContent = names[1];
const three = document.querySelector(".three");
three.textContent = names[2];
const four = document.querySelector(".four");
four.textContent = names[3];
const five = document.querySelector(".five");
five.textContent = names[4];
const six = document.querySelector(".six");
six.textContent = names[5];
const seven = document.querySelector(".seven");
seven.textContent = names[6];

const divOne = document.getElementById("one");
divOne.textContent = careers[0];
const linkOne = document.createElement("a");
linkOne.innerHTML = "Фильмография";
linkOne.setAttribute("href", films[0]);
divOne.append(linkOne);

const divTwo = document.getElementById("two");
divTwo.textContent = careers[1];
const linkTwo = document.createElement("a");
linkTwo.innerHTML = "Фильмография";
linkTwo.setAttribute("href", films[1]);
divTwo.append(linkTwo);

const divThree = document.getElementById("three");
divThree.textContent = careers[2];
const linkThree = document.createElement("a");
linkThree.innerHTML = "Фильмография";
linkThree.setAttribute("href", films[2]);
divThree.append(linkThree);

const divFour = document.getElementById("four");
divFour.textContent = careers[3];
const linkFour = document.createElement("a");
linkFour.innerHTML = "Фильмография";
linkFour.setAttribute("href", films[3]);
divFour.append(linkFour);

const divFive = document.getElementById("five");
divFive.textContent = careers[4];
const linkFive = document.createElement("a");
linkFive.innerHTML = "Фильмография";
linkFive.setAttribute("href", films[4]);
divFive.append(linkFive);

const divSix = document.getElementById("six");
divSix.textContent = careers[5];
const linkSix = document.createElement("a");
linkSix.innerHTML = "Фильмография";
linkSix.setAttribute("href", films[5]);
divSix.append(linkSix);

const divSeven = document.getElementById("seven");
divSeven.textContent = careers[6];
const linkSeven = document.createElement("a");
linkSeven.innerHTML = "Фильмография";
linkSeven.setAttribute("href", films[6]);
divSeven.append(linkSeven);

const divEight = document.createElement("div");
document.body.append(divEight);
divEight.classList.add("lastDiv");

const topFilmsList = directors.map(function (top) {
  return `"${top.top_rated_film}" `;
});
divEight.textContent = topFilmsList;
divEight.prepend("Лучшие Фильмы: ");
