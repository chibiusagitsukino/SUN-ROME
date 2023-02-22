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

// btnVisualizza.addEventListener('click', async () => {
//   const comuneSelezionato = selectComuni.value

//   console.log(selectComuni, 'selectComuni')

//   if (comuneSelezionato === '') {
//     messaggio.textContent = 'Seleziona un comune per visualizzare il meteo'
//   } else {
//     messaggio.textContent = `Hai selezionato ${
//       //   const comuneSelezionato = selectComuni.value
//       //   messaggio.textContent = `Hai selezionato ${selectComuni.value}`

//       selectComuni.options[selectComuni.selectedIndex].text
//     }`
//   }
// })

btnVisualizza.addEventListener('click', async () => {
  const comuneSelezionato = selectComuni.value

  if (comuneSelezionato === '') {
    messaggio.textContent = 'Seleziona un comune per visualizzare il meteo'
    return
  } else {
    messaggio.textContent = `Hai selezionato ${
      selectComuni.options[selectComuni.selectedIndex].text
    }`
  }

  //   try {
  //     const data = await searchCity(comuneSelezionato)
  //     meteo.textContent = `Il tempo a ${data.name} è ${data.weather[0].description}.`
  //   } catch (error) {
  //     console.error(error)
  //   }
})

// function createOption(value) {
//   const option = document.createElement('option')
//   option.value = value
//   option.appendChild(document.createTextNode(value))
//   selectComuni.appendChild(option)
// }

// // popolo la select con i comuni presenti nell'array
// for (let i = 0; i < comuni.length; i++) {
//   const option = document.createElement('option')
//   option.value = comuni[i].value
//   option.text = comuni[i].name
//   select.appendChild(option)
// }

// // Chiamata alla funzione searchCity con il comune selezionato
// const data = await searchCity(comuneSelezionato)

// // Visualizzazione della descrizione del meteo nella pagina HTML
// const meteo = document.querySelector('#meteo')
// meteo.textContent = `Il tempo a ${data.name} è ${data.weather[0].description}.`

// // richiamo searchCity
// try {
//   const result = await searchCity(comuneSelezionato)
//   console.log(result)
// } catch (error) {
//   console.error(error)
// }
