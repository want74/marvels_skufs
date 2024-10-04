// let bdObj = [];
// function render_1(obj) {
//     const main = document.querySelector("main");
//     const films_nums = obj.film;

//     for (const film_num of films_nums) {
//         bdObj.push(film_num)
//         console.log(film_num)
//         // obj.numbers = newArray;
//     }
    
// }


// async function populate() {
//     const requestURL = "bd.json";
//     const request = new Request(requestURL);

//     const response = await fetch(request);
//     const films = await response.json();

//     render_1(films);
// }
// populate();

// let newObj = {"name" : "тест",
//             "desc" : "Опис",
//             "tg": "https://t.me/marvel_skufs/2",
//             "line": 1};
// bdObj.items.push(newObj);

// const fs = require('fs');

// const newFilm = {
//     "name" : "Блейд 12",
//     "desc" : "",
//     "tg": "https://t.me/marvel_skufs/2",
//     "line": 0
// };

// // Считывание JSON данных из файла
// fs.readFile('bd.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Ошибка при чтении файла:', err);
//     return;
//   }

//   let jsonData = JSON.parse(data);

//   // Добавление нового фильма в массив фильмов
//   jsonData.films.push(newFilm);

//   // Запись обновленных данных обратно в файл
//   fs.writeFile('bd.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
//     if (err) {
//       console.error('Ошибка при записи в файл:', err);
//       return;
//     }
//     console.log('Новый фильм успешно добавлен!');
//   });
// });

const fs = require('fs');

const newFilm = {
    "name" : "Блейд 12",
    "desc" : "",
    "tg": "https://t.me/marvel_skufs/2",
    "line": 0
};

// Считывание JSON данных из файла
fs.readFile('bd.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка при чтении файла:', err);
    return;
  }

  let jsonData;
  try {
    jsonData = JSON.parse(data);
  } catch (parseErr) {
    console.error('Ошибка при парсинге JSON данных:', parseErr);
    return;
  }

  // Убедитесь, что массив `films` существует и инициализируйте его, если это не так
  if (!Array.isArray(jsonData.film)) {
    jsonData.film = [];
  }

  // Добавление нового фильма в массив фильмов
  jsonData.film.push(newFilm);

  // Запись обновленных данных обратно в файл
  fs.writeFile('bd.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Ошибка при записи в файл:', err);
      return;
    }
    console.log('Новый фильм успешно добавлен!');
  });
});




