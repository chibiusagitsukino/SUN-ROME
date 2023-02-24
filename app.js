import { searchCity } from './api.js'
import { comuni } from './comuni.js'

const sunRome = document.querySelector('#sun-rome')
const selectComuni = document.querySelector('#comuni')
const messaggio = document.querySelector('#messaggio')
const meteo = document.querySelector('#meteo')
const btnVisualizza = document.querySelector('#btn-visualizza')
const weatherCard = document.querySelector('#weather-card')

// creo la select

const createDynamicSelect = () => {
  for (let i = 0; i < comuni.length; i++) {
    const option = document.createElement('option')
    option.value = comuni[i].value
    option.text = comuni[i].name
    selectComuni.appendChild(option)
  }
}

createDynamicSelect()

// gestione del bottone

btnVisualizza.addEventListener('click', async () => {
  const comuneSelezionato = selectComuni.value

  if (comuneSelezionato === '') {
    messaggio.textContent = 'Select a Municipality to get weather forecasts'
    return
  } else {
    messaggio.textContent = `You Selected ${
      selectComuni.options[selectComuni.selectedIndex].text
    }`

    // messaggio.textContent = `Hai selezionato ${selectComuni.attributes.getNamedItem()}`
  }

  // chiamata alla funzione searchCity con il comune selezionato
  try {
    const data = await searchCity(comuneSelezionato)
    // meteo.textContent = `Il tempo a ${data.name} è ${data.weather[0].description}.`

    const weatherCardEl = document.createElement('div')
    weatherCardEl.classList.add('card')

    const title = document.createElement('h2')
    title.textContent = `${data.name}`
    title.classList.add('title')

    const icon = document.createElement('img')
    icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    icon.classList.add('icon')

    const description = document.createElement('p')
    description.textContent = `${data.weather[0].description}`
    description.classList.add('description')

    const tempMin = document.createElement('p')
    tempMin.textContent = `Min: ${data.main.temp_min}°C`
    tempMin.classList.add('tempMin')

    const tempMax = document.createElement('p')
    tempMax.textContent = `Max: ${data.main.temp_max}°C`
    tempMax.classList.add('tempMax')

    const humidity = document.createElement('p')
    humidity.textContent = `Humidity: ${data.main.humidity}%`
    humidity.classList.add('humidity')

    weatherCardEl.append(title, icon, description, tempMin, tempMax, humidity)

    // Rimuovi la vecchia card
    weatherCard.innerHTML = ''

    // Aggiungi la nuova card
    weatherCard.appendChild(weatherCardEl)
  } catch (error) {
    console.error(error)
  }
})

sunRome.append()
