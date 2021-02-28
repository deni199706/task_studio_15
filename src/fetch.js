import { formatDate } from '../utils'

export const fetchData = async (image, text, imageBox, id, date) => {
  let url = `https://secret-ocean-49799.herokuapp.com/https://xkcd.com/${id}/info.0.json`

  try {
    //Запрос на сервер
    const response = await fetch(url)
    const data = await response.json()

    //Добавление id в адресную строку
    history.pushState(null, null, id)
    
    //Присвоение свойств DOM узлам
    image.src = data.img
    image.title = data.alt
    text.innerText = data.title

    //Функция форматирования даты
    date.innerText = formatDate(data.day, data.month, data.year)

    //Добавление дочерних узлов
    imageBox.appendChild(image)
    imageBox.appendChild(date)

  } catch (error) {
    console.log(error);
    }
}
