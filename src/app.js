import './style.css'
import { fetchData } from './fetch'

//Генерация id либо присвоение значения из адресной строки
let id = +window.location.href.split('/')[3] || Math.floor(Math.random() * 614)

//Получение узлов из DOM
const right = document.querySelector('.right')
const left = document.querySelector('.left')
const text = document.querySelector('.text')
const randBtn = document.querySelector('.random')
const imageBox = document.querySelector('.image-box')

//Создание DOM узлов
const date = document.createElement('div')
let image = document.createElement('img')

//Стили для DOM узлов
image.width='850'
image.height="500"
date.style.position = 'absolute'
date.style.bottom = '-15%'

//Функции загрузки и отображения данных на странице 
randBtn.addEventListener('click', () => {
  let id = Math.floor(Math.random() * 614)
  let isLoaded = image.complete && image.naturalHeight !== 0
  if (isLoaded) {
    fetchData(image, text, imageBox, id, date)
  }
})

right.addEventListener('click', () => {
  id++
  let isLoaded = image.complete && image.naturalHeight !== 0
  if (isLoaded) {
    fetchData(image, text, imageBox, id, date)
  }
})

left.addEventListener('click', () => {
  id--
  let isLoaded = image.complete && image.naturalHeight !== 0
  if (isLoaded) {
    fetchData(image, text, imageBox, id, date)
  }
})

//Функция запуска при первой загрузке страницы
fetchData(image, text, imageBox, id, date)