import { searchCity } from './api.js'
import { comuni } from './comuni.js'

const selectComuni = document.querySelector('#comuni')
const messaggio = document.querySelector('#messaggio')
const meteo = document.querySelector('#meteo')
const btnVisualizza = document.querySelector('#btn-visualizza')

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
    messaggio.textContent = 'Seleziona un comune per visualizzare il meteo'
    return
  } else {
    messaggio.textContent = `Hai selezionato ${
      selectComuni.options[selectComuni.selectedIndex].text
    }`

    // messaggio.textContent = `Hai selezionato ${selectComuni.attributes.getNamedItem()}`
  }

  // // Chiamata alla funzione searchCity con il comune selezionato
  try {
    const data = await searchCity(comuneSelezionato)
    meteo.textContent = `Il tempo a ${data.name} è ${data.weather[0].description}.`
  } catch (error) {
    console.error(error)
  }
})
